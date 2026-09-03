import type { Language } from "@/lib/translations";

export type Localized = Record<Language, string>;

/** Coaching sales page — busy professionals ICP */
export const landing = {
  hero: {
    brand: { en: "UNBREAKABLES TEAM", ar: "UNBREAKABLES TEAM", fr: "UNBREAKABLES TEAM" } as Localized,
    headline: {
      en: "I build complete physiques for busy people.",
      ar: "كنبني أجسام متكاملة للناس المشغولين.",
      fr: "Je construis des physiques complets pour les gens occupés.",
    } as Localized,
    subhead: {
      en: "Two focused hours a day. No living in the gym. Built for professionals who have income and almost no spare time.",
      ar: "ساعتين مركزتين في النهار. بلا ما تعيش فالصالة. للمهنيين اللي عندهم دخل وما عندهمش وقت.",
      fr: "Deux heures ciblées par jour. Sans vivre à la salle. Pour les professionnels qui ont les moyens et presque pas de temps.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "قدّم للكوتشينغ", fr: "Postuler au coaching" } as Localized,
    ctaNote: {
      en: "I review every application myself.",
      ar: "كنراجع كل طلب براسي.",
      fr: "Je lis chaque candidature moi-même.",
    } as Localized,
  },

  audience: {
    eyebrow: { en: "Who this is for", ar: "لمن هاد الشي", fr: "Pour qui" } as Localized,
    title: {
      en: "Built for people with real careers and real calendars.",
      ar: "مبني لناس عندهم شغل حقيقي وأجندة حقيقية.",
      fr: "Conçu pour les carrières et les agendas réels.",
    } as Localized,
    forItems: [
      {
        en: "Professionals between 27 and 40 who want a complete physique without rearranging their life around the gym",
        ar: "مهنيين بين 27 و 40 بغيو جسم متكامل بلا ما يبدّلو حياتهم على حساب الصالة",
        fr: "Professionnels de 27 à 40 ans qui veulent un physique complet sans réorganiser leur vie autour de la salle",
      },
      {
        en: "People who can invest in coaching and need a system that fits travel, late meetings, and short training windows",
        ar: "ناس يقدرو يستثمرو فالكوتشينغ وخصهم سيستيم كيخدم مع السفر والاجتماعات والنوافذ القصيرة",
        fr: "Ceux qui peuvent investir dans un coaching et ont besoin d’un système compatible voyages, réunions et créneaux courts",
      },
      {
        en: "Men and women who prefer a clear plan, quiet accountability, and measurable progress over noise",
        ar: "رجال ونساء كيبغيو برنامج واضح، متابعة هادئة، وتقدم قابل للقياس بلا ضوضاء",
        fr: "Hommes et femmes qui préfèrent un plan clair, une accountability calme, et des progrès mesurables",
      },
    ] as Localized[],
    notTitle: { en: "This is not for you if", ar: "ماشي ليك إلا كنت", fr: "Ce n’est pas pour toi si" } as Localized,
    notItems: [
      {
        en: "You want a 30-day shred or a miracle protocol",
        ar: "كتبحث على تخسيس فـ 30 يوم أو بروتوكول سحري",
        fr: "Tu cherches un shred de 30 jours ou un protocole miracle",
      },
      {
        en: "You collect programs and never follow one for eight weeks",
        ar: "كتجمع البرامج وما كتبقاش على واحد لثمانية سيمانات",
        fr: "Tu collectionnes les programmes sans en suivre un pendant huit semaines",
      },
      {
        en: "You need constant hype instead of a calm, structured process",
        ar: "خصك حماس دائم بدل عملية هادئة ومنظمة",
        fr: "Tu as besoin d’hype permanent plutôt que d’un process calme et structuré",
      },
    ] as Localized[],
  },

  app: {
    eyebrow: { en: "The coaching app", ar: "تطبيق الكوتشينغ", fr: "L’app de coaching" } as Localized,
    title: {
      en: "Your plan lives in an app built for this work.",
      ar: "البرنامج ديالك كيعيش فتطبيق مبني لهاد الخدمة.",
      fr: "Ton plan vit dans une app conçue pour ce travail.",
    } as Localized,
    lead: {
      en: "Most online coaches send a PDF and a WhatsApp thread. You get a private coaching app that updates with you. Nobody else in this space gives you this.",
      ar: "أغلب الكوتشات كيصيفطو PDF وثريد واتساب. نت كتحصل على تطبيق خاص كيتحدّث معاك. فهاد المجال ما كاينش شي واحد كيعطيك هاد الشي.",
      fr: "La plupart des coachs envoient un PDF et un fil WhatsApp. Toi, tu as une app privée qui évolue avec toi. Personne d’autre dans cet espace ne te donne ça.",
    } as Localized,
    features: [
      {
        title: { en: "Auto-updating programs", ar: "برامج كتتحيّن وحدها", fr: "Programmes auto-mis à jour" },
        body: {
          en: "When we adjust loads, volume, or structure, your next session is already correct in the app.",
          ar: "ملي كنعدّلو الأوزان أو الحجم أو البنية، الحصة الجاية كتكون صحيحة فتطبيق.",
          fr: "Quand on ajuste charges, volume ou structure, ta prochaine séance est déjà juste dans l’app.",
        },
      },
      {
        title: { en: "Ready meal plans", ar: "خطط وجبات جاهزة", fr: "Plans repas prêts" },
        body: {
          en: "Meals you can actually run on a busy week, with swaps when life gets in the way.",
          ar: "وجبات تقدر تخدّم بيها فسيمانة مشغولة، مع بدائل ملي الحياة كتتدخل.",
          fr: "Des repas tenables en semaine chargée, avec des swaps quand la vie s’en mêle.",
        },
      },
      {
        title: { en: "Exercise library", ar: "مكتبة التمارين", fr: "Bibliothèque d’exercices" },
        body: {
          en: "Clear demos for every movement so you never guess form between sessions.",
          ar: "ديموهات واضحة لكل حركة باش ما تبقاش تخمّن فالتيكنيك بين الحصص.",
          fr: "Démos claires pour chaque mouvement. Plus de doute sur la technique entre les séances.",
        },
      },
      {
        title: { en: "Weekly adjustments", ar: "تعديلات أسبوعية", fr: "Ajustements hebdomadaires" },
        body: {
          en: "Check-ins turn into concrete changes in training and nutrition, not generic advice.",
          ar: "المتابعة كتتحوّل لتغييرات ملموسة فالتدريب والتغذية، ماشي نصائح عامة.",
          fr: "Les check-ins deviennent des changements concrets en training et nutrition, pas des conseils génériques.",
        },
      },
    ],
  },

  proof: {
    eyebrow: { en: "Proof", ar: "الدليل", fr: "Preuves" } as Localized,
    title: {
      en: "Results from people with schedules like yours.",
      ar: "نتائج من ناس عندهم أجندات بحال ديالك.",
      fr: "Des résultats de gens avec des agendas comme le tien.",
    } as Localized,
    before: { en: "Before", ar: "قبل", fr: "Avant" } as Localized,
    after: { en: "After", ar: "بعد", fr: "Après" } as Localized,
    cases: [
      {
        name: { en: "Karim", ar: "كريم", fr: "Karim" },
        profession: { en: "Product manager", ar: "مدير منتج", fr: "Product manager" },
        timeframe: { en: "12 weeks", ar: "12 سيمانة", fr: "12 semaines" },
        result: {
          en: "Rebuilt strength on three weekly sessions around launch cycles.",
          ar: "رجّع القوة فثلاثة حصص فالسيمانة وسط دورات الإطلاق.",
          fr: "Force reconstruite sur trois séances par semaine autour des cycles de lancement.",
        },
        beforeImg: "/transformation-4-before.png",
        afterImg: "/transformation-4-after.png",
      },
      {
        name: { en: "Sara", ar: "سارة", fr: "Sara" },
        profession: { en: "Physician", ar: "طبيبة", fr: "Médecin" },
        timeframe: { en: "10 weeks", ar: "10 سيمانات", fr: "10 semaines" },
        result: {
          en: "Lost fat and kept muscle while covering night shifts.",
          ar: "نقصات الدهون وحافظات على العضل وسط المناوبات الليلية.",
          fr: "Perte de gras et conservation du muscle malgré les gardes de nuit.",
        },
        beforeImg: "/transformation-2-before.png",
        afterImg: "/transformation-2-after.png",
      },
      {
        name: { en: "Youssef", ar: "يوسف", fr: "Youssef" },
        profession: { en: "Founder", ar: "مؤسس شركة", fr: "Fondateur" },
        timeframe: { en: "16 weeks", ar: "16 سيمانة", fr: "16 semaines" },
        result: {
          en: "Went from inconsistent hotel gyms to a dense, complete look.",
          ar: "من صالات فنادق غير منتظمة لجسم كثيف ومتكامل.",
          fr: "Des salles d’hôtel irrégulières à un physique dense et complet.",
        },
        beforeImg: "/transformation-3-before.png",
        afterImg: "/transformation-3-after.png",
      },
      {
        name: { en: "Leila", ar: "ليلى", fr: "Leila" },
        profession: { en: "Finance lead", ar: "مسؤولة مالية", fr: "Responsable finance" },
        timeframe: { en: "8 weeks", ar: "8 سيمانات", fr: "8 semaines" },
        result: {
          en: "Finally had a plan that survived quarter-end pressure.",
          ar: "أخيراً برنامج صمد قدام ضغط نهاية الربع.",
          fr: "Enfin un plan qui tient pendant la pression de fin de trimestre.",
        },
        beforeImg: "/transformation-7-before.png",
        afterImg: "/transformation-7-after.png",
      },
    ],
  },

  process: {
    eyebrow: { en: "How it works", ar: "كيفاش كتخدم", fr: "Comment ça marche" } as Localized,
    title: {
      en: "From application to a live plan in the app.",
      ar: "من الطلب لبرنامج حي فتطبيق.",
      fr: "De la candidature à un plan vivant dans l’app.",
    } as Localized,
    steps: [
      {
        num: "01",
        title: { en: "Apply", ar: "قدّم", fr: "Postule" },
        body: {
          en: "Send a short application with your goal, schedule, and training history.",
          ar: "صيفط طلب قصير فيه الهدف، الأجندة، وتاريخ التدريب.",
          fr: "Envoie une candidature courte: objectif, agenda, historique d’entraînement.",
        },
      },
      {
        num: "02",
        title: { en: "Assessment", ar: "تقييم", fr: "Bilan" },
        body: {
          en: "If we are a fit, I review your constraints and set the first block with you.",
          ar: "إلا كنّا مناسبين، كنراجع القيود ديالك وكنضبطو البلوك الأول.",
          fr: "Si le fit est bon, je passe tes contraintes en revue et on pose le premier bloc.",
        },
      },
      {
        num: "03",
        title: { en: "Plan in the app", ar: "البرنامج فتطبيق", fr: "Plan dans l’app" },
        body: {
          en: "Training, meals, and demos appear in your coaching app before week one starts.",
          ar: "التدريب والوجبات والديموهات كيبانو فتطبيق قبل ما يبدا الأسبوع الأول.",
          fr: "Training, repas et démos apparaissent dans ton app avant la semaine 1.",
        },
      },
      {
        num: "04",
        title: { en: "Weekly steering", ar: "توجيه أسبوعي", fr: "Pilotage hebdo" },
        body: {
          en: "You check in. I adjust. The app updates. Progress compounds without chaos.",
          ar: "كتصيفط المتابعة. كنعدّل. التطبيق كيتحدّث. التقدم كيتراكم بلا فوضى.",
          fr: "Tu check-in. J’ajuste. L’app se met à jour. Les progrès s’accumulent sans chaos.",
        },
      },
    ],
  },

  offer: {
    eyebrow: { en: "The offer", ar: "العرض", fr: "L’offre" } as Localized,
    title: {
      en: "Value first. Then the commitment that fits.",
      ar: "القيمة أولاً. من بعد الالتزام المناسب.",
      fr: "La valeur d’abord. Puis l’engagement qui convient.",
    } as Localized,
    valueLead: {
      en: "You get private coaching, a live program in the app, nutrition built for a real calendar, form feedback, and weekly adjustments. One coach. One system. No group chat noise.",
      ar: "كتحصل على كوتشينغ خاص، برنامج حي فتطبيق، تغذية على حساب أجندة حقيقية، تصحيح التيكنيك، وتعديلات أسبوعية. كوتش واحد. سيستيم واحد. بلا ضوضاء الغروب.",
      fr: "Coaching privé, programme vivant dans l’app, nutrition adaptée à un vrai agenda, feedback technique, ajustements hebdo. Un coach. Un système. Pas de bruit de groupe.",
    } as Localized,
    includedTitle: { en: "Included in every block", ar: "داخل فكل بلوك", fr: "Inclus dans chaque bloc" } as Localized,
    included: [
      { en: "Custom training in the coaching app", ar: "تدريب مخصص فتطبيق الكوتشينغ", fr: "Training sur mesure dans l’app" },
      { en: "Ready meal structure with swaps", ar: "بنية وجبات جاهزة مع بدائل", fr: "Structure repas avec swaps" },
      { en: "Exercise library and form reviews", ar: "مكتبة تمارين ومراجعة التيكنيك", fr: "Bibliothèque d’exercices et revues de forme" },
      { en: "Weekly adjustments based on your check-ins", ar: "تعديلات أسبوعية من المتابعة ديالك", fr: "Ajustements hebdo selon tes check-ins" },
      { en: "Direct access to me", ar: "وصول مباشر ليا", fr: "Accès direct à moi" },
    ] as Localized[],
    defaultBadge: { en: "Default", ar: "الأساسي", fr: "Par défaut" } as Localized,
    premiumBadge: { en: "Premium", ar: "متميز", fr: "Premium" } as Localized,
    tiers: [
      {
        id: "two-month",
        name: { en: "2 months", ar: "شهرين", fr: "2 mois" },
        price: { en: "$200", ar: "200$", fr: "200$" },
        detail: {
          en: "The standard start. Enough time to install habits and see a clear first shift.",
          ar: "البداية المعيارية. وقت كافي باش تترسّخ العادات وتشوف أول تحول واضح.",
          fr: "Le départ standard. Assez de temps pour installer les habitudes et voir un premier virage clair.",
        },
        featured: true,
      },
      {
        id: "three-month",
        name: { en: "3 months", ar: "3 أشهر", fr: "3 mois" },
        price: { en: "$280", ar: "280$", fr: "280$" },
        detail: {
          en: "More runway for body composition and strength. Preferred if your schedule is heavy and progress needs a longer block.",
          ar: "مساحة أكبر لتركيب الجسم والقوة. الأفضل إلا كانت الأجندة ثقيلة والتقدم خصو بلوك أطول.",
          fr: "Plus de runway pour la composition et la force. Idéal si l’agenda est dense et qu’il faut un bloc plus long.",
        },
        featured: false,
      },
    ],
    oneMonth: {
      en: "1-month blocks are available on request after we talk. They are not the default path.",
      ar: "بلوك شهر واحد متاح على الطلب من بعد ما نهضرو. ماشي هو المسار الأساسي.",
      fr: "Les blocs d’un mois sont disponibles sur demande après discussion. Ce n’est pas le parcours par défaut.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "قدّم للكوتشينغ", fr: "Postuler au coaching" } as Localized,
  },

  products: {
    eyebrow: { en: "Not ready for 1-on-1", ar: "مازال ما واجدش للـ 1-on-1", fr: "Pas encore prêt pour le 1-on-1" } as Localized,
    title: {
      en: "Lower-commitment ways to start.",
      ar: "طرق أقل التزاماً باش تبدا.",
      fr: "Des portes d’entrée plus légères.",
    } as Localized,
    lead: {
      en: "If you want the method without private coaching, start here.",
      ar: "إلا بغيتي الطريقة بلا كوتشينغ خاص، بدا من هنا.",
      fr: "Si tu veux la méthode sans coaching privé, commence ici.",
    } as Localized,
    items: [
      {
        tag: { en: "Digital", ar: "رقمي", fr: "Digital" },
        title: { en: "Hybrid Blueprint", ar: "Hybrid Blueprint", fr: "Hybrid Blueprint" },
        body: {
          en: "An 8-week hybrid program, meal plans, and tracker. Pay once. Run it yourself.",
          ar: "برنامج Hybrid لثمانية سيمانات، خطط وجبات، وتراكر. خلص مرة. خدّمو بوحدك.",
          fr: "Programme hybride 8 semaines, plans repas et tracker. Paye une fois. Tu le fais seul.",
        },
        price: { en: "$20", ar: "20$", fr: "20$" },
        cta: { en: "See Blueprint", ar: "شوف الدليل", fr: "Voir le Blueprint" },
        href: "/products",
      },
      {
        tag: { en: "Free", ar: "مجاني", fr: "Gratuit" },
        title: { en: "Split Identifier", ar: "أداة الـ Split", fr: "Split Identifier" },
        body: {
          en: "Find a weekly split that fits your available days before you commit to more.",
          ar: "لقى Split أسبوعي كيناسب أيامك قبل ما تلتزم بأكثر.",
          fr: "Trouve un split hebdo adapté à tes jours libres avant d’aller plus loin.",
        },
        price: { en: "Free", ar: "فابور", fr: "Gratuit" },
        cta: { en: "Open free tool", ar: "حل الأداة", fr: "Ouvrir l’outil" },
        href: "/free-tool",
      },
    ],
  },

  finalCta: {
    title: {
      en: "If your schedule is full and your standard is high, apply.",
      ar: "إلا كانت الأجندة عامرة والمعيار عالي، قدّم.",
      fr: "Si l’agenda est plein et le standard élevé, postule.",
    } as Localized,
    body: {
      en: "Tell me your goal, your constraints, and when you can start. I will reply personally.",
      ar: "قول ليا الهدف، القيود، ومتى تقدر تبدا. غادي نجاوب شخصياً.",
      fr: "Dis-moi ton objectif, tes contraintes, et quand tu peux commencer. Je réponds en personne.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "قدّم للكوتشينغ", fr: "Postuler au coaching" } as Localized,
  },
} as const;
