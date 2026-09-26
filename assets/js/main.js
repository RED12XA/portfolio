/* =====================================================================
   Language, rendering and interactions.
   ===================================================================== */
(() => {
  'use strict';

  const SITE = window.SITE;
  const html = document.documentElement;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const LANGS = ['fr', 'en', 'ar'];
  const LOCALES = { fr: 'fr-FR', en: 'en-GB', ar: 'ar-MA' };
  const AR_FONTS = 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap';
  let lang = 'fr';

  /* ---------------------------------------------------------------
     i18n — French is read from the markup once, before any switch.
     --------------------------------------------------------------- */
  const STR = { fr: { ...SITE.strings.fr }, en: SITE.strings.en, ar: SITE.strings.ar };

  function harvestFrench() {
    const fr = STR.fr;
    $$('[data-i18n]').forEach(el => { if (!(el.dataset.i18n in fr)) fr[el.dataset.i18n] = el.textContent.trim(); });
    $$('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      if (!(key in fr)) fr[key] = el.getAttribute(attr) || '';
    }));
    fr.meta_title = document.title;
    fr.meta_desc = $('meta[name="description"]').getAttribute('content');
  }

  const t = key => STR[lang][key] ?? STR.fr[key] ?? '';
  const L = value => (value && typeof value === 'object' && !Array.isArray(value)) ? (value[lang] ?? value.fr) : value;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
  const fmtDate = iso => new Intl.DateTimeFormat(LOCALES[lang], { day: 'numeric', month: 'long', year: 'numeric' })
    .format(new Date(iso + 'T12:00:00'));

  function applyStatic() {
    $$('[data-i18n]').forEach(el => { const v = t(el.dataset.i18n); if (v) el.textContent = v; });
    $$('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      const v = t(key);
      if (v) el.setAttribute(attr, v);
    }));
    document.title = t('meta_title');
    $('meta[name="description"]').setAttribute('content', t('meta_desc'));
  }

  function loadArabicFonts() {
    if (document.getElementById('font-ar')) return;
    const link = Object.assign(document.createElement('link'), { id: 'font-ar', rel: 'stylesheet', href: AR_FONTS });
    document.head.append(link);
  }

  function setLang(next, { remember = true } = {}) {
    lang = LANGS.includes(next) ? next : 'fr';
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') loadArabicFonts();

    applyStatic();
    renderWork();
    renderSystems();
    renderCerts();

    $$('.lang .seg__opt').forEach((btn, i) => {
      const on = btn.dataset.lang === lang;
      btn.setAttribute('aria-pressed', String(on));
      if (on) btn.parentElement.style.setProperty('--i', i);
    });

    if (remember) {
      try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
      const url = new URL(location.href);
      if (lang === 'fr') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
      history.replaceState(history.state, '', url);
    }
    html.classList.remove('is-translating');
    requestAnimationFrame(moveIndicator);
  }

  /* ---------------------------------------------------------------
     Work — live websites
     --------------------------------------------------------------- */
  const ICON_LOCK = '<svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true"><rect x="3.5" y="7" width="9" height="6.5" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M5.6 7V5.3a2.4 2.4 0 0 1 4.8 0V7" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>';
  const ICON_OUT = '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M5 11 11 5M6.2 5H11v4.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function exhibit(w) {
    const facts = [['fact_place', L(w.place)], ['fact_stack', w.stack], ['fact_langs', L(w.langs)]].filter(([, v]) => v);
    return `
      <article class="exhibit${w.featured ? '' : ' exhibit--compact'}">
        <div class="exhibit__stage">
          <div class="browser" data-pan>
            <div class="browser__bar" aria-hidden="true">
              <span class="browser__dots"><i></i><i></i><i></i></span>
              <span class="browser__url">${ICON_LOCK}${esc(w.domain)}</span>
            </div>
            <div class="browser__view">
              <img src="${w.desktop}" width="1200" height="${w.desktopH}" alt="${esc(fill(t('alt_desktop'), { name: w.name }))}" loading="lazy" decoding="async">
            </div>
          </div>
          ${w.featured && w.mobile ? `
          <div class="phone" aria-hidden="true">
            <div class="phone__screen"><img src="${w.mobile}" width="540" height="1169" alt="" loading="lazy" decoding="async"></div>
          </div>` : ''}
        </div>
        <div class="placard">
          ${w.latest ? `<p class="placard__status">${esc(t('work_latest'))}</p>` : ''}
          <h3 class="placard__title">${esc(w.name)}</h3>
          <p class="placard__kind">${esc(L(w.kind))}</p>
          <dl class="placard__facts">${facts.map(([k, v]) => `<dt>${esc(t(k))}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
          <p class="placard__text">${esc(L(w.text))}</p>
          <a class="placard__link" href="${w.url}" target="_blank" rel="noopener">${esc(t('work_visit'))}<span class="sr-only"> ${esc(w.name)} ${esc(t('new_tab'))}</span>${ICON_OUT}</a>
        </div>
      </article>`;
  }

  function renderWork() {
    const featured = SITE.work.filter(w => w.featured);
    const earlier = SITE.work.filter(w => !w.featured);
    $('#exhibits').innerHTML = featured.map(exhibit).join('');
    $('#earlier').innerHTML = earlier.map(exhibit).join('');
    setupPans();
  }

  /* Hover (or tap) a browser frame to scroll through the full-page capture. */
  const panObserver = new ResizeObserver(entries => entries.forEach(e => measurePan(e.target.closest('[data-pan]'))));
  function measurePan(frame) {
    if (!frame) return;
    const view = $('.browser__view', frame), img = $('img', view);
    const ratio = +img.getAttribute('height') / +img.getAttribute('width');
    const distance = Math.max(0, view.clientWidth * ratio - view.clientHeight);
    frame.style.setProperty('--pan', `${-distance.toFixed(1)}px`);
    frame.style.setProperty('--pan-dur', `${Math.min(11, Math.max(2.4, distance / 330)).toFixed(2)}s`);
  }
  function setupPans() {
    panObserver.disconnect();
    $$('[data-pan]').forEach(frame => {
      measurePan(frame);
      panObserver.observe($('.browser__view', frame));
    });
  }
  document.addEventListener('click', e => {
    const frame = e.target.closest('[data-pan]');
    if (frame && matchMedia('(hover: none)').matches) frame.classList.toggle('is-panning');
  });

  /* ---------------------------------------------------------------
     Systems — filterable, expandable index
     --------------------------------------------------------------- */
  let filter = 'all';
  const ICON_PLUS = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

  function renderSystems() {
    const list = $('#sysIndex');
    const open = new Set($$('.index__row.is-open', list).map(r => r.dataset.id));
    list.innerHTML = SITE.systems.map(s => {
      const isOpen = open.has(s.id);
      return `
      <li class="index__row${isOpen ? ' is-open' : ''}" data-id="${s.id}" data-cat="${s.cat}">
        <button type="button" class="index__head" aria-expanded="${isOpen}" aria-controls="sys-${s.id}">
          <span class="index__name"><span class="index__title">${esc(L(s.title))}</span><span class="index__sub">${esc(L(s.sub))}</span></span>
          <span class="index__ctx">${esc(L(s.ctx))}</span>
          <span class="index__stack" dir="ltr">${esc(s.stack.slice(0, 3).join(', '))}</span>
          <span class="index__icon">${ICON_PLUS}</span>
        </button>
        <div class="index__body" id="sys-${s.id}">
          <div class="index__inner">
            <div class="index__content">
              <p class="index__desc">${esc(L(s.desc))}</p>
              <div class="index__more">
                <h4>${esc(t('sys_points'))}</h4>
                <ul class="index__points">${L(s.points).map(p => `<li>${esc(p)}</li>`).join('')}</ul>
                <h4>${esc(t('sys_stack'))}</h4>
                <p class="index__tech">${esc(s.stack.join(', '))}</p>
              </div>
            </div>
          </div>
        </div>
      </li>`;
    }).join('');
    applyFilter();
  }

  function applyFilter() {
    $$('#sysIndex .index__row').forEach(row => { row.hidden = filter !== 'all' && row.dataset.cat !== filter; });
    $$('.filter .seg__opt').forEach((btn, i) => {
      const on = btn.dataset.filter === filter;
      btn.setAttribute('aria-pressed', String(on));
      if (on) btn.parentElement.style.setProperty('--i', i);
    });
  }

  function countSystems() {
    const counts = { all: SITE.systems.length };
    SITE.systems.forEach(s => { counts[s.cat] = (counts[s.cat] || 0) + 1; });
    $$('[data-count]').forEach(el => { el.textContent = counts[el.dataset.count] || 0; });
  }

  /* ---------------------------------------------------------------
     Certifications
     --------------------------------------------------------------- */
  function renderCerts() {
    $('#certs').innerHTML = SITE.certs.map((c, i) => `
      <li class="cert${c.featured ? ' cert--featured' : ''}">
        <button type="button" class="cert__btn" data-cert="${i}" aria-haspopup="dialog">
          ${c.isNew ? `<span class="cert__new">${esc(t('cert_new'))}</span>` : ''}
          <span class="cert__logo" aria-hidden="true">${SITE.logos[c.logo] || ''}</span>
          <span class="cert__issuer">${esc(c.issuer)}</span>
          <span class="cert__title">${esc(c.title)}</span>
          ${c.featured ? `<span class="cert__desc">${esc(L(c.desc))}</span>` : ''}
          <span class="cert__date"><time datetime="${c.date}">${fmtDate(c.date)}</time></span>
        </button>
      </li>`).join('');
  }

  const dialog = $('#certDialog');
  let lastCertButton = null;
  function openCert(i) {
    const c = SITE.certs[i];
    $('.dialog__logo', dialog).innerHTML = SITE.logos[c.logo] || '';
    $('.dialog__issuer', dialog).textContent = c.issuer;
    $('.dialog__title', dialog).textContent = c.title;
    $('.dialog__desc', dialog).textContent = L(c.desc);
    const meta = [[t('cert_type'), L(c.type)], [t('cert_issued'), fmtDate(c.date)]];
    if (c.credential) meta.push([t('cert_id'), c.credential]);
    $('.dialog__meta', dialog).innerHTML = meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
    $('.dialog__skills', dialog).innerHTML = c.skills.map(s => `<li>${esc(s)}</li>`).join('');
    const verify = $('.dialog__verify', dialog);
    verify.hidden = !c.verify;
    if (c.verify) verify.href = c.verify;
    dialog.showModal();
  }

  /* ---------------------------------------------------------------
     Navigation — active section, sliding indicator, mobile sheet
     --------------------------------------------------------------- */
  const nav = $('#nav');
  const navLinks = $$('.nav__links a');
  const indicator = $('.nav__indicator');

  function moveIndicator() {
    const current = navLinks.find(a => a.hasAttribute('aria-current'));
    if (!current || !current.offsetWidth) { indicator.style.opacity = '0'; return; }
    indicator.style.opacity = '1';
    indicator.style.width = `${current.offsetWidth}px`;
    indicator.style.transform = `translateX(${current.offsetLeft}px)`;
  }
  function setCurrent(id) {
    navLinks.forEach(a => {
      if (a.hash === `#${id}`) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    moveIndicator();
  }
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) setCurrent(e.target.id); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main > section[id]').forEach(s => sectionObserver.observe(s));

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => requestAnimationFrame(moveIndicator), { passive: true });

  const toggle = $('.nav__toggle');
  const sheet = $('#navSheet');
  function setSheet(open) {
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      sheet.hidden = false;
      requestAnimationFrame(() => sheet.classList.add('is-open'));
    } else {
      sheet.classList.remove('is-open');
      setTimeout(() => { if (!sheet.classList.contains('is-open')) sheet.hidden = true; }, 260);
    }
  }
  const sheetOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  /* ---------------------------------------------------------------
     Contact — compose a brief, hand it to WhatsApp or the mail app
     --------------------------------------------------------------- */
  const EMAIL = `${SITE.contact.emailUser}@${SITE.contact.emailDomain}`;
  const form = $('#brief');
  const message = $('#briefMsg');
  const error = $('#briefError');
  const chosen = name => {
    const input = form.querySelector(`input[name="${name}"]:checked`);
    return input ? input.nextElementSibling.textContent.trim() : '';
  };
  function showError(on) {
    error.hidden = !on;
    message.setAttribute('aria-invalid', String(on));
  }

  /* ---------------------------------------------------------------
     Wire everything up
     --------------------------------------------------------------- */
  function init() {
    harvestFrench();
    countSystems();
    setLang(window.__initialLang || 'fr', { remember: false });
    onScroll();

    $$('.lang .seg__opt').forEach(btn => btn.addEventListener('click', () => {
      if (btn.dataset.lang !== lang) setLang(btn.dataset.lang);
    }));

    $$('.filter .seg__opt').forEach(btn => btn.addEventListener('click', () => {
      filter = btn.dataset.filter;
      applyFilter();
    }));

    $('#sysIndex').addEventListener('click', e => {
      const head = e.target.closest('.index__head');
      if (!head) return;
      const row = head.closest('.index__row');
      const open = !row.classList.contains('is-open');
      row.classList.toggle('is-open', open);
      head.setAttribute('aria-expanded', String(open));
    });

    $('#certs').addEventListener('click', e => {
      const btn = e.target.closest('[data-cert]');
      if (!btn) return;
      lastCertButton = btn;
      openCert(+btn.dataset.cert);
    });
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { if (lastCertButton) lastCertButton.focus(); });

    toggle.addEventListener('click', () => setSheet(!sheetOpen()));
    sheet.addEventListener('click', e => { if (e.target.closest('a')) setSheet(false); });
    document.addEventListener('click', e => { if (sheetOpen() && !e.target.closest('#nav')) setSheet(false); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && sheetOpen()) { setSheet(false); toggle.focus(); }
    });
    matchMedia('(min-width: 980px)').addEventListener?.('change', ev => { if (ev.matches && sheetOpen()) setSheet(false); });

    $$('[data-reach="email"]').forEach(a => { a.href = `mailto:${EMAIL}`; });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const text = message.value.trim();
      if (!text) { showError(true); message.focus(); return; }
      showError(false);
      const type = chosen('type'), time = chosen('time');
      const lines = [t('compose_hello'), ''];
      if (type) lines.push(`${t('compose_type')} ${type}`);
      if (time) lines.push(`${t('compose_time')} ${time}`);
      if (type || time) lines.push('');
      lines.push(text);
      const body = lines.join('\n');
      if (e.submitter && e.submitter.dataset.via === 'email') {
        const subject = type ? `${t('compose_subject')} ${type}` : t('compose_subject_plain');
        location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      } else {
        window.open(`https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
      }
    });
    message.addEventListener('input', () => { if (message.value.trim()) showError(false); });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveIndicator);
  }

  init();
})();
