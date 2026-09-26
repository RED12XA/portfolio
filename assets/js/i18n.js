/* =====================================================================
   Content & translations.
   French copy lives in index.html (it is read from the page at start-up);
   English and Arabic live here, with the data-driven sections
   (work, systems, certifications). To add a language, add a dictionary
   and a button in the nav.
   ===================================================================== */
window.SITE = {
  contact: {
    whatsapp: '212638994618',
    emailUser: 'ridaessbayi',
    emailDomain: 'gmail.com'
  },

  /* ------------------------------------------------------------------ */
  strings: {
    /* French strings used only by scripts (the rest is in the HTML). */
    fr: {
      work_latest: 'La plus récente',
      work_visit: 'Visiter le site',
      new_tab: '(s’ouvre dans un nouvel onglet)',
      alt_desktop: 'Capture du site {name}',
      fact_place: 'Lieu',
      fact_stack: 'Technique',
      fact_langs: 'Langues',
      sys_points: 'Points clés',
      sys_stack: 'Technique',
      cert_new: 'Nouveau',
      cert_type: 'Type',
      cert_issued: 'Délivré le',
      cert_id: 'Identifiant',
      compose_hello: 'Bonjour, je vous contacte depuis votre portfolio.',
      compose_type: 'Type de projet :',
      compose_time: 'Délai :',
      compose_subject: 'Nouveau projet :',
      compose_subject_plain: 'Nouveau projet'
    },

    en: {
      meta_title: 'Fullstack developer in Meknès — websites, SaaS and industrial systems',
      meta_desc: 'Portfolio of a freelance fullstack developer: websites, online stores, SaaS platforms and industrial systems for clients in Morocco, France, the UK and the UAE.',
      skip: 'Skip to content',
      nav_label: 'Main navigation',
      nav_home: 'Back to top',
      nav_work: 'Work',
      nav_systems: 'Systems',
      nav_about: 'About',
      nav_certs: 'Certifications',
      nav_services: 'Services',
      nav_contact: 'Contact',
      nav_menu: 'Menu',
      lang_label: 'Language',

      hero_kicker: 'Fullstack developer, available for remote projects.',
      hero_w1: 'Solid.',
      hero_w2: 'Useful.',
      hero_w3: 'Beautiful.',
      hero_lede: 'I design and build websites, SaaS platforms and industrial systems, from the database schema to the last pixel.',
      hero_cta_work: 'See the work',
      hero_cta_contact: 'Start a project',
      plate_alt: 'A hollow rhombicuboctahedron hanging from a thread, after a plate by Leonardo da Vinci. Drag it or use the arrow keys to turn it.',
      plate_fig: 'Fig. I',
      plate_note: 'After Leonardo da Vinci, 1509. Give it a turn.',
      latest_label: 'Latest launch',
      latest_text: 'Bilingual French–Arabic store',

      work_title: 'Work',
      work_arg: 'Four live websites, newest first.',
      work_hint_hover: 'Hover over a screen to scroll through the page.',
      work_hint_touch: 'Tap a screen to scroll through the page.',
      work_earlier: 'Earlier work',
      work_latest: 'Latest',
      work_visit: 'Visit the site',
      new_tab: '(opens in a new tab)',
      alt_desktop: 'Screenshot of the {name} website',
      fact_place: 'Location',
      fact_stack: 'Built with',
      fact_langs: 'Languages',

      sys_title: 'Systems and applications',
      sys_arg: 'Business tools running in production, often behind a factory firewall or under NDA, so they are described here without screenshots.',
      sys_filter: 'Filter projects',
      sys_all: 'All',
      sys_industry: 'Industry',
      sys_web: 'Web and SaaS',
      sys_points: 'Highlights',
      sys_stack: 'Built with',

      about_title: 'About',
      about_p1: 'I’m a fullstack developer, trained at École Multihexa in Meknès as a specialized technician in software development. I started at Mediast Agency, where I shipped IdaraSchool (a school SaaS), Red Deer Auto (workshop management) and VitaSilk (a cosmetics brand).',
      about_p2: 'Today, at Versigent (formerly Aptiv), I build industrial digitalization tools: digital kanban, real-time production tracking and less time lost on the shop floor. Alongside that, I build websites and platforms for clients in Morocco, France, the UK and the UAE.',
      fact_projects: 'Projects delivered',
      fact_years: 'Years of experience',
      fact_countries: 'Client countries',
      fact_certs: 'Certifications',
      about_clients_h: 'Clients',
      about_clients: 'Morocco, France, United Kingdom, United Arab Emirates, Canada, United States',
      about_fields_h: 'Fields',
      about_fields: 'Industry and automotive, healthcare, education, e-commerce and marketplaces, construction, digital marketing, delivery and logistics',
      tools_title: 'Toolkit',
      tools_lang: 'Languages',
      tools_back: 'Backend and APIs',
      tools_front: 'Frontend',
      tools_data: 'Data, systems and tools',
      tool_db: 'Database design',
      tool_import: 'Excel and CSV imports',
      tool_barcode: 'Barcode scanning',

      certs_title: 'Certifications',
      certs_arg: 'Seven certificates, newest first. Open one to see the details and the verification link.',
      cert_new: 'New',
      cert_type: 'Type',
      cert_issued: 'Issued',
      cert_id: 'Credential ID',
      cert_close: 'Close',
      cert_skills: 'Skills',
      cert_verify: 'Verify the certificate',

      services_title: 'Services',
      services_arg: 'A complete build, or a targeted intervention on a system that already exists.',
      s1_t: 'Websites and online stores',
      s1_d: 'Fast sites, bilingual when needed, built for search and for turning visits into enquiries.',
      s2_t: 'Custom web applications',
      s2_d: 'A complete business application, from the database to a React or Vue interface.',
      s3_t: 'Dashboards and data',
      s3_d: 'Real-time dashboards, interactive charts and the metrics your business runs on.',
      s4_t: 'Backend and REST APIs',
      s4_d: 'Laravel, FastAPI or Flask: documented APIs, JWT authentication and role management.',
      s5_t: 'Data pipelines and imports',
      s5_d: 'Python and Pandas scripts to clean, transform and import your Excel or CSV files.',
      s6_t: 'Industrial integrations',
      s6_d: 'Tauri desktop apps, print servers, barcode scanning and labels.',
      method_title: 'Method',
      m1_t: 'Understand',
      m1_d: 'Your needs, your users and the real constraints of your environment.',
      m2_t: 'Structure',
      m2_d: 'The database and the architecture, before the first line of interface.',
      m3_t: 'Build',
      m3_d: 'In iterations, with regular demos so we can adjust to your feedback.',
      m4_t: 'Deliver',
      m4_d: 'Clean code, a careful launch and support after delivery.',

      contact_title: 'Let’s talk about your project',
      contact_arg: 'Describe what you need in a few words: I’ll get back to you quickly with a concrete proposal.',
      reach_email: 'Email',
      reach_email_note: 'For a detailed brief',
      reach_linkedin_note: 'Professional background',
      reach_github_note: 'Code and side projects',
      brief_type: 'Project type',
      brief_t1: 'Website',
      brief_t2: 'Online store',
      brief_t3: 'SaaS platform',
      brief_t4: 'Business system',
      brief_t5: 'Something else',
      brief_time: 'Timeline',
      brief_d1: 'Under a month',
      brief_d2: '1 to 3 months',
      brief_d3: 'Flexible',
      brief_msg: 'Your message',
      brief_ph: 'A few lines about your business and what you’d like to build.',
      brief_error: 'Write a few words about your project before sending.',
      brief_wa: 'Send on WhatsApp',
      brief_mail: 'Send by email',
      brief_note: 'Your message opens in WhatsApp or your email app: nothing is sent until you confirm.',
      compose_hello: 'Hello, I’m reaching out from your portfolio.',
      compose_type: 'Project type:',
      compose_time: 'Timeline:',
      compose_subject: 'New project:',
      compose_subject_plain: 'New project',

      footer_line: 'Fullstack developer based in Meknès, Morocco. Remote work worldwide.',
      footer_top: 'Back to top'
    },

    ar: {
      meta_title: 'مطوّر ويب متكامل في مكناس — مواقع ومنصات SaaS وأنظمة صناعية',
      meta_desc: 'معرض أعمال مطوّر ويب متكامل مستقل: مواقع تعريفية، متاجر إلكترونية، منصات SaaS وأنظمة صناعية لعملاء في المغرب وفرنسا والمملكة المتحدة والإمارات.',
      skip: 'تخطَّ إلى المحتوى',
      nav_label: 'التنقل الرئيسي',
      nav_home: 'العودة إلى الأعلى',
      nav_work: 'الأعمال',
      nav_systems: 'الأنظمة',
      nav_about: 'المسار',
      nav_certs: 'الشهادات',
      nav_services: 'الخدمات',
      nav_contact: 'تواصل',
      nav_menu: 'القائمة',
      lang_label: 'اللغة',

      hero_kicker: 'مطوّر ويب متكامل، متاح للمشاريع عن بُعد.',
      hero_w1: 'متين.',
      hero_w2: 'نافع.',
      hero_w3: 'جميل.',
      hero_lede: 'أصمّم وأطوّر المواقع ومنصات SaaS والأنظمة الصناعية، من مخطط قاعدة البيانات إلى آخر بكسل.',
      hero_cta_work: 'شاهد الأعمال',
      hero_cta_contact: 'ابدأ مشروعك',
      plate_alt: 'مجسّم مفرّغ بستة وعشرين وجهاً معلّق بخيط، عن لوحة لليوناردو دا فينشي. اسحبه أو استعمل الأسهم لتدويره.',
      plate_fig: 'الشكل الأول',
      plate_note: 'عن ليوناردو دا فينشي، 1509. أدِره بنفسك.',
      latest_label: 'آخر إطلاق',
      latest_text: 'متجر ثنائي اللغة: فرنسية وعربية',

      work_title: 'الأعمال',
      work_arg: 'أربعة مواقع منشورة، من الأحدث إلى الأقدم.',
      work_hint_hover: 'مرّر المؤشر فوق الشاشة لتصفّح الصفحة.',
      work_hint_touch: 'المس الشاشة لتصفّح الصفحة.',
      work_earlier: 'أعمال سابقة',
      work_latest: 'الأحدث',
      work_visit: 'زيارة الموقع',
      new_tab: '(يُفتح في علامة تبويب جديدة)',
      alt_desktop: 'لقطة من موقع {name}',
      fact_place: 'المكان',
      fact_stack: 'التقنيات',
      fact_langs: 'اللغات',

      sys_title: 'الأنظمة والتطبيقات',
      sys_arg: 'أدوات أعمال تعمل في بيئة الإنتاج، غالباً خلف جدار حماية مصنع أو تحت اتفاقية سرّية، لذلك أعرضها هنا دون لقطات شاشة.',
      sys_filter: 'تصفية المشاريع',
      sys_all: 'الكل',
      sys_industry: 'الصناعة',
      sys_web: 'الويب و SaaS',
      sys_points: 'أبرز النقاط',
      sys_stack: 'التقنيات',

      about_title: 'المسار',
      about_p1: 'أنا مطوّر ويب متكامل، تكوّنت في مدرسة Multihexa بمكناس كتقني متخصص في التطوير المعلوماتي. بدأت في Mediast Agency حيث سلّمت IdaraSchool (منصة SaaS مدرسية) و Red Deer Auto (إدارة ورشة) و VitaSilk (علامة تجميل).',
      about_p2: 'اليوم، في Versigent (سابقاً Aptiv)، أصمّم أدوات للرقمنة الصناعية: كانبان رقمي، تتبّع الإنتاج في الوقت الفعلي وتقليص الوقت الضائع في المصنع. وبالموازاة، أنجز مواقع ومنصات لعملاء في المغرب وفرنسا والمملكة المتحدة والإمارات.',
      fact_projects: 'مشاريع مُسلَّمة',
      fact_years: 'سنوات من الخبرة',
      fact_countries: 'دول العملاء',
      fact_certs: 'شهادات',
      about_clients_h: 'العملاء',
      about_clients: 'المغرب، فرنسا، المملكة المتحدة، الإمارات العربية المتحدة، كندا، الولايات المتحدة',
      about_fields_h: 'المجالات',
      about_fields: 'الصناعة والسيارات، الصحة، التعليم، التجارة الإلكترونية والأسواق الرقمية، البناء، التسويق الرقمي، التوصيل واللوجستيك',
      tools_title: 'أدوات العمل',
      tools_lang: 'اللغات',
      tools_back: 'الخلفية والواجهات البرمجية',
      tools_front: 'الواجهة الأمامية',
      tools_data: 'البيانات والأنظمة والأدوات',
      tool_db: 'تصميم قواعد البيانات',
      tool_import: 'استيراد ملفات Excel و CSV',
      tool_barcode: 'مسح الباركود',

      certs_title: 'الشهادات',
      certs_arg: 'سبع شهادات، من الأحدث إلى الأقدم. افتح إحداها لرؤية التفاصيل ورابط التحقق.',
      cert_new: 'جديد',
      cert_type: 'النوع',
      cert_issued: 'تاريخ الإصدار',
      cert_id: 'المعرّف',
      cert_close: 'إغلاق',
      cert_skills: 'المهارات',
      cert_verify: 'التحقق من الشهادة',

      services_title: 'الخدمات',
      services_arg: 'مشروع متكامل، أو تدخّل محدّد على نظام قائم.',
      s1_t: 'مواقع تعريفية ومتاجر إلكترونية',
      s1_d: 'مواقع سريعة، ثنائية اللغة عند الحاجة، مهيّأة لمحركات البحث ولتحويل الزيارات إلى طلبات.',
      s2_t: 'تطبيقات ويب مخصّصة',
      s2_d: 'تطبيق أعمال متكامل، من قاعدة البيانات إلى واجهة React أو Vue.',
      s3_t: 'لوحات التحكم والبيانات',
      s3_d: 'لوحات تحكم في الوقت الفعلي، رسوم بيانية تفاعلية ومؤشرات نشاطك.',
      s4_t: 'الخلفية وواجهات REST',
      s4_d: 'Laravel أو FastAPI أو Flask: واجهات برمجية موثّقة، مصادقة JWT وإدارة الصلاحيات.',
      s5_t: 'خطوط البيانات والاستيراد',
      s5_d: 'سكريبتات Python و Pandas لتنظيف ملفات Excel أو CSV وتحويلها واستيرادها.',
      s6_t: 'تكاملات صناعية',
      s6_d: 'تطبيقات سطح مكتب Tauri، خوادم طباعة، مسح الباركود والملصقات.',
      method_title: 'المنهجية',
      m1_t: 'الفهم',
      m1_d: 'حاجتك ومستخدموك والقيود الحقيقية لبيئة عملك.',
      m2_t: 'الهيكلة',
      m2_d: 'قاعدة البيانات والبنية، قبل أول سطر في الواجهة.',
      m3_t: 'البناء',
      m3_d: 'على مراحل، مع عروض منتظمة للتعديل حسب ملاحظاتك.',
      m4_t: 'التسليم',
      m4_d: 'كود نظيف، إطلاق متقن ومواكبة بعد التسليم.',

      contact_title: 'لنتحدث عن مشروعك',
      contact_arg: 'صف حاجتك في بضع كلمات: سأردّ عليك بسرعة باقتراح ملموس.',
      reach_email: 'البريد الإلكتروني',
      reach_email_note: 'لدفتر تحمّلات مفصّل',
      reach_linkedin_note: 'المسار المهني',
      reach_github_note: 'الكود والمشاريع الشخصية',
      brief_type: 'نوع المشروع',
      brief_t1: 'موقع تعريفي',
      brief_t2: 'متجر إلكتروني',
      brief_t3: 'منصة SaaS',
      brief_t4: 'نظام أعمال',
      brief_t5: 'شيء آخر',
      brief_time: 'المدة المرغوبة',
      brief_d1: 'أقل من شهر',
      brief_d2: 'من شهر إلى 3 أشهر',
      brief_d3: 'مرنة',
      brief_msg: 'رسالتك',
      brief_ph: 'بضعة أسطر عن نشاطك وما تودّ بناءه.',
      brief_error: 'اكتب بضع كلمات عن مشروعك قبل الإرسال.',
      brief_wa: 'إرسال عبر واتساب',
      brief_mail: 'إرسال بالبريد الإلكتروني',
      brief_note: 'تُفتح رسالتك في واتساب أو في تطبيق البريد: لا يُرسَل شيء قبل تأكيدك.',
      compose_hello: 'مرحباً، أتواصل معك من خلال معرض أعمالك.',
      compose_type: 'نوع المشروع:',
      compose_time: 'المدة:',
      compose_subject: 'مشروع جديد:',
      compose_subject_plain: 'مشروع جديد',

      footer_line: 'مطوّر ويب متكامل مقيم في مكناس، المغرب. عمل عن بُعد في جميع أنحاء العالم.',
      footer_top: 'العودة إلى الأعلى'
    }
  },

  /* ------------------------------------------------------------------
     Live websites, newest first. The first two are shown large.
     ------------------------------------------------------------------ */
  work: [
    {
      name: 'NutritioPharm', url: 'https://nutritiopharm.com/', domain: 'nutritiopharm.com',
      desktop: 'assets/work/nutritiopharm-desktop.webp', desktopH: 4200,
      mobile: 'assets/work/nutritiopharm-mobile.webp',
      latest: true, featured: true,
      kind: { fr: 'Boutique en ligne pour une marque de compléments alimentaires', en: 'Online store for a food-supplement brand', ar: 'متجر إلكتروني لعلامة مكمّلات غذائية' },
      place: { fr: 'Maroc', en: 'Morocco', ar: 'المغرب' },
      stack: 'React, Vite, Laravel',
      langs: { fr: 'Français, arabe', en: 'French, Arabic', ar: 'الفرنسية والعربية' },
      text: {
        fr: 'Commande en trois étapes sans compte, paiement à la livraison et conseil sur WhatsApp. Fiches produits détaillées (composition, dosages), espace revendeurs, suivi de commande et section qualité (ONSSA, ISO 22000, HACCP). Données structurées et images WebP responsives pour le référencement.',
        en: 'Three-step ordering with no account, cash on delivery and advice over WhatsApp. Detailed product pages (composition, dosage), a reseller form, order tracking and a quality section (ONSSA, ISO 22000, HACCP). Structured data and responsive WebP images for search.',
        ar: 'طلب في ثلاث خطوات دون إنشاء حساب، الدفع عند الاستلام واستشارة عبر واتساب. صفحات منتجات مفصّلة (التركيبة والجرعات)، نموذج للموزّعين، تتبّع الطلبيات وقسم للجودة (ONSSA و ISO 22000 و HACCP). بيانات منظّمة وصور WebP متجاوبة لتحسين الظهور في محركات البحث.'
      }
    },
    {
      name: 'WAN Construction', url: 'https://www.wanconstruction.fr/', domain: 'wanconstruction.fr',
      desktop: 'assets/work/wan-construction-desktop.webp', desktopH: 4200,
      mobile: 'assets/work/wan-construction-mobile.webp',
      featured: true,
      kind: { fr: 'Site d’un constructeur de maisons individuelles', en: 'Website for a custom home builder', ar: 'موقع لشركة بناء منازل فردية' },
      place: { fr: 'Béziers, France', en: 'Béziers, France', ar: 'بيزييه، فرنسا' },
      stack: 'JavaScript, Bootstrap, Lenis, PHP',
      langs: { fr: 'Français', en: 'French', ar: 'الفرنسية' },
      text: {
        fr: 'Entreprise familiale du bâtiment dans l’Hérault, l’Aude et le Gard. Services de A à Z, parcours client en sept étapes, galerie de réalisations, avis clients et formulaire de consultation. Défilement fluide et référencement local soigné.',
        en: 'A family building company serving the Hérault, Aude and Gard. A-to-Z services, a seven-step client journey, a project gallery, client reviews and a consultation form. Smooth scrolling and careful local SEO.',
        ar: 'شركة بناء عائلية تعمل في مناطق Hérault و Aude و Gard. خدمات من الألف إلى الياء، مسار عميل من سبع مراحل، معرض للإنجازات، آراء العملاء ونموذج لطلب استشارة. تمرير سلس وتحسين دقيق للظهور في البحث المحلي.'
      }
    },
    {
      name: 'Multihexa Santé', url: 'https://multihexa-sante.ma/', domain: 'multihexa-sante.ma',
      desktop: 'assets/work/multihexa-sante-desktop.webp', desktopH: 3360,
      kind: { fr: 'Site d’un institut de formation paramédicale', en: 'Website for a paramedical training institute', ar: 'موقع لمعهد تكوين شبه طبي' },
      place: { fr: 'Meknès, Maroc', en: 'Meknès, Morocco', ar: 'مكناس، المغرب' },
      stack: 'HTML, CSS, Bootstrap, jQuery',
      text: {
        fr: 'Présentation des filières autorisées par l’État (infirmier polyvalent, aide-soignant), demande d’inscription en ligne, contact WhatsApp et plan d’accès.',
        en: 'State-authorized programs (general nursing, nursing assistant), online enrollment requests, WhatsApp contact and directions.',
        ar: 'عرض الشعب المعتمدة من الدولة (ممرض متعدد الاختصاصات، مساعد تمريض)، طلب التسجيل عبر الإنترنت، التواصل عبر واتساب وخريطة الوصول.'
      }
    },
    {
      name: 'Maison du Sud', url: 'https://www.maisonsdusud-construction.fr/', domain: 'maisonsdusud-construction.fr',
      desktop: 'assets/work/maisons-du-sud-desktop.webp', desktopH: 1930,
      kind: { fr: 'Site one-page d’un constructeur de maisons', en: 'One-page site for a home builder', ar: 'موقع من صفحة واحدة لشركة بناء منازل' },
      place: { fr: 'Hérault et Aude, France', en: 'Hérault and Aude, France', ar: 'Hérault و Aude، فرنسا' },
      stack: 'HTML, CSS, JavaScript, PHP',
      text: {
        fr: 'Vidéo d’accueil, présentation des services, galerie de projets, avis clients et formulaire de demande de devis.',
        en: 'Video hero, services, a project gallery, client reviews and a quote request form.',
        ar: 'فيديو في الواجهة، عرض الخدمات، معرض المشاريع، آراء العملاء ونموذج لطلب عرض سعر.'
      }
    }
  ],

  /* ------------------------------------------------------------------
     Systems & applications (no public URL). cat: 'industry' | 'web'
     ------------------------------------------------------------------ */
  systems: [
    {
      id: 'twist', cat: 'industry', title: 'TWIST Area',
      sub: { fr: 'Management de production', en: 'Production management', ar: 'إدارة الإنتاج' },
      ctx: { fr: 'Versigent (ex-Aptiv), Meknès', en: 'Versigent (formerly Aptiv), Meknès', ar: 'Versigent (سابقاً Aptiv)، مكناس' },
      stack: ['PHP', 'MySQL', 'JavaScript', 'WebSockets', 'AJAX', 'Bootstrap'],
      desc: {
        fr: 'Digitalisation complète d’une zone de torsadage : kanban digital, pilotage de plus de 30 machines de câblage (T01 à T31), scan de codes-barres, workflow opérateur et synchronisation WebSocket. Un journal d’audit numérique remplace les archives papier manuscrites.',
        en: 'Full digitalization of a wire-twisting area: digital kanban, control of 30+ wiring machines (T01 to T31), barcode scanning, operator workflow and WebSocket sync. A digital audit trail replaces handwritten paper archives.',
        ar: 'رقمنة كاملة لمنطقة جدل الأسلاك: كانبان رقمي، تتبّع أكثر من 30 آلة (من T01 إلى T31)، مسح الباركود، سير عمل المشغّلين ومزامنة عبر WebSocket. سجل تدقيق رقمي يعوّض الأرشيف الورقي.'
      },
      points: {
        fr: ['Statut des machines en direct et analyses de production', 'Traçabilité complète des ordres de fabrication', 'Recherche instantanée dans l’historique, sans papier'],
        en: ['Live machine status and production analytics', 'Full traceability of manufacturing orders', 'Instant history search, no more paper'],
        ar: ['حالة الآلات مباشرة وتحليلات الإنتاج', 'تتبّع كامل لأوامر التصنيع', 'بحث فوري في السجل دون ورق']
      }
    },
    {
      id: 'ops', cat: 'industry', title: 'OPS',
      sub: { fr: 'Pointage, retours terrain et demandes RH', en: 'Attendance, shop-floor feedback and HR requests', ar: 'الحضور والملاحظات الميدانية وطلبات الموارد البشرية' },
      ctx: { fr: 'Versigent (ex-Aptiv), Meknès', en: 'Versigent (formerly Aptiv), Meknès', ar: 'Versigent (سابقاً Aptiv)، مكناس' },
      stack: ['React', 'Vite', 'FastAPI', 'MySQL', 'JWT'],
      desc: {
        fr: 'Système de pointage des opérateurs avec remontée des retours terrain et gestion dématérialisée des demandes de documents administratifs (attestations, papiers RH). Chaque demande est tracée, chaque retour est capté et exploitable.',
        en: 'Operator time-and-attendance system with shop-floor feedback and paperless handling of administrative document requests (certificates, HR paperwork). Every request is tracked; every piece of feedback is captured and actionable.',
        ar: 'نظام لتسجيل حضور المشغّلين مع جمع ملاحظاتهم الميدانية وإدارة رقمية لطلبات الوثائق الإدارية (شهادات وأوراق الموارد البشرية). كل طلب مُتتبَّع وكل ملاحظة مُستثمَرة.'
      },
      points: {
        fr: ['Pointage fiable et tracé', 'Retours terrain remontés en direct', 'Demandes de documents sans papier'],
        en: ['Reliable, traceable clock-in', 'Live shop-floor feedback', 'Paperless document requests'],
        ar: ['تسجيل حضور موثوق ومتتبَّع', 'ملاحظات ميدانية مباشرة', 'طلبات وثائق دون ورق']
      }
    },
    {
      id: 'emirates', cat: 'web', title: 'Emirates Marketplace',
      sub: { fr: 'Marketplace multi-vendeurs', en: 'Multi-vendor marketplace', ar: 'سوق إلكتروني متعدد البائعين' },
      ctx: { fr: 'Client confidentiel, Émirats (NDA)', en: 'Confidential client, UAE (NDA)', ar: 'عميل سرّي، الإمارات (NDA)' },
      stack: ['Laravel', 'React', 'MySQL', 'REST API', 'RBAC'],
      desc: {
        fr: 'Plateforme multi-vendeurs : inscription des vendeurs, catalogue produits, gestion des commandes, paiement sécurisé avec fonds retenus jusqu’à confirmation, tableaux de bord vendeurs et panneau d’administration complet.',
        en: 'Multi-vendor platform: seller onboarding, product catalog, order management, secure payments with funds held until confirmation, seller dashboards and a full admin panel.',
        ar: 'منصة متعددة البائعين: تسجيل البائعين، كتالوج المنتجات، إدارة الطلبات، دفع آمن مع حجز الأموال حتى التأكيد، لوحات تحكم للبائعين ولوحة إدارة كاملة.'
      },
      points: {
        fr: ['Paiement sécurisé : retenue puis libération des fonds', 'Rôles vendeur, acheteur et administrateur', 'Tableaux de bord et statistiques de ventes'],
        en: ['Secure payments: funds held, then released', 'Seller, buyer and admin roles', 'Sales dashboards and statistics'],
        ar: ['دفع آمن: حجز الأموال ثم تحريرها', 'أدوار البائع والمشتري والمدير', 'لوحات وإحصائيات المبيعات']
      }
    },
    {
      id: 'dtm', cat: 'industry', title: 'DTM Management',
      sub: { fr: 'Application desktop d’usine', en: 'Factory desktop app', ar: 'تطبيق سطح مكتب للمصنع' },
      ctx: { fr: 'Versigent (ex-Aptiv), Meknès', en: 'Versigent (formerly Aptiv), Meknès', ar: 'Versigent (سابقاً Aptiv)، مكناس' },
      stack: ['Tauri', 'FastAPI', 'Python', 'React', 'MySQL'],
      desc: {
        fr: 'Application desktop native (Tauri) adossée à un backend FastAPI déployé sur le réseau local de l’usine. Gestion des temps d’arrêt et suivi de l’amélioration continue, avec de vraies contraintes réseau résolues (interférences VPN, postes multiples).',
        en: 'Native desktop app (Tauri) backed by a FastAPI service on the factory LAN. Downtime management and continuous-improvement tracking, with real network constraints solved (VPN interference, multiple workstations).',
        ar: 'تطبيق سطح مكتب أصلي (Tauri) مع خادم FastAPI على الشبكة المحلية للمصنع. إدارة أوقات التوقف وتتبّع التحسين المستمر، مع حلّ قيود شبكية حقيقية (تداخل VPN وتعدّد المحطات).'
      },
      points: {
        fr: ['Identification des pertes de temps', 'Backend FastAPI multi-postes sur le LAN', 'Déploiement réel en usine'],
        en: ['Pinpoints lost time and waste', 'Multi-workstation FastAPI backend on the LAN', 'Real deployment on the factory floor'],
        ar: ['تحديد الوقت الضائع والهدر', 'خادم FastAPI متعدد المحطات على الشبكة المحلية', 'نشر فعلي داخل المصنع']
      }
    },
    {
      id: 'idaraschool', cat: 'web', title: 'IdaraSchool',
      sub: { fr: 'Gestion d’établissements scolaires', en: 'School administration SaaS', ar: 'منصة لإدارة المؤسسات التعليمية' },
      ctx: { fr: 'Mediast Agency, Meknès', en: 'Mediast Agency, Meknès', ar: 'Mediast Agency، مكناس' },
      stack: ['PHP', 'MySQL', 'FPDF', 'Chart.js', 'Bootstrap'],
      desc: {
        fr: 'SaaS de gestion administrative scolaire : paiements en temps réel, reçus PDF automatiques, attestations d’inscription, gestion des classes, export Excel en un clic et accès par rôles (administration, enseignants, parents).',
        en: 'SaaS for school administration: real-time payments, automatic PDF receipts, enrollment certificates, class management, one-click Excel export and role-based access (admin, teachers, parents).',
        ar: 'منصة SaaS للإدارة المدرسية: مدفوعات فورية، إيصالات PDF تلقائية، شهادات التسجيل، إدارة الأقسام، تصدير Excel بنقرة واحدة وصلاحيات حسب الدور (الإدارة، الأساتذة، أولياء الأمور).'
      },
      points: {
        fr: ['Suivi des paiements et statistiques', 'Rôles administration, enseignant et parent', 'Interface entièrement responsive'],
        en: ['Payment tracking and statistics', 'Admin, teacher and parent roles', 'Fully responsive interface'],
        ar: ['تتبّع المدفوعات والإحصائيات', 'أدوار الإدارة والأستاذ ووليّ الأمر', 'واجهة متجاوبة بالكامل']
      }
    },
    {
      id: 'reddeer', cat: 'web', title: 'Red Deer Auto',
      sub: { fr: 'Gestion d’un atelier de réparation', en: 'Repair shop management', ar: 'إدارة ورشة إصلاح' },
      ctx: { fr: 'Client au Canada (Alberta)', en: 'Client in Canada (Alberta)', ar: 'عميل في كندا (ألبرتا)' },
      stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Chart.js'],
      desc: {
        fr: 'Application de gestion d’atelier : suivi des véhicules clients, ordres de réparation, historique des interventions, tableau de bord des techniciens, devis et facturation avec statistiques visuelles.',
        en: 'Workshop management app: customer vehicle tracking, repair orders, service history, a technician dashboard, quotes and invoicing with visual statistics.',
        ar: 'تطبيق لإدارة الورشة: تتبّع مركبات العملاء، أوامر الإصلاح، سجل التدخلات، لوحة للفنيين، عروض الأسعار والفوترة مع إحصائيات مرئية.'
      },
      points: {
        fr: ['Historique complet par véhicule', 'Devis et facturation intégrés', 'Tableau de bord des techniciens'],
        en: ['Full history per vehicle', 'Built-in quotes and invoicing', 'Technician dashboard'],
        ar: ['سجل كامل لكل مركبة', 'عروض أسعار وفوترة مدمجة', 'لوحة تحكم للفنيين']
      }
    },
    {
      id: 'pagoda', cat: 'industry',
      title: { fr: 'Placement des pagodes', en: 'Pagoda placement', ar: 'تحديد مواقع الباغودات' },
      sub: { fr: 'Optimisation de l’implantation d’usine', en: 'Factory layout optimization', ar: 'تحسين تخطيط المصنع' },
      ctx: { fr: 'Versigent (ex-Aptiv), Meknès', en: 'Versigent (formerly Aptiv), Meknès', ar: 'Versigent (سابقاً Aptiv)، مكناس' },
      stack: ['Python', 'ReportLab', 'Pandas'],
      desc: {
        fr: 'Outil Python qui génère des plans d’usine en PDF (ReportLab) et calcule les distances entre machines et pagodes pour optimiser les emplacements, réduire les déplacements et le temps perdu sur le flux de production.',
        en: 'Python tool that generates factory floor plans as PDFs (ReportLab) and computes machine-to-pagoda distances to optimize placement and cut travel and lost time on the production flow.',
        ar: 'أداة Python تولّد مخططات المصنع بصيغة PDF (ReportLab) وتحسب المسافات بين الآلات والباغودات لتحسين المواقع وتقليل التنقلات والوقت الضائع في تدفق الإنتاج.'
      },
      points: {
        fr: ['Plans PDF générés automatiquement', 'Distances machines–pagodes calculées', 'Moins de déplacements inutiles'],
        en: ['Auto-generated PDF floor plans', 'Machine-to-pagoda distances', 'Fewer unnecessary trips'],
        ar: ['مخططات PDF تلقائية', 'حساب المسافات بين الآلات والباغودات', 'تنقلات أقل']
      }
    },
    {
      id: 'badge', cat: 'industry',
      title: { fr: 'Accès par badge', en: 'Badge access', ar: 'الولوج بالشارة' },
      sub: { fr: 'Contrôle d’accès par zone', en: 'Zone-based access control', ar: 'التحكم في الولوج حسب المناطق' },
      ctx: { fr: 'Mission freelance, site industriel', en: 'Freelance project, industrial site', ar: 'مهمة مستقلة، موقع صناعي' },
      stack: ['Python', 'FastAPI', 'SQLAlchemy', 'JWT', 'MySQL'],
      desc: {
        fr: 'Contrôle d’accès par zone avec FastAPI et SQLAlchemy asynchrone : authentification JWT par scan de badge, gestion des rôles, détection automatique des rotations de postes et journal en ajout seul pour une conformité totale.',
        en: 'Zone-based access control with FastAPI and async SQLAlchemy: JWT authentication by badge scan, role management, automatic shift-rotation detection and an append-only log for full compliance.',
        ar: 'تحكم في الولوج حسب المناطق باستعمال FastAPI و SQLAlchemy غير المتزامن: مصادقة JWT عبر مسح الشارة، إدارة الصلاحيات، كشف تلقائي لتناوب الورديات وسجل غير قابل للتعديل لامتثال كامل.'
      },
      points: {
        fr: ['Authentification par scan de badge', 'Rotations de postes détectées automatiquement', 'Journal de traçabilité en ajout seul'],
        en: ['Sign-in by badge scan', 'Automatic shift-rotation detection', 'Append-only audit log'],
        ar: ['مصادقة عبر مسح الشارة', 'كشف تلقائي لتناوب الورديات', 'سجل تدقيق غير قابل للتعديل']
      }
    },
    {
      id: 'print', cat: 'industry',
      title: { fr: 'Serveur d’impression', en: 'Print server', ar: 'خادم الطباعة' },
      sub: { fr: 'Tickets d’identification des machines', en: 'Machine ID tickets', ar: 'تذاكر تعريف الآلات' },
      ctx: { fr: 'Mission freelance, réseau interne', en: 'Freelance project, internal network', ar: 'مهمة مستقلة، شبكة داخلية' },
      stack: ['Python', 'Flask', 'Tkinter', 'ESC/P', 'MySQL'],
      desc: {
        fr: 'Serveur d’impression Python pour les tickets d’identification des machines : API Flask sur le réseau interne, interface de contrôle Tkinter pour les opérateurs, commandes ESC/P natives et données de production MySQL en temps réel.',
        en: 'Python print server for machine ID tickets: a Flask API on the internal network, a Tkinter control panel for operators, native ESC/P commands and real-time MySQL production data.',
        ar: 'خادم طباعة بلغة Python لتذاكر تعريف الآلات: واجهة Flask على الشبكة الداخلية، لوحة تحكم Tkinter للمشغّلين، أوامر ESC/P أصلية وبيانات إنتاج MySQL فورية.'
      },
      points: {
        fr: ['Commandes ESC/P natives', 'Interface opérateur Tkinter', 'Données de production en temps réel'],
        en: ['Native ESC/P commands', 'Tkinter operator panel', 'Real-time production data'],
        ar: ['أوامر ESC/P أصلية', 'واجهة مشغّل Tkinter', 'بيانات إنتاج فورية']
      }
    },
    {
      id: 'delivery', cat: 'web',
      title: { fr: 'Gestion de livraison', en: 'Delivery management', ar: 'إدارة التوصيل' },
      sub: { fr: 'Commandes, livreurs et statuts', en: 'Orders, couriers and statuses', ar: 'الطلبات والموصّلون والحالات' },
      ctx: { fr: 'Mission freelance', en: 'Freelance project', ar: 'مهمة مستقلة' },
      stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      desc: {
        fr: 'Application de gestion des livraisons : enregistrement des commandes, affectation des livreurs, suivi des statuts (en préparation, en route, livrée), historique et statistiques pour piloter l’activité au quotidien.',
        en: 'Delivery management app: order entry, courier assignment, status tracking (preparing, on the way, delivered), history and statistics to run daily operations.',
        ar: 'تطبيق لإدارة التوصيل: تسجيل الطلبات، إسناد الموصّلين، تتبّع الحالات (قيد التحضير، في الطريق، تم التسليم)، مع سجل وإحصائيات لتسيير النشاط اليومي.'
      },
      points: {
        fr: ['Statuts suivis en temps réel', 'Affectation des livreurs', 'Historique et statistiques'],
        en: ['Real-time status tracking', 'Courier assignment', 'History and statistics'],
        ar: ['تتبّع الحالات لحظياً', 'إسناد الموصّلين', 'سجل وإحصائيات']
      }
    },
    {
      id: 'excel', cat: 'industry',
      title: { fr: 'Import Excel vers MySQL', en: 'Excel to MySQL import', ar: 'استيراد Excel إلى MySQL' },
      sub: { fr: 'Pipeline de données de référence', en: 'Reference data pipeline', ar: 'خط معالجة بيانات مرجعية' },
      ctx: { fr: 'Mission freelance', en: 'Freelance project', ar: 'مهمة مستقلة' },
      stack: ['Python', 'Pandas', 'openpyxl', 'MySQL'],
      desc: {
        fr: 'Pipeline qui migre un fichier Excel de référence complexe (paramètres de fils) vers une table MySQL normalisée : correspondance des colonnes, conversion des types, détection des doublons et mises à jour incrémentales sans perte de données.',
        en: 'Pipeline migrating a complex reference Excel file (wire parameters) into a normalized MySQL table: column mapping, type conversion, duplicate detection and incremental updates with no data loss.',
        ar: 'خط يحوّل ملف Excel مرجعياً معقّداً (معايير الأسلاك) إلى جدول MySQL منظّم: ربط الأعمدة، تحويل الأنواع، كشف التكرارات وتحديثات تدريجية دون فقدان البيانات.'
      },
      points: {
        fr: ['Correspondance des colonnes et des types', 'Détection des doublons', 'Mises à jour incrémentales sûres'],
        en: ['Column and type mapping', 'Duplicate detection', 'Safe incremental updates'],
        ar: ['ربط الأعمدة والأنواع', 'كشف التكرارات', 'تحديثات تدريجية آمنة']
      }
    },
    {
      id: 'vitasilk', cat: 'web', title: 'VitaSilk',
      sub: { fr: 'Site d’une marque de soins capillaires', en: 'Hair-care brand website', ar: 'موقع علامة للعناية بالشعر' },
      ctx: { fr: 'Mediast Agency, Meknès', en: 'Mediast Agency, Meknès', ar: 'Mediast Agency، مكناس' },
      stack: ['HTML', 'CSS', 'JavaScript'],
      desc: {
        fr: 'Site de marque pour une gamme de soins capillaires : identité visuelle élégante, présentation des produits, sections bienfaits et avis, pensé pour lancer la marque en ligne.',
        en: 'Brand website for a hair-care line: an elegant visual identity, product presentation, benefits and reviews sections, built to launch the brand online.',
        ar: 'موقع لعلامة للعناية بالشعر: هوية بصرية أنيقة، عرض المنتجات، أقسام الفوائد والتقييمات، مصمَّم لإطلاق العلامة على الإنترنت.'
      },
      points: {
        fr: ['Identité visuelle soignée', 'Présentation produits orientée conversion', 'Entièrement responsive'],
        en: ['Polished visual identity', 'Conversion-focused product pages', 'Fully responsive'],
        ar: ['هوية بصرية متقنة', 'عرض منتجات موجّه للتحويل', 'متجاوب بالكامل']
      }
    }
  ],

  /* ------------------------------------------------------------------
     Certifications, newest first. Leave `verify` empty to hide the link.
     ------------------------------------------------------------------ */
  certs: [
    {
      logo: 'anthropic', issuer: 'Anthropic', title: 'Claude Code 101', date: '2026-09-26',
      isNew: true, featured: true, credential: null, verify: '',
      type: { fr: 'Badge de fin de cours', en: 'Course completion badge', ar: 'شارة إتمام دورة' },
      skills: ['Claude Code', 'Agentic coding', 'Terminal workflows', 'AI-assisted development'],
      desc: {
        fr: 'Cours d’Anthropic sur Claude Code, l’assistant de programmation qui travaille directement dans le terminal : prise en main, contexte de projet et bonnes pratiques pour développer avec l’IA.',
        en: 'Anthropic’s course on Claude Code, the coding assistant that works right in the terminal: getting started, project context and good practices for building software with AI.',
        ar: 'دورة من Anthropic حول Claude Code، مساعد البرمجة الذي يعمل مباشرة داخل الطرفية: البدء، سياق المشروع والممارسات الجيدة لتطوير البرمجيات بالذكاء الاصطناعي.'
      }
    },
    {
      logo: 'meta', issuer: 'Meta (Coursera)', title: 'Version Control', date: '2025-06-03',
      credential: '53Y4U534AP87', verify: 'https://coursera.org/verify/53Y4U534AP87',
      type: { fr: 'Certificat de cours', en: 'Course certificate', ar: 'شهادة دورة' },
      skills: ['Git', 'GitHub', 'Branching', 'Merging', 'CLI', 'Pull requests'],
      desc: {
        fr: 'Git et GitHub en profondeur : dépôts, commits, branches, fusions, résolution de conflits et workflows d’équipe (Git Flow, pull requests).',
        en: 'Git and GitHub in depth: repositories, commits, branching, merging, conflict resolution and team workflows (Git Flow, pull requests).',
        ar: 'إتقان Git و GitHub: المستودعات، الإيداعات، الفروع، الدمج، حل التعارضات وسير عمل الفرق (Git Flow و Pull Requests).'
      }
    },
    {
      logo: 'meta', issuer: 'Meta (Coursera)', title: 'Programming with JavaScript', date: '2025-06-02',
      credential: 'ED4JTMZHZVL0', verify: 'https://coursera.org/verify/ED4JTMZHZVL0',
      type: { fr: 'Certificat de cours', en: 'Course certificate', ar: 'شهادة دورة' },
      skills: ['JavaScript', 'ES6+', 'DOM', 'OOP', 'Async/await', 'Jest'],
      desc: {
        fr: 'JavaScript ES6+ : types, fonctions, closures, programmation orientée objet, manipulation du DOM, promesses, async/await, modules et tests unitaires avec Jest.',
        en: 'JavaScript ES6+: types, functions, closures, object-oriented programming, DOM manipulation, promises, async/await, modules and unit testing with Jest.',
        ar: 'JavaScript ES6+: الأنواع، الدوال، البرمجة الكائنية، التعامل مع DOM، Promises و async/await، الوحدات والاختبارات مع Jest.'
      }
    },
    {
      logo: 'meta', issuer: 'Meta (Coursera)', title: 'Introduction to Front-End Development', date: '2025-05-27',
      credential: '3UH52J3YC3PH', verify: 'https://coursera.org/verify/3UH52J3YC3PH',
      type: { fr: 'Certificat de cours', en: 'Course certificate', ar: 'شهادة دورة' },
      skills: ['HTML', 'CSS', 'UI', 'React', 'Bootstrap'],
      desc: {
        fr: 'Les fondations du front-end : rôles front, back et full-stack, création et mise en forme de pages avec HTML et CSS, puis frameworks modernes (Bootstrap, React).',
        en: 'Front-end foundations: front-end, back-end and full-stack roles, building and styling pages with HTML and CSS, then modern frameworks (Bootstrap, React).',
        ar: 'أساسيات الواجهة الأمامية: أدوار الواجهة والخلفية والتطوير المتكامل، بناء الصفحات وتنسيقها بـ HTML و CSS ثم أطر حديثة (Bootstrap و React).'
      }
    },
    {
      logo: 'ibm', issuer: 'IBM SkillsBuild', title: 'Web Development Fundamentals', date: '2024-08-11',
      credential: null, verify: 'https://www.credly.com',
      type: { fr: 'Badge professionnel', en: 'Professional badge', ar: 'شارة مهنية' },
      skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL', 'Apache'],
      desc: {
        fr: 'Badge professionnel IBM : conception et déploiement de sites, HTML, CSS et JavaScript interactifs, serveur Apache, bases SQL, notions de réseau et de sécurité applicative.',
        en: 'IBM professional badge: site design and deployment, interactive HTML, CSS and JavaScript, Apache server, SQL databases, networking and application security basics.',
        ar: 'شارة IBM المهنية: تصميم المواقع ونشرها، HTML و CSS و JavaScript تفاعلية، خادم Apache، قواعد بيانات SQL وأساسيات الشبكات والأمان.'
      }
    },
    {
      logo: 'solo', issuer: 'Sololearn', title: 'Certified Web Developer', date: '2024-02-04',
      credential: 'CC-YUAOV0SY', verify: 'https://www.sololearn.com/certificates/CC-YUAOV0SY',
      type: { fr: 'Certificat', en: 'Certificate', ar: 'شهادة' },
      skills: ['HTML', 'CSS', 'JavaScript', 'SQL'],
      desc: {
        fr: 'Certification de développeur web : HTML structurel, CSS avancé, JavaScript orienté objet et requêtes SQL, validés par des projets pratiques.',
        en: 'Web developer certification: structural HTML, advanced CSS, object-oriented JavaScript and SQL queries, validated through hands-on projects.',
        ar: 'شهادة مطوّر ويب: HTML و CSS متقدّم و JavaScript كائنية التوجّه واستعلامات SQL، مصادَق عليها بمشاريع تطبيقية.'
      }
    },
    {
      logo: 'fcc', issuer: 'freeCodeCamp', title: 'Responsive Web Design', date: '2023-11-26',
      credential: null, verify: 'https://freecodecamp.org/certification/red12xa/responsive-web-design',
      type: { fr: 'Certification', en: 'Certification', ar: 'شهادة' },
      skills: ['Flexbox', 'CSS Grid', 'Media queries', 'Accessibility'],
      desc: {
        fr: 'Environ 300 heures de pratique : flexbox, CSS Grid, media queries, accessibilité (ARIA) et cinq projets de certification responsives.',
        en: 'About 300 hours of practice: flexbox, CSS Grid, media queries, accessibility (ARIA) and five responsive certification projects.',
        ar: 'حوالي 300 ساعة من التطبيق: Flexbox و CSS Grid واستعلامات الوسائط وإمكانية الوصول (ARIA) مع خمسة مشاريع متجاوبة.'
      }
    }
  ],

  /* ------------------------------------------------------------------
     Issuer marks (Simple Icons paths where available).
     ------------------------------------------------------------------ */
  logos: {
    anthropic: '<svg viewBox="0 0 24 24" fill="#191919" xmlns="http://www.w3.org/2000/svg"><path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/></svg>',
    meta: '<svg viewBox="0 0 24 24" fill="#0866FF" xmlns="http://www.w3.org/2000/svg"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg>',
    ibm: '<svg viewBox="0 0 800 322.47" fill="#1F70C1" xmlns="http://www.w3.org/2000/svg"><g><rect width="155.7" height="22" x="0" y="0"/><rect width="155.7" height="22" x="0" y="42.9"/><rect width="67.4" height="22" x="44.8" y="85.8"/><rect width="67.4" height="22" x="44.8" y="128.7"/><rect width="67.4" height="22" x="44.8" y="171.7"/><rect width="67.4" height="22" x="44.8" y="214.6"/><rect width="155.7" height="22" x="1.2" y="257.5"/><rect width="155.7" height="22" x="1.2" y="300.4"/><path d="M177.8 0v22h221.9S377 0 347 0H177.8z"/><path d="M177.8 42.9V65h247.6s-2.9-17-7.9-22.1H177.8z"/><rect width="67.4" height="22" x="222.5" y="85.8"/><path d="M394.8 150.8s14.4-11.3 19-22.1H222.5v22.1h172.3z"/><path d="M222.5 171.7v22h191.3c-4.6-10.7-19-22-19-22H222.5z"/><rect width="67.4" height="22" x="222.5" y="214.6"/><path d="M423 107.9s4.3-11.7 4.3-22.1h-71.7v22.1H423z"/><path d="M355.6 214.6v22h71.7c0-10.4-4.3-22-4.3-22h-67.4z"/><path d="M417.5 279.6c5-5.1 8-22.1 8-22.1H177.8v22.1h239.7z"/><path d="M347 322.5c30 0 52.7-22.1 52.7-22.1H177.8v22.1H347z"/><polygon points="607.5,107.9 599.6,85.8 488,85.8 488,107.9"/><polygon points="555.4,150.8 555.4,138.5 559.7,150.8 683.2,150.8 687.8,138.5 687.8,150.8 755.2,150.8 755.2,128.7 628.7,128.7 621.9,147.4 615.2,128.7 488,128.7 488,150.8"/><rect width="67.4" height="22" x="488" y="171.7"/><polygon points="668.4,193.7 676.2,171.7 567.7,171.7 575.8,193.7"/><rect width="67.4" height="22" x="488" y="214.6"/><rect width="111" height="22" x="444.4" y="257.5"/><rect width="111" height="22" x="444.4" y="300.4"/><polygon points="653,236.6 660.9,214.6 583,214.6 590.9,236.6"/><polygon points="638,279.6 645.7,257.5 598.3,257.5 606.5,279.6"/><polygon points="621.5,322.4 622.9,322.5 630.8,300.4 613.7,300.4"/><polygon points="443.2,42.9 443.2,65 592.2,65 584.8,42.9"/><polygon points="443.2,0 443.2,22.1 577.5,22.1 569.5,0"/><polygon points="755.2,107.9 755.2,85.8 643.1,85.8 635.1,107.9"/><rect width="67.4" height="22" x="687.8" y="171.7"/><rect width="67.4" height="22" x="687.8" y="214.6"/><rect width="112.2" height="22" x="687.8" y="257.5"/><rect width="112.2" height="22" x="687.8" y="300.4"/><polygon points="657.8,42.9 650.4,65 798.8,65 798.8,42.9"/><polygon points="673.7,0 665.8,22.1 798.8,22.1 798.8,0"/></g></svg>',
    solo: '<svg viewBox="0 0 24 24" fill="#4CAF50" xmlns="http://www.w3.org/2000/svg"><path d="M18.621 16.084a8.483 8.483 0 0 1-2.922 6.427c-.603.53-.19 1.522.613 1.442a9.039 9.039 0 0 0 1.587-.3 8.32 8.32 0 0 0 5.787-5.887 8.555 8.555 0 0 0-8.258-10.832 9.012 9.012 0 0 0-1.045.06c-.794.1-.995 1.161-.29 1.542 2.701 1.452 4.53 4.285 4.53 7.548zM7.906 18.597a8.538 8.538 0 0 1-6.45-2.913c-.532-.6-1.527-.19-1.446.61a8.943 8.943 0 0 0 .3 1.582c.794 2.823 3.064 5.026 5.907 5.766 5.727 1.492 10.87-2.773 10.87-8.229 0-.35-.02-.7-.06-1.04-.1-.792-1.165-.992-1.547-.29a8.597 8.597 0 0 1-7.574 4.514zM5.382 7.916a8.483 8.483 0 0 1 2.924-6.427c.603-.531.19-1.522-.613-1.442a9.93 9.93 0 0 0-1.598.29A8.339 8.339 0 0 0 .31 6.224a8.555 8.555 0 0 0 8.258 10.832c.352 0 .704-.02 1.045-.06.794-.1.995-1.162.29-1.542a8.54 8.541 0 0 1-4.52-7.538zm10.72-2.513a8.538 8.538 0 0 1 6.45 2.913c.53.6 1.526.19 1.445-.61a8.945 8.945 0 0 0-.3-1.583C22.902 3.3 20.632 1.098 17.788.357 12.071-1.145 6.928 3.12 6.928 8.576c0 .35.02.7.06 1.041.1.791 1.168.991 1.549.29A8.58 8.58 0 0 1 16.1 5.404z"/></svg>',
    fcc: '<svg viewBox="0 0 24 24" fill="#0a0a23" xmlns="http://www.w3.org/2000/svg"><path d="M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468z"/></svg>'
  }
};
