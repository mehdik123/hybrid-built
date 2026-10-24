import type { Language } from "@/lib/translations";

export type Localized = Record<Language, string>;

/** Coaching sales page: ambition and self-investment ICP */
export const landing = {
  hero: {
    brand: { en: "UNBREAKABLES TEAM", ar: "UNBREAKABLES TEAM", fr: "UNBREAKABLES TEAM" } as Localized,
    label: {
      en: "Online coaching by El Mehdi Kamal",
      ar: "Online coaching مع المهدي كمال",
      fr: "Coaching en ligne par El Mehdi Kamal",
    } as Localized,
    headline: {
      en: "You're building your career. Don't let your body fall behind.",
      ar: "بني مستقبلك، وما تنساش صحتك والجسم ديالك.",
      fr: "Tu construis ta carrière. Ne laisse pas ton corps derrière.",
    } as Localized,
    subhead: {
      en: "1-on-1 coaching for ambitious men and women, built around your real schedule.",
      ar: "للناس الطموحين اللي باغين جسم قوي، متناسق و athletic، بلا ما ياخد ليهم الجيم وقتهم كامل.",
      fr: "Coaching 1-on-1 pour hommes et femmes ambitieux, pensé pour ton vrai emploi du temps.",
    } as Localized,
    proofLine: {
      en: "Training, nutrition and check-ins. All in my app.",
      ar: "Training، nutrition و check-ins. كلشي فـ app ديالي.",
      fr: "Training, nutrition et check-ins. Tout dans mon app.",
    } as Localized,
    warm: {
      en: "Whether you're starting out or leveling up.",
      ar: "سواء كنتي باقي يالله بادي، ولا كتدرب من مدة طويلة.",
      fr: "Que tu démarres ou que tu montes d’un cran.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "بدا معايا", fr: "Postuler au coaching" } as Localized,
    ctaSecondary: { en: "See results", ar: "شوف كيفاش كنخدمو", fr: "Voir les résultats" } as Localized,
    ctaNote: {
      en: "I review every application myself.",
      ar: "",
      fr: "Je lis chaque candidature moi-même.",
    } as Localized,
  },

  audience: {
    eyebrow: { en: "Who this is for", ar: "شكون يقدر يستافد", fr: "Pour qui" } as Localized,
    title: {
      en: "This is for you if",
      ar: "هاد الـ coaching مناسب ليك إلا كنتي...",
      fr: "C’est pour toi si",
    } as Localized,
    forItems: [
      {
        en: "You bring real standards to your work and want the same for your body",
        ar: "كتعطي لخدمتك قيمة، وبغيتي حتى صحتك وجسمك تعطيهم نفس الاهتمام.",
        fr: "Tu imposes de vrais standards à ton travail et tu veux la même chose pour ton corps",
      },
      {
        en: "You've tried random programs and nothing stuck, because none were built for your life",
        ar: "جربتي برامج مختلفة، ولكن باقي ما وصلتيش للنتيجة اللي باغي.",
        fr: "Tu as testé des programmes au hasard et rien n’a tenu, parce qu’aucun n’était construit pour ta vie",
      },
      {
        en: "You want to look and feel strong, lean, and healthy while keeping a balanced life",
        ar: "باغي جسم قوي و lean وتحس براسك قادر تدير بزاف ديال الحوايج، بلا ما تبقى نهارك كامل فالجيم.",
        fr: "Tu veux paraître et te sentir fort, sec et en santé, avec une vie équilibrée",
      },
      {
        en: "You're ready to commit to the process over months, not days",
        ar: "مستعد تخدم على راسك باستمرار، بالشهور، ماشي غير بحماس ديال شي أيام.",
        fr: "Tu es prêt à t’engager sur des mois, pas des jours",
      },
    ] as Localized[],
    notTitle: { en: "It's not for you if", ar: "ماشي مناسب ليك إلا كنتي...", fr: "Ce n’est pas pour toi si" } as Localized,
    notItems: [
      {
        en: "You want a magic two-week fix, or you're not ready to put in consistent work.",
        ar: "كتسنى نتيجة فـ جوج سيمانات، أو ما عندكش الاستعداد تلتزم وتخدم بانتظام.",
        fr: "Tu veux une solution magique en deux semaines, ou tu n’es pas prêt à un travail régulier.",
      },
    ] as Localized[],
  },

  proof: {
    eyebrow: { en: "Client progress", ar: "نتائج الناس اللي خدمو معايا", fr: "Progrès clients" } as Localized,
    title: {
      en: "Different starts. Real progress.",
      ar: "كل واحد بدا من بلاصتو، وكل واحد عندو القصة ديالو.",
      fr: "Des départs différents. Un vrai progrès.",
    } as Localized,
    titleAccent: {
      en: "Real progress.",
      ar: "",
      fr: "Un vrai progrès.",
    } as Localized,
    subhead: {
      en: "Fat loss, muscle, strength. See what consistent work can look like.",
      ar: "نقص دهن، عضلات، قوة. شوف كيفاش كيبان العمل المستمر.",
      fr: "Perte de gras, muscle, force. Voici ce que donne un travail régulier.",
    } as Localized,
    before: { en: "Before", ar: "قبل", fr: "Avant" } as Localized,
    after: { en: "After", ar: "من بعد", fr: "Après" } as Localized,
    voice: {
      tag: { en: "The coaching experience", ar: "من كلامهم", fr: "L’expérience coaching" } as Localized,
      title: {
        en: "More than a before & after.",
        ar: "أكثر من قبل و من بعد.",
        fr: "Plus qu’un avant / après.",
      } as Localized,
      line: {
        en: "Hear a client's perspective on the plan, the support and the work behind their progress.",
        ar: "سمع التجربة ديالهم، وكيفاش دازت الرحلة ديالهم معايا.",
        fr: "Écoute le point de vue d’un client sur le plan, le suivi et le travail derrière ses progrès.",
      } as Localized,
      mediaLabel: {
        en: "Client testimonial",
        ar: "رأي client",
        fr: "Témoignage client",
      } as Localized,
      cta: { en: "Watch the client story", ar: "شوف رأيهم", fr: "Voir l’histoire client" } as Localized,
    },
    cases: [
      {
        name: { en: "Karim", ar: "كريم", fr: "Karim" },
        profession: { en: "Freelancer, 29", ar: "Freelancer، عندو 29 عام", fr: "Freelance, 29" },
        timeframe: { en: "12 weeks", ar: "12 سيمانة", fr: "12 semaines" },
        result: {
          en: "Built a dense look on three weekly sessions while scaling client work.",
          ar: "زاد القوة وبنى جسم متكامل، غير بـ 3 حصص فالسيمانة، وبنفس الوقت بقى مركز على تطوير الـ business ديالو.",
          fr: "Physique dense sur trois séances par semaine en développant son activité.",
        },
        beforeImg: "/transformation-4-before.png",
        afterImg: "/transformation-4-after.png",
      },
      {
        name: { en: "Sara", ar: "سارة", fr: "Sara" },
        profession: { en: "New mother, 32", ar: "أم جديدة، عندها 32 عام", fr: "Jeune maman, 32" },
        timeframe: { en: "10 weeks", ar: "10 سيمانات", fr: "10 semaines" },
        result: {
          en: "Got strong and lean again without pretending she had a student schedule.",
          ar: "رجعات للقوة والـ fitness ديالها، ولقات routine تقدر تواظب عليها بلا ما تقلب حياتها كاملة.",
          fr: "Force et sèche retrouvées, sans faire comme si elle avait un emploi du temps d’étudiante.",
        },
        beforeImg: "/transformation-2-before.png",
        afterImg: "/transformation-2-after.png",
      },
      {
        name: { en: "Youssef", ar: "يوسف", fr: "Youssef" },
        profession: { en: "Business owner, 38", ar: "مول business، عندو 38 عام", fr: "Chef d’entreprise, 38" },
        timeframe: { en: "16 weeks", ar: "16 سيمانة", fr: "16 semaines" },
        result: {
          en: "Went from inconsistent travel training to a complete, capable physique.",
          ar: "من training ماشي منتظم بسبب السفر، ولى عندو routine واضحة وبنى جسم متكامل وقوي.",
          fr: "D’un training de voyage irrégulier à un physique complet et capable.",
        },
        beforeImg: "/transformation-3-before.png",
        afterImg: "/transformation-3-after.png",
      },
      {
        name: { en: "Leila", ar: "ليلى", fr: "Leila" },
        profession: { en: "Young professional, 27", ar: "موظفة شابة، عندها 27 عام", fr: "Jeune pro, 27" },
        timeframe: { en: "8 weeks", ar: "8 سيمانات", fr: "8 semaines" },
        result: {
          en: "Finally had a plan that matched the same standard she brings to her career.",
          ar: "ولات عندها plan واضح ومنظم، بنفس الجدية اللي كتتعامل بها مع الخدمة ديالها.",
          fr: "Enfin un plan au même standard que celui qu’elle impose à sa carrière.",
        },
        beforeImg: "/transformation-7-before.png",
        afterImg: "/transformation-7-after.png",
      },
    ],
  },

  process: {
    eyebrow: { en: "How it works", ar: "كيفاش غادي نخدمو", fr: "Comment ça marche" } as Localized,
    title: {
      en: "We understand your situation. Then we build around it.",
      ar: "أولاً نفهم حياتك، ومن بعد نبني ليك البرنامج المناسب.",
      fr: "On comprend ta situation. Ensuite on construit autour.",
    } as Localized,
    steps: [
      {
        num: "01",
        title: { en: "Your situation, obstacles, and goals", ar: "كنبداو بفهم الوضع ديالك", fr: "Ta situation, tes freins, tes objectifs" },
        body: {
          en: "We start by understanding where you are, what is blocking you, and what you want. Schedule, preferences, past attempts. Clear picture first.",
          ar: "الهدف ديالك، شحال عندك من الوقت، شنو كيناسبك، واش عندك شي إصابة، واش كتسافر بزاف ولا كتدوز من الضغط، وشنو جربتي من قبل. خاصني نفهم الصورة كاملة قبل ما نوجد ليك البرنامج.",
          fr: "On commence par comprendre où tu en es, ce qui te freine, et ce que tu veux. Agenda, préférences, essais passés. D’abord le tableau clair.",
        },
      },
      {
        num: "02",
        title: { en: "Your plan, built for your life", ar: "كنوجد ليك plan على قياسك", fr: "Ton plan, pensé pour ta vie" },
        body: {
          en: "Training and nutrition made for you. Loaded in my app, simple to follow, built around real life.",
          ar: "Training و nutrition على حساب ظروفك، ماشي شي template كنعطيوه لأي واحد. كننظمو التمارين، الراحة والماكلة بطريقة تقدر تطبقها فحياتك اليومية، وكلشي كيبقى واضح فـ app.",
          fr: "Training et nutrition faits pour toi. Dans mon app, simples à suivre, pensés pour la vraie vie.",
        },
      },
      {
        num: "03",
        title: { en: "Daily support on WhatsApp", ar: "كنبقاو على تواصل وكنعدلو حسب الحاجة", fr: "Suivi quotidien sur WhatsApp" },
        body: {
          en: "We talk every day. How training felt, what is hard, what needs a change. You are never left alone.",
          ar: "كنبقاو على تواصل كل نهار فـ WhatsApp: كيف دازت الحصص، شنو لقيتي صعيب، وواش كاين شي حاجة ما خداماش معاك. إلا احتاج البرنامج شي تعديل، كنديروه. وكل سيمانة كنراجعو الأوزان، بدائل الماكلة والأولويات باش تبقى كتقدم، ماشي غير كتدير التمارين بلا اتجاه.",
          fr: "On parle tous les jours. Ressenti du training, ce qui bloque, ce qu’il faut changer. Tu n’es jamais seul.",
        },
      },
    ],
  },

  offer: {
    eyebrow: { en: "1-on-1 coaching", ar: "تدريب شخصي معايا", fr: "Coaching 1-on-1" } as Localized,
    title: {
      en: "What you get",
      ar: "خدمة فردية: برنامج ومتابعة على حسابك نتا.",
      fr: "Ce que tu obtiens",
    } as Localized,
    valueLead: {
      en: "Private coaching in my app. Clear training, real meals, form checks, and daily WhatsApp. One coach. One system.",
      ar: "كنخدم معاك شخصياً: كنقاد ليك البرنامج، كنراجعو فالتطبيق، كننظم معاك الماكلة، كنصحّح الحركة ديالك، وكنبقاو على تواصل كل نهار. ملي كتحتاج تعديل، كنديرو. أنا الكوتش ديالك، والخطة وحدة وواضحة باش تقرب لهدفك.",
      fr: "Coaching privé dans mon app. Training clair, vrais repas, checks de forme, WhatsApp quotidien. Un coach. Un système.",
    } as Localized,
    includedTitle: { en: "Included", ar: "شنو كيشمل الـ coaching؟", fr: "Inclus" } as Localized,
    included: [
      {
        title: {
          en: "Private coaching in my app",
          ar: "برنامج تدريب خاص بيك",
          fr: "Coaching privé dans mon app",
        },
        detail: {
          en: "A smooth experience in my app where we track your PRs, milestones, bodyweight, weekly photos, training volume, and muscle progress. Everything in one place.",
          ar: "أنا اللي كنقاد ليك البرنامج وكنراجعو على حساب التقدم ديالك. كنسجلو القوة، الوزن، الصور الأسبوعية، وحجم التدريب فبلاصة وحدة. ماشي ملف قديم تبقى تابعو كيف ما كان.",
          fr: "Une expérience fluide dans mon app: on suit tes PRs, milestones, poids, photos hebdo, volume d’entraînement et progrès musculaire. Tout au même endroit.",
        },
      },
      {
        title: {
          en: "Meals built for you",
          ar: "ماكلة مصاوبة ليك",
          fr: "Repas faits pour toi",
        },
        detail: {
          en: "Tailored meals with the right calories and macros for your goal. Built around your schedule, your taste, and real variety so eating stays enjoyable.",
          ar: "كنحسب ليك السعرات والماكروز على قد هدفك، وكنبني ليك وجبات تناسب وقتك وذوقك، مع بدائل سهلة باش الماكلة تبقا مريحة ماشي عذاب.",
          fr: "Repas sur mesure avec calories et macros adaptés à ton objectif. Pensés pour ton agenda, tes goûts, avec de la variété pour que manger reste agréable.",
        },
      },
      {
        title: {
          en: "Video demos and form checks",
          ar: "مكتبة ديال التمارين ومراجعة الـ form",
          fr: "Démos vidéo et checks de forme",
        },
        detail: {
          en: "Every program includes my exercise video demos. I also check your form with you so you train safely and get stronger faster.",
          ar: "فيديوهات التمارين ومراجعة الـ form باش تدرّب بسلامة وتولي أقوى بسرعة.",
          fr: "Chaque programme inclut mes démos vidéo. Je vérifie aussi ta forme avec toi pour progresser en sécurité et plus vite.",
        },
      },
      {
        title: {
          en: "Daily WhatsApp support",
          ar: "متابعة يومية فـ WhatsApp",
          fr: "Support WhatsApp quotidien",
        },
        detail: {
          en: "We talk every day. Questions, blockers, wins. You message me, I reply and we move forward together.",
          ar: "كنهدرو على شنو واقع وكنعدلو اللي خاصو يتبدل. تعديلات ملي كتحتاجها ظروفك أو التقدم ديالك.",
          fr: "On parle tous les jours. Questions, freins, avancées. Tu m’écris, je réponds, et on avance ensemble.",
        },
      },
      {
        title: {
          en: "Direct access to me",
          ar: "تواصل مباشر معايا",
          fr: "Accès direct à moi",
        },
        detail: {
          en: "No bots. No assistants. You work with me directly.",
          ar: "ماشي bots. ماشي assistants. كتخدم معايا مباشرة.",
          fr: "Pas de bots. Pas d’assistants. Tu travailles directement avec moi.",
        },
      },
    ],
    defaultBadge: { en: "Most popular", ar: "الأكثر اختياراً", fr: "Le plus choisi" } as Localized,
    premiumBadge: { en: "Deeper block", ar: "مدة أطول", fr: "Bloc plus long" } as Localized,
    tiers: [
      {
        id: "two-month",
        name: { en: "2 months", ar: "جوج شهور", fr: "2 mois" },
        detail: {
          en: "The recommended start. Enough time to see the change and lock the habit.",
          ar: "بداية مزيانة باش تبدا تشوف التغيير وتبني routine تقدر تستمر عليها.",
          fr: "Le départ recommandé. Assez de temps pour voir le changement et ancrer l’habitude.",
        },
        featured: true,
      },
      {
        id: "three-month",
        name: { en: "3 months", ar: "3 شهور", fr: "3 mois" },
        detail: {
          en: "More weeks. Deeper results. The plan that actually sticks.",
          ar: "وقت أكثر باش نطورو التقدم ديالك ونخدمو على نتيجة أكبر وباستمرارية.",
          fr: "Plus de semaines. Des résultats plus profonds. Le plan qui tient vraiment.",
        },
        featured: false,
      },
    ],
    priceNote: {
      en: "Pricing is shared personally after you apply.",
      ar: "الثمن والتفاصيل كنحددوهم من بعد ما تعمّر الـ application.",
      fr: "Le tarif est partagé en privé après ta candidature.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "بدا معايا", fr: "Postuler au coaching" } as Localized,
    pathCue: {
      en: "Ready for 1 on 1? Apply above. Not there yet? Two lighter doors below.",
      ar: "واجد للـ 1-on-1؟ عمّر الـ application من الفوق. باقي كتفكر؟ كاينين حتى جوج اختيارات أبسط لتحت.",
      fr: "Prêt pour le 1 on 1 ? Postule au dessus. Pas encore ? Deux portes plus légères en bas.",
    } as Localized,
  },

  products: {
    eyebrow: { en: "Digital products", ar: "اختيارات أخرى", fr: "Produits digitaux" } as Localized,
    title: {
      en: "Not ready for coaching?",
      ar: "مازال ما واجدش للـ coaching؟ تقدر تبدا بخطوة بسيطة.",
      fr: "Pas encore prêt pour le coaching ?",
    } as Localized,
    lead: {
      en: "Start lighter. Build the hybrid body on your own schedule, then level up to coaching when you are ready.",
      ar: "نفس الاهتمام بالجودة، ولكن التزام أقل. خدم بوحدك دابا، وملي تحس راسك واجد تقدر تنتقل للـ 1-on-1.",
      fr: "Commence plus léger. Construis le physique hybride à ton rythme, puis passe au coaching quand tu es prêt.",
    } as Localized,
    languagesNote: {
      en: "Arabic and English. App inside: week-by-week plan and automatic progressive overload.",
      ar: "عربية و إنجليزية. App داخلة: خطة أسبوع بأسبوع و progressive overload أوتوماتيك.",
      fr: "Arabe et anglais. App incluse: plan semaine par semaine et progressive overload automatique.",
    } as Localized,
    comingSoon: { en: "Coming soon", ar: "قريباً", fr: "Bientôt" } as Localized,
    gateTitle: {
      en: "Digital products are not available yet.",
      ar: "المنتجات الرقمية مازال كنوجدو فيها.",
      fr: "Les produits digitaux ne sont pas encore disponibles.",
    } as Localized,
    gateBody: {
      en: "This page is locked while the products are being finished. Here is what is coming. DM me if you want early access when they open.",
      ar: "هاد القسم غادي يتحل ملي يكونو المنتجات واجدين. غادي تلقى هنا الاختيارات اللي كنوجد ليك دابا. إلا بغيتي تعرف عليهم قبل، صيفط ليا DM.",
      fr: "Cette page est verrouillée le temps de finaliser les produits. Voici ce qui arrive. DM moi pour un accès anticipé à l’ouverture.",
    } as Localized,
    notifyCta: { en: "DM for early access", ar: "صيفط ليا DM باش توصلك الأخبار بكري", fr: "DM pour un accès anticipé" } as Localized,
    items: [
      {
        id: "blueprint",
        cover: "/hybrid-training-cover.jpg",
        kind: "paid" as const,
        checkoutUrl: "https://mehdikamal7.gumroad.com/l/ukamgr?wanted=true",
        tag: {
          en: "Self-guided program",
          ar: "منتج رقمي مدفوع",
          fr: "Programme en autonomie",
        },
        pathLabel: { en: "01", ar: "اختيار 01", fr: "01" },
        shortTitle: {
          en: "HYBRID TRAINING PROGRAM",
          ar: "HYBRID TRAINING PROGRAM",
          fr: "HYBRID TRAINING PROGRAM",
        },
        title: {
          en: "The Hybrid Athlete Blueprint",
          ar: "Hybrid Athlete Blueprint",
          fr: "The Hybrid Athlete Blueprint",
        },
        level: { en: "All levels", ar: "جميع المستويات", fr: "Tous niveaux" },
        duration: { en: "3 / 4 / 5 days", ar: "3 / 4 / 5 أيام", fr: "3 / 4 / 5 jours" },
        languages: {
          en: "Available in Arabic & English",
          ar: "متوفر بالعربية و الإنجليزية",
          fr: "Disponible en arabe & anglais",
        },
        body: {
          en: "Build an aesthetic body mixing bodybuilding and calisthenics. Week by week in the app, with automatic progressive overload.",
          ar: "برنامج Hybrid لمدة 8 سيمانات، مع meal plans و tracker. كتخلص عليه مرة وحدة وكيبقى عندك.",
          fr: "Corps aesthetic: musculation + calisthenics. Semaine par semaine dans l’app, avec progressive overload automatique.",
        },
        price: { en: "$24", ar: "$24", fr: "24 $" },
        compareAt: { en: "$34", ar: "$34", fr: "34 $" },
        priceNote: {
          en: "One-time purchase",
          ar: "خلاص مرة واحدة",
          fr: "Achat unique",
        },
        cta: {
          en: "Get the program",
          ar: "اكتشف شنو فيه",
          fr: "Obtenir le programme",
        },
        details: {
          en: "A self-guided bodybuilding and calisthenics program, available in Arabic and English. Choose a 3, 4 or 5-day schedule, follow your workouts in the app and log each week. Progressive overload updates automatically for the next week.",
          ar: "نظام Hybrid تقدر تتبعو بوحدك إلا مازال ما بغيتيش تدخل للـ private coaching. اختار 3، 4 ولا 5 أيام، تبع الـ workouts فـ app وسجّل كل أسبوع. Progressive overload كيتبدل أوتوماتيك للأسبوع الجاي.",
          fr: "Programme en autonomie: musculation et calisthenics, en arabe et en anglais. Choisis 3, 4 ou 5 jours, suis tes séances dans l’app et log chaque semaine. Le progressive overload se met à jour automatiquement pour la suivante.",
        },
        disclaimer: {
          en: "This is a self-guided program. Personal coaching and daily support are a separate service.",
          ar: "هاد برنامج self-guided. الـ coaching الشخصي والمتابعة اليومية خدمة منفصلة.",
          fr: "Programme en autonomie. Le coaching personnel et le suivi quotidien sont un service séparé.",
        },
        checkoutNote: {
          en: "Exact checkout amount and currency appears at checkout.",
          ar: "الثمن والعملة النهائيين كيبانو فصفحة الخلاص.",
          fr: "Le montant et la devise exacts apparaissent au paiement.",
        },
        gallery: [
          "/hybrid-app-home.png",
          "/hybrid-app-week.png",
          "/hybrid-app-session.png",
        ],
        bullets: [
          {
            en: "App access and weekly workouts",
            ar: "8 سيمانات ديال progressive hybrid training: calisthenics و weights",
            fr: "Accès app et séances hebdo",
          },
          {
            en: "Exercise videos and automatic progression",
            ar: "Meal plans واجدين، ومعاهم بدائل سهلة",
            fr: "Vidéos d’exercices et progression auto",
          },
          {
            en: "Arabic and English · 3, 4 or 5 days",
            ar: "Workout tracker باش تبقى منظم ومواظب",
            fr: "Arabe et anglais · 3, 4 ou 5 jours",
          },
        ],
      },
      {
        id: "split",
        cover: "/split-finder-cover.jpg",
        kind: "free" as const,
        tag: { en: "Free", ar: "مجاني", fr: "Gratuit" },
        pathLabel: { en: "02", ar: "اختيار 02", fr: "02" },
        shortTitle: { en: "SPLIT FINDER", ar: "SPLIT FINDER", fr: "SPLIT FINDER" },
        title: { en: "Hybrid Split Finder", ar: "Hybrid Split Finder", fr: "Hybrid Split Finder" },
        level: { en: "All levels", ar: "جميع المستويات", fr: "Tous niveaux" },
        duration: { en: "Free", ar: "مجاني", fr: "Gratuit" },
        body: {
          en: "Tell it your days and goal. Get the split that fits. Drop your email to unlock it.",
          ar: "أداة مجانية تعاونك تعرف فين واقف دابا قبل ما تلتزم بشي برنامج أكبر.",
          fr: "Dis tes jours et ton objectif. Reçois le split. Laisse ton email pour y accéder.",
        },
        price: { en: "Free", ar: "مجاني", fr: "Gratuit" },
        compareAt: { en: "", ar: "", fr: "" },
        cta: { en: "Get it free", ar: "اكتشف شنو فيها", fr: "Obtenir gratuitement" },
        details: {
          en: "A free tool to find the hybrid split that matches your schedule before you commit further.",
          ar: "Checklist خفيفة ومجانية تراجع بها training و recovery و nutrition ديالك قبل ما تشري شي حاجة.",
          fr: "Un outil gratuit pour trouver le split hybride adapté à ton agenda.",
        },
        bullets: [
          { en: "Built around your available training days", ar: "تقييم سريع باش تعرف فين كتتعطل routine ديالك", fr: "Construit autour de tes jours dispo" },
          { en: "Clear split for strength and aesthetics", ar: "خطوات واضحة على النوم، البروتين والحصص التدريبية", fr: "Split clair force + esthétique" },
          { en: "Sent to your email instantly", ar: "نقطة انطلاق تعرف بها المستوى ديالك قبل الـ coaching ولا الـ Blueprint", fr: "Envoyé à ton email immédiatement" },
        ],
      },
    ],
  },

  faq: {
    eyebrow: { en: "Before you decide", ar: "قبل ما تاخد القرار", fr: "Avant de décider" } as Localized,
    title: {
      en: "Clear answers. No fog.",
      ar: "أجوبة واضحة على الأسئلة اللي ممكن تكون عندك.",
      fr: "Des réponses claires. Sans brouillard.",
    } as Localized,
    items: [
      {
        question: { en: "I don't have time. Does this still work?", ar: "ما عنديش الوقت الكافي. واش غادي يناسبني؟", fr: "Je n’ai pas le temps. Ça marche quand même ?" },
        answer: {
          en: "The plan is built around the hours you actually have. Short, focused sessions that fit real life. If you can train a few times a week, we have a path.",
          ar: "البرنامج كيتبنى على الوقت اللي متوفر عندك فعلاً. الحصص كتكون مركزة، وماشي خاصك تبقى نهارك كامل فالجيم. حتى إلا قدرت تتمرن غير شي مرات فالسيمانة، نقدروا نبنيو plan مناسب لهاد الشي.",
          fr: "Le plan est construit sur les heures que tu as vraiment. Séances courtes et ciblées qui tiennent dans la vraie vie. Si tu peux t’entraîner quelques fois par semaine, on a un chemin.",
        },
      },
      {
        question: { en: "I'm a beginner. Is this too advanced?", ar: "أنا باقي مبتدئ. واش البرنامج ماشي صعيب عليا؟", fr: "Je suis débutant. C’est trop avancé ?" },
        answer: {
          en: "No. Your starting point is part of the application. The plan matches your level from week one. Ambition matters more than experience.",
          ar: "لا، كنحسبو المستوى ديالك من الأول، وكنبني البرنامج على حساب فين نتا دابا. ماشي مهم شحال عندك من تجربة؛ المهم تكون باغي تتعلم وتتطور.",
          fr: "Non. Ton point de départ est dans la candidature. Le plan épouse ton niveau dès la semaine 1. L’ambition compte plus que l’expérience.",
        },
      },
      {
        question: { en: "Is this just an app?", ar: "واش غادي ناخد غير app؟", fr: "C’est juste une app ?" },
        answer: {
          en: "The app is the tool. I still write the plan, watch your check ins, and coach you on WhatsApp every day. You are coached. You are not left alone with software.",
          ar: "لا. التطبيق غير كيساعدنا ننظمو كلشي. أنا اللي كنوجد البرنامج، كنراجع معاك التقدم، وكنبقى متابعك كل نهار فـ WhatsApp. ما غاديش نعطيك software ونخليك بوحدك.",
          fr: "L’app est l’outil. Je construis le plan, je lis tes check ins, et je te coache sur WhatsApp chaque jour. Tu es coaché. Pas laissé seul avec un logiciel.",
        },
      },
      {
        question: { en: "What if it doesn't fit me?", ar: "وشنو إلا بان لينا أن الـ coaching ما مناسبش ليا؟", fr: "Et si ça ne me convient pas ?" },
        answer: {
          en: "That's why you apply first. I read every application. If we are not a fit, I will say so. The filter exists so neither of us wastes months.",
          ar: "على هاد الشي كاين الـ application. كنقرا كل طلب بوحدو، وإلا شفت أن الخدمة ما غاديش تناسبك، غادي نقولها ليك بصراحة. بغيتك تختار الحل اللي فعلاً يقدر يعاونك، ماشي تضيع وقتك وفلوسك.",
          fr: "C’est pour ça que tu postules d’abord. Je lis chaque candidature. Si le fit n’est pas bon, je le dirai. Le filtre existe pour que personne ne perde des mois.",
        },
      },
    ],
  },

  finalCta: {
    eyebrow: { en: "Your next step", ar: "الخطوة الجاية", fr: "Ta prochaine étape" } as Localized,
    title: {
      en: "Your body isn't going to change by waiting.",
      ar: "التغيير ما كيجيش بوحدو؛ كيبدا بقرار.",
      fr: "Ton corps ne va pas changer en attendant.",
    } as Localized,
    body: {
      en: "Tell me your goal, your schedule, and your starting point. I reply personally.",
      ar: "شرح ليا شنو باغي تحقق، شحال من الوقت تقدر تخصص، وفين وصلتي دابا. غادي نشوف طلبك ونجاوبك بنفسي.",
      fr: "Dis moi ton objectif, ton agenda, et ton point de départ. Je réponds en personne.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "بدا معايا", fr: "Postuler au coaching" } as Localized,
    secondary: {
      en: "Or check digital products",
      ar: "ولا رجع للفوق وشوف الاختيارات الأخرى إلا مازال ما واجدش للـ 1-on-1.",
      fr: "Ou vois les produits digitaux",
    } as Localized,
  },

} as const;
