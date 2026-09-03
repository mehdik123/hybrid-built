import type { Language } from "@/lib/translations";

export type Localized = Record<Language, string>;

/** Coaching sales page — ambition and self-investment ICP */
export const landing = {
  hero: {
    brand: { en: "UNBREAKABLES TEAM", ar: "UNBREAKABLES TEAM", fr: "UNBREAKABLES TEAM" } as Localized,
    headline: {
      en: "You're building your career. Don't let your body fall behind.",
      ar: "كتبني مسارك. ما تخليش جسمك يطيح من وراك.",
      fr: "Tu construis ta carrière. Ne laisse pas ton corps derrière.",
    } as Localized,
    subhead: {
      en: "Online coaching for ambitious people who want a strong, capable body without living in the gym. Your training, your meals, and weekly adjustments, all in one app.",
      ar: "كوتشينغ أونلاين للناس الطموحين اللي بغيو جسم قوي وقادر بلا ما يعيشو فالصالة. التدريب، الوجبات، والتعديلات الأسبوعية، كلشي فتطبيق واحد.",
      fr: "Coaching en ligne pour les ambitieux qui veulent un corps fort et capable sans vivre à la salle. Ton training, tes repas, et des ajustements chaque semaine, dans une seule app.",
    } as Localized,
    warm: {
      en: "Whether you're starting out or leveling up.",
      ar: "سواء كاتبدا ولا كاتطلع للمستوى الجاي.",
      fr: "Que tu démarres ou que tu montes d’un cran.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "قدّم للكوتشينغ", fr: "Postuler au coaching" } as Localized,
    ctaSecondary: { en: "See how it works", ar: "شوف كيفاش كتخدم", fr: "Voir comment ça marche" } as Localized,
    ctaNote: {
      en: "I review every application myself.",
      ar: "كنراجع كل طلب براسي.",
      fr: "Je lis chaque candidature moi-même.",
    } as Localized,
  },

  audience: {
    eyebrow: { en: "Who this is for", ar: "لمن هاد الشي", fr: "Pour qui" } as Localized,
    title: {
      en: "This is for you if",
      ar: "هاد الشي ليك إلا",
      fr: "C’est pour toi si",
    } as Localized,
    forItems: [
      {
        en: "You bring real standards to your work and want the same for your body",
        ar: "كتجيب معايير حقيقية لشغلك وبغيتي نفس الشي لجسمك",
        fr: "Tu imposes de vrais standards à ton travail et tu veux la même chose pour ton corps",
      },
      {
        en: "You've tried random programs and nothing stuck, because none were built for your life",
        ar: "جربتي برامج عشوائية وما ثبتات والو، حيت ما كانوش مبنيين على حياتك",
        fr: "Tu as testé des programmes au hasard et rien n’a tenu, parce qu’aucun n’était construit pour ta vie",
      },
      {
        en: "You want to look and feel strong, capable, and lean without living in the gym",
        ar: "بغيتي تبان وتحس راسك قوي، قادر، ونحيل بلا ما تعيش فالصالة",
        fr: "Tu veux paraître et te sentir fort, capable et sec, sans vivre à la salle",
      },
      {
        en: "You're ready to commit to the process over months, not days",
        ar: "واجد تلتزم بالعملية لشهور، ماشي أيام",
        fr: "Tu es prêt à t’engager sur des mois, pas des jours",
      },
    ] as Localized[],
    notTitle: { en: "It's not for you if", ar: "ماشي ليك إلا", fr: "Ce n’est pas pour toi si" } as Localized,
    notItems: [
      {
        en: "You want a magic two-week fix, or you're not ready to put in consistent work.",
        ar: "كتبحث على حل سحري فجوج سيمانات، ولا ما واجدش تخدم بانتظام.",
        fr: "Tu veux une solution magique en deux semaines, ou tu n’es pas prêt à un travail régulier.",
      },
    ] as Localized[],
  },

  app: {
    eyebrow: { en: "The coaching app", ar: "تطبيق الكوتشينغ", fr: "L’app de coaching" } as Localized,
    title: {
      en: "The thing no other coach in this space gives you.",
      ar: "الشي اللي حتى كوتش فهاد المجال ما كيعطيهش.",
      fr: "Ce qu’aucun autre coach dans cet espace ne te donne.",
    } as Localized,
    lead: {
      en: "Most coaches send a PDF and a chat thread. You get a private app that stays current with you. The app is how I coach properly. It is not a replacement for me.",
      ar: "أغلب الكوتشات كيصيفطو PDF وثريد. نت كتحصل على تطبيق خاص كيبقا محدّث معاك. التطبيق هو الطريقة اللي كنكوتشي بيها مزيان. ماشي بديل ليا.",
      fr: "La plupart envoient un PDF et un fil. Toi, tu as une app privée qui reste à jour avec toi. L’app est l’outil qui me permet de te coacher vraiment. Pas un remplaçant.",
    } as Localized,
    features: [
      {
        title: { en: "Always current", ar: "ديما محدّث", fr: "Toujours à jour" },
        body: {
          en: "The program auto-updates. Your next session is already correct. Never a stale PDF.",
          ar: "البرنامج كيتحدّث وحدو. الحصة الجاية كتكون صحيحة. عمرك PDF قديم.",
          fr: "Le programme se met à jour tout seul. Ta prochaine séance est déjà juste. Plus jamais un PDF périmé.",
        },
      },
      {
        title: { en: "Meals that fit life", ar: "وجبات كتناسب الحياة", fr: "Repas qui tiennent" },
        body: {
          en: "Nutrition is built into the app, with structure and swaps you can actually run.",
          ar: "التغذية داخلة فتطبيق، ببنية وبدائل تقدر تخدّم بيهم.",
          fr: "La nutrition est dans l’app, avec une structure et des swaps que tu peux tenir.",
        },
      },
      {
        title: { en: "Progress you can see", ar: "تقدم كتشوفو", fr: "Des progrès visibles" },
        body: {
          en: "Training and body metrics are tracked so you see the climb, week by week.",
          ar: "التدريب ومقاييس الجسم متبعين باش تشوف الطلعة، سيمانة بسيمانة.",
          fr: "Training et métriques sont suivis. Tu vois la montée, semaine après semaine.",
        },
      },
      {
        title: { en: "I adjust weekly", ar: "كنعدّل كل سيمانة", fr: "J’ajuste chaque semaine" },
        body: {
          en: "Check-ins become concrete changes in the app. I steer. The tool just makes it clean.",
          ar: "المتابعة كتولي تغييرات ملموسة فتطبيق. أنا كنوجّه. الأداة غير كتخليها نظيفة.",
          fr: "Les check-ins deviennent des changements concrets dans l’app. Je pilote. L’outil rend ça net.",
        },
      },
    ],
  },

  proof: {
    eyebrow: { en: "Proof", ar: "الدليل", fr: "Preuves" } as Localized,
    title: {
      en: "People who take themselves seriously. At every stage.",
      ar: "ناس كياخدو راسهم بجدية. فكل مرحلة.",
      fr: "Des gens qui se prennent au sérieux. À chaque étape.",
    } as Localized,
    before: { en: "Before", ar: "قبل", fr: "Avant" } as Localized,
    after: { en: "After", ar: "بعد", fr: "Après" } as Localized,
    voice: {
      tag: { en: "Client voice", ar: "صوت عميل", fr: "Voix client" } as Localized,
      line: {
        en: "Hear what the process feels like from the inside.",
        ar: "سمع كيفاش كتحس العملية من الداخل.",
        fr: "Écoute ce que le process donne de l’intérieur.",
      } as Localized,
      cta: { en: "Watch the testimonial", ar: "شوف الشهادة", fr: "Voir le témoignage" } as Localized,
    },
    cases: [
      {
        name: { en: "Karim", ar: "كريم", fr: "Karim" },
        profession: { en: "Freelancer, 29", ar: "فريلانسر، 29", fr: "Freelance, 29" },
        timeframe: { en: "12 weeks", ar: "12 سيمانة", fr: "12 semaines" },
        result: {
          en: "Built a dense look on three weekly sessions while scaling client work.",
          ar: "بنى جسم كثيف فثلاثة حصص فالسيمانة وهو كيوسّع الخدمة.",
          fr: "Physique dense sur trois séances par semaine en développant son activité.",
        },
        beforeImg: "/transformation-4-before.png",
        afterImg: "/transformation-4-after.png",
      },
      {
        name: { en: "Sara", ar: "سارة", fr: "Sara" },
        profession: { en: "New mother, 32", ar: "أم جديدة، 32", fr: "Jeune maman, 32" },
        timeframe: { en: "10 weeks", ar: "10 سيمانات", fr: "10 semaines" },
        result: {
          en: "Got strong and lean again without pretending she had a student schedule.",
          ar: "رجعات قوية ونحيلة بلا ما تمثل بحال عندها وقت طالب.",
          fr: "Force et sèche retrouvées, sans faire comme si elle avait un emploi du temps d’étudiante.",
        },
        beforeImg: "/transformation-2-before.png",
        afterImg: "/transformation-2-after.png",
      },
      {
        name: { en: "Youssef", ar: "يوسف", fr: "Youssef" },
        profession: { en: "Business owner, 38", ar: "صاحب بيزنس، 38", fr: "Chef d’entreprise, 38" },
        timeframe: { en: "16 weeks", ar: "16 سيمانة", fr: "16 semaines" },
        result: {
          en: "Went from inconsistent travel training to a complete, capable physique.",
          ar: "من تدريب سفر متقطع لجسم متكامل وقادر.",
          fr: "D’un training de voyage irrégulier à un physique complet et capable.",
        },
        beforeImg: "/transformation-3-before.png",
        afterImg: "/transformation-3-after.png",
      },
      {
        name: { en: "Leila", ar: "ليلى", fr: "Leila" },
        profession: { en: "Young professional, 27", ar: "مهنية شابة، 27", fr: "Jeune pro, 27" },
        timeframe: { en: "8 weeks", ar: "8 سيمانات", fr: "8 semaines" },
        result: {
          en: "Finally had a plan that matched the same standard she brings to her career.",
          ar: "أخيراً برنامج بنفس المعيار اللي كتجيبو لمسارها.",
          fr: "Enfin un plan au même standard que celui qu’elle impose à sa carrière.",
        },
        beforeImg: "/transformation-7-before.png",
        afterImg: "/transformation-7-after.png",
      },
    ],
  },

  process: {
    eyebrow: { en: "How it works", ar: "كيفاش كتخدم", fr: "Comment ça marche" } as Localized,
    title: {
      en: "Three steps. Then we work.",
      ar: "ثلاثة خطوات. من بعد كنخدمو.",
      fr: "Trois étapes. Ensuite on travaille.",
    } as Localized,
    steps: [
      {
        num: "01",
        title: { en: "You apply", ar: "كتقدّم", fr: "Tu postules" },
        body: {
          en: "A short form: your goal, your schedule, and your starting point.",
          ar: "فورم قصير: الهدف، الأجندة، ونقطة البداية.",
          fr: "Un formulaire court: objectif, agenda, point de départ.",
        },
      },
      {
        num: "02",
        title: { en: "I build the plan", ar: "كنبني البرنامج", fr: "Je construis le plan" },
        body: {
          en: "Your training and meals land in the app within 48 hours.",
          ar: "التدريب والوجبات كيبانو فتطبيق داخل 48 ساعة.",
          fr: "Training et repas arrivent dans l’app sous 48 heures.",
        },
      },
      {
        num: "03",
        title: { en: "You train. I adjust.", ar: "كتدرّب. كنعدّل.", fr: "Tu t’entraînes. J’ajuste." },
        body: {
          en: "Every week I update the plan so you never sit on a plateau.",
          ar: "كل سيمانة كنحدّث البرنامج باش ما تبقاش فالهضبة.",
          fr: "Chaque semaine je mets le plan à jour pour que tu ne stagnes pas.",
        },
      },
    ],
  },

  offer: {
    eyebrow: { en: "The offer", ar: "العرض", fr: "L’offre" } as Localized,
    title: {
      en: "What you get when we work together.",
      ar: "شنو كتحصل عليه ملي كنخدمو بجوج.",
      fr: "Ce que tu reçois quand on travaille ensemble.",
    } as Localized,
    valueLead: {
      en: "Private coaching, a live program in the app, meals built for real life, form feedback, and weekly adjustments. One coach. One system.",
      ar: "كوتشينغ خاص، برنامج حي فتطبيق، وجبات على حساب الحياة الحقيقية، تصحيح التيكنيك، وتعديلات أسبوعية. كوتش واحد. سيستيم واحد.",
      fr: "Coaching privé, programme vivant dans l’app, repas adaptés à la vraie vie, feedback technique, ajustements hebdo. Un coach. Un système.",
    } as Localized,
    includedTitle: { en: "Included in every block", ar: "داخل فكل بلوك", fr: "Inclus dans chaque bloc" } as Localized,
    included: [
      { en: "Custom training in the coaching app", ar: "تدريب مخصص فتطبيق الكوتشينغ", fr: "Training sur mesure dans l’app" },
      { en: "Meal structure with swaps", ar: "بنية وجبات مع بدائل", fr: "Structure repas avec swaps" },
      { en: "Exercise library and form reviews", ar: "مكتبة تمارين ومراجعة التيكنيك", fr: "Bibliothèque d’exercices et revues de forme" },
      { en: "Weekly adjustments from your check-ins", ar: "تعديلات أسبوعية من المتابعة", fr: "Ajustements hebdo selon tes check-ins" },
      { en: "Direct access to me", ar: "وصول مباشر ليا", fr: "Accès direct à moi" },
    ] as Localized[],
    defaultBadge: { en: "Most popular", ar: "الأكثر اختياراً", fr: "Le plus choisi" } as Localized,
    premiumBadge: { en: "Deeper block", ar: "بلوك أعمق", fr: "Bloc plus long" } as Localized,
    tiers: [
      {
        id: "two-month",
        name: { en: "2 months", ar: "شهرين", fr: "2 mois" },
        detail: {
          en: "The recommended start. Enough time to see the change and lock the habit.",
          ar: "البداية الموصى بها. وقت كافي باش تشوف التغيير وترسّخ العادة.",
          fr: "Le départ recommandé. Assez de temps pour voir le changement et ancrer l’habitude.",
        },
        featured: true,
      },
      {
        id: "three-month",
        name: { en: "3 months", ar: "3 أشهر", fr: "3 mois" },
        detail: {
          en: "More weeks. Deeper results. The plan that actually sticks.",
          ar: "سيمانات أكثر. نتائج أعمق. البرنامج اللي كيثبت.",
          fr: "Plus de semaines. Des résultats plus profonds. Le plan qui tient vraiment.",
        },
        featured: false,
      },
    ],
    priceNote: {
      en: "Pricing is shared personally after you apply.",
      ar: "الثمن كنبقاو عليه شخصياً من بعد ما تقدّم.",
      fr: "Le tarif est partagé en privé après ta candidature.",
    } as Localized,
    cta: { en: "Apply now", ar: "قدّم دابا", fr: "Postuler" } as Localized,
  },

  products: {
    eyebrow: { en: "Start lighter", ar: "بدا أخف", fr: "Commencer léger" } as Localized,
    title: {
      en: "Not ready for coaching. Start here.",
      ar: "مازال ما واجدش للكوتشينغ. بدا من هنا.",
      fr: "Pas encore prêt pour le coaching. Commence ici.",
    } as Localized,
    lead: {
      en: "Same standard. Lower commitment. Run it yourself until you're ready for 1-on-1.",
      ar: "نفس المعيار. التزام أقل. خدّمو بوحدك حتى تكون واجد للـ 1-on-1.",
      fr: "Même standard. Moins d’engagement. Tu le fais seul jusqu’au 1-on-1.",
    } as Localized,
    comingSoon: { en: "Coming soon", ar: "قريباً", fr: "Bientôt" } as Localized,
    gateTitle: {
      en: "Digital products are not available yet.",
      ar: "المنتجات الرقمية باقي ما جاهزاش.",
      fr: "Les produits digitaux ne sont pas encore disponibles.",
    } as Localized,
    gateBody: {
      en: "This page is locked while the products are being finished. Here is what is coming. DM me if you want early access when they open.",
      ar: "هاد الصفحة مقفولة حتى نكمّلو المنتجات. ها شنو غادي يجي. صيفط ليا إلا بغيتي الوصول المبكر ملي يتفتحو.",
      fr: "Cette page est verrouillée le temps de finaliser les produits. Voici ce qui arrive. DM-moi pour un accès anticipé à l’ouverture.",
    } as Localized,
    notifyCta: { en: "DM me for early access", ar: "صيفط ليا للوصول المبكر", fr: "DM pour un accès anticipé" } as Localized,
    items: [
      {
        id: "blueprint",
        tag: { en: "Digital", ar: "رقمي", fr: "Digital" },
        title: { en: "Hybrid Athlete Blueprint", ar: "Hybrid Athlete Blueprint", fr: "Hybrid Athlete Blueprint" },
        body: {
          en: "An 8-week hybrid program, meal plans, and tracker. Pay once. Keep it.",
          ar: "برنامج Hybrid لثمانية سيمانات، خطط وجبات، وتراكر. خلص مرة. بقا عندك.",
          fr: "Programme hybride 8 semaines, plans repas et tracker. Paye une fois. C’est à toi.",
        },
        price: { en: "Coming soon", ar: "قريباً", fr: "Bientôt" },
        cta: { en: "See what’s inside", ar: "شوف شنو غادي يكون", fr: "Voir le contenu" },
        details: {
          en: "A self-paced hybrid system for people who want structure without private coaching yet.",
          ar: "سيستيم Hybrid تخدم بيه بوحدك إلا باقي ما واجدش للكوتشينغ الخاص.",
          fr: "Un système hybride en autonomie pour qui veut de la structure avant le coaching privé.",
        },
        bullets: [
          {
            en: "8-week progressive hybrid training (calisthenics × weights)",
            ar: "تدريب Hybrid تصاعدي لـ 8 سيمانات (كاليسثينكس × أوزان)",
            fr: "Training hybride progressif 8 semaines (calisthenics × charges)",
          },
          {
            en: "Ready meal plans with simple swaps",
            ar: "خطط وجبات جاهزة مع بدائل بسيطة",
            fr: "Plans repas prêts avec swaps simples",
          },
          {
            en: "Workout tracker to lock consistency",
            ar: "تراكر باش تثبت الاستمرارية",
            fr: "Tracker pour ancrer la régularité",
          },
          {
            en: "Rules I actually use with clients",
            ar: "القواعد اللي كنخدم بيها مع العملاء",
            fr: "Les règles que j’utilise vraiment avec mes clients",
          },
        ],
      },
      {
        id: "checklist",
        tag: { en: "Free", ar: "مجاني", fr: "Gratuit" },
        title: { en: "Health Checklist", ar: "Health Checklist", fr: "Health Checklist" },
        body: {
          en: "A free lead magnet to see where you actually stand before you commit to more.",
          ar: "أداة مجانية باش تعرف فين راك قبل ما تلتزم بأكثر.",
          fr: "Un lead magnet gratuit pour voir où tu en es vraiment avant d’aller plus loin.",
        },
        price: { en: "Coming soon", ar: "قريباً", fr: "Bientôt" },
        cta: { en: "See what’s inside", ar: "شوف شنو غادي يكون", fr: "Voir le contenu" },
        details: {
          en: "A short free checklist to audit your training, recovery, and nutrition before you buy anything.",
          ar: "لائحة مجانية قصيرة باش تقيّم التدريب، الاسترجاع، والتغذية قبل ما تشري أي حاجة.",
          fr: "Une checklist gratuite courte pour auditer training, récupération et nutrition avant d’acheter quoi que ce soit.",
        },
        bullets: [
          {
            en: "Quick score of where your routine is leaking",
            ar: "تقييم سريع فين كتضيع الروتين ديالك",
            fr: "Un score rapide des fuites de ta routine",
          },
          {
            en: "Clear next actions for sleep, protein, and sessions",
            ar: "خطوات واضحة للنوم، البروتين، والحصص",
            fr: "Actions claires pour sommeil, protéines et séances",
          },
          {
            en: "A baseline before coaching or the Blueprint",
            ar: "نقطة انطلاق قبل الكوتشينغ أو الـ Blueprint",
            fr: "Une base avant le coaching ou le Blueprint",
          },
        ],
      },
    ],
  },

  faq: {
    eyebrow: { en: "FAQ", ar: "أسئلة", fr: "FAQ" } as Localized,
    title: {
      en: "The last questions before you apply.",
      ar: "آخر الأسئلة قبل ما تقدّم.",
      fr: "Les dernières questions avant de postuler.",
    } as Localized,
    items: [
      {
        question: { en: "I don't have time. Does this still work?", ar: "ما عنديش الوقت. واش كيخدم؟", fr: "Je n’ai pas le temps. Ça marche quand même ?" },
        answer: {
          en: "The plan is built around the hours you actually have. Short, focused sessions. No living in the gym. If you can train a few times a week, we have a path.",
          ar: "البرنامج كيتبنى على الساعات اللي عندك بصح. حصص قصيرة ومركّزة. بلا ما تعيش فالصالة. إلا قدرت تدرّب شوية مرات فالسيمانة، عندنا طريق.",
          fr: "Le plan est construit sur les heures que tu as vraiment. Séances courtes et ciblées. Sans vivre à la salle. Si tu peux t’entraîner quelques fois par semaine, on a un chemin.",
        },
      },
      {
        question: { en: "I'm a beginner. Is this too advanced?", ar: "أنا مبتدئ. واش هاد الشي صعيب بزاف؟", fr: "Je suis débutant. C’est trop avancé ?" },
        answer: {
          en: "No. Your starting point is part of the application. The plan matches your level from week one. Ambition matters more than experience.",
          ar: "لا. نقطة البداية داخلة فالطلب. البرنامج كيجي على قدّك من الأسبوع الأول. الطموح أهم من الخبرة.",
          fr: "Non. Ton point de départ est dans la candidature. Le plan épouse ton niveau dès la semaine 1. L’ambition compte plus que l’expérience.",
        },
      },
      {
        question: { en: "Is this just an app?", ar: "واش غير تطبيق؟", fr: "C’est juste une app ?" },
        answer: {
          en: "The app is the tool. I still write the plan, watch your check-ins, and adjust every week. You are coached. You are not left alone with software.",
          ar: "التطبيق أداة. أنا باقي كنكتب البرنامج، كنراجع المتابعة، وكنعدّل كل سيمانة. كتكون متكوتشي. ماشي بوحدك مع سوفتوير.",
          fr: "L’app est l’outil. Je construis le plan, je lis tes check-ins, j’ajuste chaque semaine. Tu es coaché. Pas laissé seul avec un logiciel.",
        },
      },
      {
        question: { en: "What if it doesn't fit me?", ar: "إلا ما ناسبنيش؟", fr: "Et si ça ne me convient pas ?" },
        answer: {
          en: "That's why you apply first. I read every application. If we are not a fit, I will say so. The filter exists so neither of us wastes months.",
          ar: "علاش كاتقدّم أولاً. كنقرأ كل طلب. إلا ما كنّاش مناسبين، غادي نقولها. الفلتر موجود باش حتى واحد ما يضيّع شهور.",
          fr: "C’est pour ça que tu postules d’abord. Je lis chaque candidature. Si le fit n’est pas bon, je le dirai. Le filtre existe pour que personne ne perde des mois.",
        },
      },
    ],
  },

  finalCta: {
    title: {
      en: "Your body isn't going to change by waiting.",
      ar: "جسمك ما غاديش يتبدّل بالانتظار.",
      fr: "Ton corps ne va pas changer en attendant.",
    } as Localized,
    body: {
      en: "Tell me your goal, your schedule, and your starting point. I reply personally.",
      ar: "قول ليا الهدف، الأجندة، ونقطة البداية. كنجاوب شخصياً.",
      fr: "Dis-moi ton objectif, ton agenda, et ton point de départ. Je réponds en personne.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "قدّم للكوتشينغ", fr: "Postuler au coaching" } as Localized,
  },
} as const;
