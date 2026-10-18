import type { Language } from "@/lib/translations";

export type Localized = Record<Language, string>;

/** Coaching sales page — ambition and self-investment ICP */
export const landing = {
  hero: {
    brand: { en: "UNBREAKABLES TEAM", ar: "UNBREAKABLES TEAM", fr: "UNBREAKABLES TEAM" } as Localized,
    headline: {
      en: "You're building your career. Don't let your body fall behind.",
      ar: "بني مستقبلك، ولكن ما تنساش تبني جسمك وصحتك.",
      fr: "Tu construis ta carrière. Ne laisse pas ton corps derrière.",
    } as Localized,
    subhead: {
      en: "Online coaching for ambitious people who want a strong, capable body without living in the gym. Your training, your meals, and weekly adjustments, all in one app.",
      ar: "للناس اللي عندهم الطموح وباغين جسم قوي، athletic ومتناسق، بلا ما يولي الـ gym هو حياتهم كاملة.",
      fr: "Coaching en ligne pour les ambitieux qui veulent un corps fort et capable sans vivre à la salle. Ton training, tes repas, et des ajustements chaque semaine, dans une seule app.",
    } as Localized,
    warm: {
      en: "Whether you're starting out or leveling up.",
      ar: "سواء كنتي بادي دابا ولا عندك سنين كتتمرن.",
      fr: "Que tu démarres ou que tu montes d’un cran.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "بدا الـ coaching", fr: "Postuler au coaching" } as Localized,
    ctaSecondary: { en: "See how it works", ar: "شوف كيفاش كنخدمو", fr: "Voir comment ça marche" } as Localized,
    ctaNote: {
      en: "I review every application myself.",
      ar: "",
      fr: "Je lis chaque candidature moi-même.",
    } as Localized,
  },

  audience: {
    eyebrow: { en: "Who this is for", ar: "لمن هاد الشي", fr: "Pour qui" } as Localized,
    title: {
      en: "This is for you if",
      ar: "هاد الـ coaching ليك إلا",
      fr: "C’est pour toi si",
    } as Localized,
    forItems: [
      {
        en: "You bring real standards to your work and want the same for your body",
        ar: "كتاخد خدمتك بجدية وبغيتي نفس الـ standard لجسمك",
        fr: "Tu imposes de vrais standards à ton travail et tu veux la même chose pour ton corps",
      },
      {
        en: "You've tried random programs and nothing stuck, because none were built for your life",
        ar: "جربتي programs عشوائية وباقي ما وصلتيش للنتيجة اللي باغي",
        fr: "Tu as testé des programmes au hasard et rien n’a tenu, parce qu’aucun n’était construit pour ta vie",
      },
      {
        en: "You want to look and feel strong, capable, and lean without living in the gym",
        ar: "بغيتي تبان وتحس براسك قوي، capable و lean بلا ما تعيش فـ gym",
        fr: "Tu veux paraître et te sentir fort, capable et sec, sans vivre à la salle",
      },
      {
        en: "You're ready to commit to the process over months, not days",
        ar: "واجد تلتزم بالـ process ديالك بالشهور، ماشي غير أيام",
        fr: "Tu es prêt à t’engager sur des mois, pas des jours",
      },
    ] as Localized[],
    notTitle: { en: "It's not for you if", ar: "ماشي ليك إلا", fr: "Ce n’est pas pour toi si" } as Localized,
    notItems: [
      {
        en: "You want a magic two-week fix, or you're not ready to put in consistent work.",
        ar: "كتقلب على résultat سريع فـ جوج سيمانات، ولا ما واجدش تلتزم وتخدم بانتظام.",
        fr: "Tu veux une solution magique en deux semaines, ou tu n’es pas prêt à un travail régulier.",
      },
    ] as Localized[],
  },

  app: {
    eyebrow: { en: "The coaching app", ar: "الـ coaching app", fr: "L’app de coaching" } as Localized,
    title: {
      en: "The thing no other coach in this space gives you.",
      ar: "أكثر من غير app ديال التمارين.",
      fr: "Ce qu’aucun autre coach dans cet espace ne te donne.",
    } as Localized,
    lead: {
      en: "Most coaches send a PDF and a chat thread. You get a private app that stays current with you. The app is how I coach properly. It is not a replacement for me.",
      ar: "بزاف ديال الـ coaches كيعطيوك PDF وكيخليوك بوحدك. هنا عندك app ديالك كتتحدّث معاك وكتجمع training، nutrition و progress. ولكن الـ app غير tool. أنا اللي كنكون كوتش ديالك.",
      fr: "La plupart envoient un PDF et un fil. Toi, tu as une app privée qui reste à jour avec toi. L’app est l’outil qui me permet de te coacher vraiment. Pas un remplaçant.",
    } as Localized,
    features: [
      {
        title: { en: "Always current", ar: "ديما محدث", fr: "Toujours à jour" },
        body: {
          en: "The program auto-updates. Your next session is already correct. Never a stale PDF.",
          ar: "الـ program كيتبدل على حساب progress ديالك، باش كل session تعرف بالضبط شنو خاصك تدير. ما كاينش PDF قديم كيبقى تابعك.",
          fr: "Le programme se met à jour tout seul. Ta prochaine séance est déjà juste. Plus jamais un PDF périmé.",
        },
      },
      {
        title: { en: "Meals that fit life", ar: "ماكلة كتخدم مع حياتك", fr: "Repas qui tiennent" },
        body: {
          en: "Nutrition is built into the app, with structure and swaps you can actually run.",
          ar: "الـ nutrition داخلة فـ app، مع structure واضح و swaps باش تقدر تبدل الوجبات على حساب نهارك وتفضيلاتك.",
          fr: "La nutrition est dans l’app, avec une structure et des swaps que tu peux tenir.",
        },
      },
      {
        title: { en: "Progress you can see", ar: "شوف الـ progress ديالك", fr: "Des progrès visibles" },
        body: {
          en: "Training and body metrics are tracked so you see the climb, week by week.",
          ar: "كنتبّعو training والـ body metrics ديالك باش تعرف واش كتمشي للقدّام، سيمانة بسيمانة.",
          fr: "Training et métriques sont suivis. Tu vois la montée, semaine après semaine.",
        },
      },
      {
        title: { en: "I adjust weekly", ar: "كنراجع معاك كل سيمانة", fr: "J’ajuste chaque semaine" },
        body: {
          en: "Check-ins become concrete changes in the app. I steer. The tool just makes it clean.",
          ar: "الـ check-ins ديالك كيتحوّلو لتغييرات حقيقية فـ app. أنا كنقرر شنو خاص يتبدل، والـ tool كتخلي كلشي منظم وواضح.",
          fr: "Les check-ins deviennent des changements concrets dans l’app. Je pilote. L’outil rend ça net.",
        },
      },
    ],
  },

  proof: {
    eyebrow: { en: "Proof", ar: "النتائج", fr: "Preuves" } as Localized,
    title: {
      en: "People who take themselves seriously. At every stage.",
      ar: "ناس قررو ياخدو راسهم بجدية، وكل واحد عندو journey ديالو.",
      fr: "Des gens qui se prennent au sérieux. À chaque étape.",
    } as Localized,
    before: { en: "Before", ar: "قبل", fr: "Avant" } as Localized,
    after: { en: "After", ar: "من بعد", fr: "Après" } as Localized,
    voice: {
      tag: { en: "Client voice", ar: "كلام client", fr: "Voix client" } as Localized,
      line: {
        en: "Hear what the process feels like from the inside.",
        ar: "سمع من عندهم كيفاش دازت معاهم الـ journey.",
        fr: "Écoute ce que le process donne de l’intérieur.",
      } as Localized,
      cta: { en: "Watch the testimonial", ar: "شوف الـ testimonial", fr: "Voir le témoignage" } as Localized,
    },
    cases: [
      {
        name: { en: "Karim", ar: "كريم", fr: "Karim" },
        profession: { en: "Freelancer, 29", ar: "Freelancer، 29 عام", fr: "Freelance, 29" },
        timeframe: { en: "12 weeks", ar: "12 سيمانة", fr: "12 semaines" },
        result: {
          en: "Built a dense look on three weekly sessions while scaling client work.",
          ar: "بنى جسم أقوى وأكثر كثافة غير بـ 3 sessions فالسيمانة، وهو باقي كيكبر الـ business ديالو.",
          fr: "Physique dense sur trois séances par semaine en développant son activité.",
        },
        beforeImg: "/transformation-4-before.png",
        afterImg: "/transformation-4-after.png",
      },
      {
        name: { en: "Sara", ar: "سارة", fr: "Sara" },
        profession: { en: "New mother, 32", ar: "أم جديدة، 32 عام", fr: "Jeune maman, 32" },
        timeframe: { en: "10 weeks", ar: "10 سيمانات", fr: "10 semaines" },
        result: {
          en: "Got strong and lean again without pretending she had a student schedule.",
          ar: "رجعات قوية و lean، ولقات routine تقدر تلتزم بيها بلا ما تقلب حياتها كاملة.",
          fr: "Force et sèche retrouvées, sans faire comme si elle avait un emploi du temps d’étudiante.",
        },
        beforeImg: "/transformation-2-before.png",
        afterImg: "/transformation-2-after.png",
      },
      {
        name: { en: "Youssef", ar: "يوسف", fr: "Youssef" },
        profession: { en: "Business owner, 38", ar: "Business owner، 38 عام", fr: "Chef d’entreprise, 38" },
        timeframe: { en: "16 weeks", ar: "16 سيمانة", fr: "16 semaines" },
        result: {
          en: "Went from inconsistent travel training to a complete, capable physique.",
          ar: "خرج من training متقطع مع السفر، وولا عندو جسم متكامل وقوي.",
          fr: "D’un training de voyage irrégulier à un physique complet et capable.",
        },
        beforeImg: "/transformation-3-before.png",
        afterImg: "/transformation-3-after.png",
      },
      {
        name: { en: "Leila", ar: "ليلى", fr: "Leila" },
        profession: { en: "Young professional, 27", ar: "Young professional، 27 عام", fr: "Jeune pro, 27" },
        timeframe: { en: "8 weeks", ar: "8 سيمانات", fr: "8 semaines" },
        result: {
          en: "Finally had a plan that matched the same standard she brings to her career.",
          ar: "أخيراً ولات عندها plan منظم بنفس الـ standard اللي كتطبق فـ career ديالها.",
          fr: "Enfin un plan au même standard que celui qu’elle impose à sa carrière.",
        },
        beforeImg: "/transformation-7-before.png",
        afterImg: "/transformation-7-after.png",
      },
    ],
  },

  process: {
    eyebrow: { en: "How it works", ar: "كيفاش كنخدمو", fr: "Comment ça marche" } as Localized,
    title: {
      en: "I learn you first. Then I build around you.",
      ar: "الأول كنفهم حياتك. من بعد كنبني عليك.",
      fr: "Je t’apprends d’abord. Ensuite je construis autour de toi.",
    } as Localized,
    steps: [
      {
        num: "01",
        title: { en: "We dig into your reality", ar: "كنفهمو الواقع ديالك", fr: "On creuse ta réalité" },
        body: {
          en: "Goals, schedule, preferences, injuries, travel, stress, what already failed. I need the full picture before I write a single session.",
          ar: "الـ goals، الوقت اللي عندك، الـ preferences، الإصابات، السفر، الـ stress، وحتى شنو جربتي قبل وما خدمش. خاصني الصورة كاملة قبل ما نبني ليك حتى session.",
          fr: "Objectifs, agenda, préférences, blessures, voyages, stress, ce qui a déjà échoué. J’ai besoin du tableau complet avant d’écrire une seule séance.",
        },
      },
      {
        num: "02",
        title: { en: "I design your system", ar: "كنبني ليك الـ system", fr: "Je conçois ton système" },
        body: {
          en: "Training and nutrition built for your life, not a template. Strength, recovery, food you can actually hold, loaded into the app with intent.",
          ar: "Training و nutrition على حساب حياتك، ماشي template واجد للجميع. الـ training، الـ recovery والماكلة اللي تقدر تلتزم بيها كيتجمعو كاملين فـ app بطريقة واضحة.",
          fr: "Training et nutrition pensés pour ta vie, pas un template. Force, récupération, une alimentation tenable, dans l’app avec une vraie intention.",
        },
      },
      {
        num: "03",
        title: { en: "I coach you daily", ar: "كنبقاو متابعين يوم بيوم", fr: "Je te coache au quotidien" },
        body: {
          en: "We’re on WhatsApp every day. How sessions felt, what’s blocking you, what needs to move. When something has to change, I change it fast. Every week I also rewrite loads, swaps, and priorities so you keep growing, not just staying busy.",
          ar: "كل نهار فـ WhatsApp: كيف دازت الـ sessions، شنو صعّب عليك، وشنو خاصو يتبدل. ملي كيبان أن شي حاجة خاصها adjustment، كنبدلوها. وكل سيمانة كنراجع الـ loads، الـ swaps والأولويات باش تبقا كتقدم، ماشي غير كتدير التمارين وخلاص.",
          fr: "On est sur WhatsApp tous les jours. Ressenti des séances, freins, ce qu’il faut bouger. Quand un changement s’impose, je le fais vite. Chaque semaine je réécris aussi charges, swaps et priorités pour que tu progresses vraiment, pas juste pour rester occupé.",
        },
      },
    ],
  },

  offer: {
    eyebrow: { en: "1-on-1 coaching", ar: "1-on-1 coaching", fr: "Coaching 1-on-1" } as Localized,
    title: {
      en: "What you get",
      ar: "شنو كتحصل",
      fr: "Ce que tu obtiens",
    } as Localized,
    valueLead: {
      en: "Private coaching in one app. Training, meals, form feedback, and daily WhatsApp. One coach. One system.",
      ar: "Private coaching فـ app واحد. Training، وجبات، form feedback، و WhatsApp يومي. Coach واحد. System واحد.",
      fr: "Coaching privé dans une seule app. Training, repas, feedback technique, WhatsApp quotidien. Un coach. Un système.",
    } as Localized,
    includedTitle: { en: "Included", ar: "شنو داخل", fr: "Inclus" } as Localized,
    included: [
      { en: "Custom training in the coaching app", ar: "Custom training فـ coaching app", fr: "Training sur mesure dans l’app" },
      { en: "Meal structure with swaps", ar: "Meal structure مع swaps", fr: "Structure repas avec swaps" },
      { en: "Exercise library and form reviews", ar: "Exercise library و form reviews", fr: "Bibliothèque d’exercices et revues de forme" },
      { en: "Daily WhatsApp. We talk, then I act.", ar: "WhatsApp يومي. كنهدرو، كنراجعو، ومن بعد كنبدلو اللي خاص يتبدل.", fr: "WhatsApp quotidien. On parle, puis j’agis." },
      { en: "Fast changes when life or progress demands it", ar: "تعديلات سريعة ملي الحياة ولا الـ progress كيطلبوها", fr: "Changements rapides dès que la vie ou la progression l’exige" },
      { en: "Direct access to me", ar: "Direct access ليا", fr: "Accès direct à moi" },
    ] as Localized[],
    defaultBadge: { en: "Most popular", ar: "الأكثر طلباً", fr: "Le plus choisi" } as Localized,
    premiumBadge: { en: "Deeper block", ar: "مدة أطول", fr: "Bloc plus long" } as Localized,
    tiers: [
      {
        id: "two-month",
        name: { en: "2 months", ar: "2 شهور", fr: "2 mois" },
        detail: {
          en: "The recommended start. Enough time to see the change and lock the habit.",
          ar: "البداية اللي كنوصي بها. وقت كافي باش تبان النتيجة وتبني routine تقدر تكمل عليها.",
          fr: "Le départ recommandé. Assez de temps pour voir le changement et ancrer l’habitude.",
        },
        featured: true,
      },
      {
        id: "three-month",
        name: { en: "3 months", ar: "3 شهور", fr: "3 mois" },
        detail: {
          en: "More weeks. Deeper results. The plan that actually sticks.",
          ar: "وقت أكثر باش نبنيو على الـ progress ديالك ونوصلو لنتيجة أعمق.",
          fr: "Plus de semaines. Des résultats plus profonds. Le plan qui tient vraiment.",
        },
        featured: false,
      },
    ],
    priceNote: {
      en: "Pricing is shared personally after you apply.",
      ar: "الـ pricing كنحددو معاك شخصياً من بعد ما كتقدّم الـ application.",
      fr: "Le tarif est partagé en privé après ta candidature.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "بدا الـ coaching", fr: "Postuler au coaching" } as Localized,
    pathCue: {
      en: "Ready for 1 on 1? Apply above. Not there yet? Two lighter doors below.",
      ar: "واجد لـ 1-on-1؟ قدّم الـ application من لفوق. باقي ما واجدش؟ عندك جوج اختيارات أخف لتحت.",
      fr: "Prêt pour le 1 on 1 ? Postule au dessus. Pas encore ? Deux portes plus légères en bas.",
    } as Localized,
  },

  products: {
    eyebrow: { en: "Digital products", ar: "Digital products", fr: "Produits digitaux" } as Localized,
    title: {
      en: "Not ready for coaching?",
      ar: "باقي ما واجدش للـ coaching؟",
      fr: "Pas encore prêt pour le coaching ?",
    } as Localized,
    lead: {
      en: "Start with a digital product. Same standard. Lower commitment.",
      ar: "بدا بـ digital product. نفس الـ standard. Commitment أقل.",
      fr: "Commence avec un produit digital. Même standard. Moins d’engagement.",
    } as Localized,
    comingSoon: { en: "Coming soon", ar: "قريباً", fr: "Bientôt" } as Localized,
    gateTitle: {
      en: "Digital products are not available yet.",
      ar: "الـ digital products باقي ما وجدوش.",
      fr: "Les produits digitaux ne sont pas encore disponibles.",
    } as Localized,
    gateBody: {
      en: "This page is locked while the products are being finished. Here is what is coming. DM me if you want early access when they open.",
      ar: "هاد القسم باقي مسدود حتى نكمّلو الـ products. ولكن هادو هما الحوايج اللي غادي يكونو هنا. صيفط ليا DM إلا بغيتي توصّل ليهم بكري.",
      fr: "Cette page est verrouillée le temps de finaliser les produits. Voici ce qui arrive. DM moi pour un accès anticipé à l’ouverture.",
    } as Localized,
    notifyCta: { en: "DM for early access", ar: "صيفط ليا DM للـ early access", fr: "DM pour un accès anticipé" } as Localized,
    items: [
      {
        id: "blueprint",
        cover: "/about-me.jpg",
        kind: "paid" as const,
        tag: { en: "Paid", ar: "Paid", fr: "Payant" },
        pathLabel: { en: "01", ar: "01", fr: "01" },
        shortTitle: { en: "BLUEPRINT", ar: "BLUEPRINT", fr: "BLUEPRINT" },
        title: { en: "Hybrid Athlete Blueprint", ar: "Hybrid Athlete Blueprint", fr: "Hybrid Athlete Blueprint" },
        level: { en: "All levels", ar: "جميع المستويات", fr: "Tous niveaux" },
        duration: { en: "8 Weeks", ar: "8 سيمانات", fr: "8 semaines" },
        body: {
          en: "An 8 week hybrid program, meal plans, and tracker. Pay once. Keep it.",
          ar: "Hybrid program ديال 8 سيمانات، meal plans و tracker. كتخلص مرة وحدة وكيبقى عندك.",
          fr: "Programme hybride 8 semaines, plans repas et tracker. Paye une fois. C’est à toi.",
        },
        price: { en: "$19.99", ar: "$19.99", fr: "19,99 $" },
        compareAt: { en: "$29.99", ar: "$29.99", fr: "29,99 $" },
        cta: { en: "Get the Blueprint", ar: "خود الـ Blueprint", fr: "Prendre le Blueprint" },
        details: {
          en: "A self paced hybrid system for people who want structure without private coaching yet.",
          ar: "Hybrid system تقدر تخدم بيه بوحدك إلا باقي ما واجدش لـ private coaching.",
          fr: "Un système hybride en autonomie pour qui veut de la structure avant le coaching privé.",
        },
        bullets: [
          { en: "8 week progressive hybrid training (calisthenics and weights)", ar: "8 سيمانات ديال progressive hybrid training (calisthenics و weights)", fr: "Training hybride progressif 8 semaines (calisthenics et charges)" },
          { en: "Ready meal plans with simple swaps", ar: "Meal plans واجدين مع swaps ساهلين", fr: "Plans repas prêts avec swaps simples" },
          { en: "Workout tracker to lock consistency", ar: "Workout tracker باش تبقى consistent", fr: "Tracker pour ancrer la régularité" },
          { en: "Rules I actually use with clients", ar: "القواعد والـ principles اللي كنخدم بيها مع الـ clients", fr: "Les règles que j’utilise vraiment avec mes clients" },
        ],
      },
      {
        id: "split",
        cover: "/transformation-4-after.png",
        kind: "free" as const,
        tag: { en: "Free", ar: "Free", fr: "Gratuit" },
        pathLabel: { en: "02", ar: "02", fr: "02" },
        shortTitle: { en: "SPLIT FINDER", ar: "SPLIT FINDER", fr: "SPLIT FINDER" },
        title: { en: "Hybrid Split Finder", ar: "Hybrid Split Finder", fr: "Hybrid Split Finder" },
        level: { en: "All levels", ar: "جميع المستويات", fr: "Tous niveaux" },
        duration: { en: "Free", ar: "مجاني", fr: "Gratuit" },
        body: {
          en: "Tell it your days and goal. Get the split that fits. Drop your email to unlock it.",
          ar: "دخل أيامك وهدفك. جيب الـ Split المناسب. سجّل الإيميل باش تحلو.",
          fr: "Dis tes jours et ton objectif. Reçois le split. Laisse ton email pour y accéder.",
        },
        price: { en: "Free", ar: "مجاني", fr: "Gratuit" },
        compareAt: { en: "", ar: "", fr: "" },
        cta: { en: "Get it free", ar: "خودها فابور", fr: "Obtenir gratuitement" },
        details: {
          en: "A free tool to find the hybrid split that matches your schedule before you commit further.",
          ar: "Tool مجاني باش تلقى الـ hybrid split اللي كيناسب جدولك قبل ما تلتزم بأكثر.",
          fr: "Un outil gratuit pour trouver le split hybride adapté à ton agenda.",
        },
        bullets: [
          { en: "Built around your available training days", ar: "مبني على أيام الـ training اللي عندك", fr: "Construit autour de tes jours dispo" },
          { en: "Clear split for strength and aesthetics", ar: "Split واضح للقوة والشكل", fr: "Split clair force + esthétique" },
          { en: "Sent to your email instantly", ar: "كيسيفط ليك فالإيميل دغيا", fr: "Envoyé à ton email immédiatement" },
        ],
      },
    ],
  },

  faq: {
    eyebrow: { en: "Before you decide", ar: "قبل ما تقرر", fr: "Avant de décider" } as Localized,
    title: {
      en: "Clear answers. No fog.",
      ar: "أجوبة واضحة، بلا تعقيد.",
      fr: "Des réponses claires. Sans brouillard.",
    } as Localized,
    items: [
      {
        question: { en: "I don't have time. Does this still work?", ar: "ما عنديش الوقت. واش غادي يناسبني؟", fr: "Je n’ai pas le temps. Ça marche quand même ?" },
        answer: {
          en: "The plan is built around the hours you actually have. Short, focused sessions. No living in the gym. If you can train a few times a week, we have a path.",
          ar: "الـ plan كيتبنى على الوقت اللي عندك فعلاً. Sessions قصيرة ومركزة، وماشي ضروري تعيش فـ gym. إلا كنتي قادر تدرّب غير شي مرات فالسيمانة، نقدروا نبنيو على هاد الأساس.",
          fr: "Le plan est construit sur les heures que tu as vraiment. Séances courtes et ciblées. Sans vivre à la salle. Si tu peux t’entraîner quelques fois par semaine, on a un chemin.",
        },
      },
      {
        question: { en: "I'm a beginner. Is this too advanced?", ar: "أنا beginner. واش هاد الشي ماشي advanced عليا؟", fr: "Je suis débutant. C’est trop avancé ?" },
        answer: {
          en: "No. Your starting point is part of the application. The plan matches your level from week one. Ambition matters more than experience.",
          ar: "لا. الـ starting point ديالك داخل فـ application، والـ plan كيتبنى على المستوى ديالك من week 1. اللي مهم هو تكون باغي تتطور، ماشي شحال عندك من experience.",
          fr: "Non. Ton point de départ est dans la candidature. Le plan épouse ton niveau dès la semaine 1. L’ambition compte plus que l’expérience.",
        },
      },
      {
        question: { en: "Is this just an app?", ar: "واش غير app؟", fr: "C’est juste une app ?" },
        answer: {
          en: "The app is the tool. I still write the plan, watch your check ins, and coach you on WhatsApp every day. You are coached. You are not left alone with software.",
          ar: "لا. الـ app غير tool. أنا اللي كنكتب الـ plan، كنراجع الـ check-ins وكنبقا متابعك فـ WhatsApp كل نهار. ماشي غادي نخليك بوحدك مع software.",
          fr: "L’app est l’outil. Je construis le plan, je lis tes check ins, et je te coache sur WhatsApp chaque jour. Tu es coaché. Pas laissé seul avec un logiciel.",
        },
      },
      {
        question: { en: "What if it doesn't fit me?", ar: "وإلا ما كنتش مناسب للـ coaching؟", fr: "Et si ça ne me convient pas ?" },
        answer: {
          en: "That's why you apply first. I read every application. If we are not a fit, I will say so. The filter exists so neither of us wastes months.",
          ar: "لهذا كاين الـ application. كنقرا كل طلب بوحدو، وإلا بان ليا أننا ماشي fit غادي نقولها ليك بصراحة. الهدف هو ما تضيعش وقتك فـ شي حاجة ما غاديش تناسبك.",
          fr: "C’est pour ça que tu postules d’abord. Je lis chaque candidature. Si le fit n’est pas bon, je le dirai. Le filtre existe pour que personne ne perde des mois.",
        },
      },
    ],
  },

  finalCta: {
    eyebrow: { en: "Your next step", ar: "الخطوة الجاية", fr: "Ta prochaine étape" } as Localized,
    title: {
      en: "Your body isn't going to change by waiting.",
      ar: "جسمك ما غاديش يتبدل بوحدو.",
      fr: "Ton corps ne va pas changer en attendant.",
    } as Localized,
    body: {
      en: "Tell me your goal, your schedule, and your starting point. I reply personally.",
      ar: "قول ليا شنو باغي توصل ليه، شحال عندك من الوقت، وفين واقف دابا. وأنا نجاوبك شخصياً.",
      fr: "Dis moi ton objectif, ton agenda, et ton point de départ. Je réponds en personne.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "بدا الـ coaching", fr: "Postuler au coaching" } as Localized,
    secondary: {
      en: "Or check digital products",
      ar: "ولا شوف الـ digital products",
      fr: "Ou vois les produits digitaux",
    } as Localized,
  },

} as const;
