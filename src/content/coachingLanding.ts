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
      ar: "بني مستقبلك، ولكن ما تنساش تبني جسمك وصحتك.",
      fr: "Tu construis ta carrière. Ne laisse pas ton corps derrière.",
    } as Localized,
    subhead: {
      en: "1-on-1 coaching for ambitious men and women, built around your real schedule.",
      ar: "1-on-1 coaching للرجال والنساء الطموحين، مصاوب على الوقت الحقيقي ديالك.",
      fr: "Coaching 1-on-1 pour hommes et femmes ambitieux, pensé pour ton vrai emploi du temps.",
    } as Localized,
    proofLine: {
      en: "Training, nutrition and check-ins. All in my app.",
      ar: "Training، nutrition و check-ins. كلشي فـ app ديالي.",
      fr: "Training, nutrition et check-ins. Tout dans mon app.",
    } as Localized,
    warm: {
      en: "Whether you're starting out or leveling up.",
      ar: "سواء كنتي بادي دابا ولا عندك سنين كتتمرن.",
      fr: "Que tu démarres ou que tu montes d’un cran.",
    } as Localized,
    cta: { en: "Apply for coaching", ar: "بدا الـ coaching", fr: "Postuler au coaching" } as Localized,
    ctaSecondary: { en: "See results", ar: "شوف النتائج", fr: "Voir les résultats" } as Localized,
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
        en: "You want to look and feel strong, lean, and healthy while keeping a balanced life",
        ar: "بغيتي تبان وتحس براسك قوي و lean وصحي، مع حياة متوازنة",
        fr: "Tu veux paraître et te sentir fort, sec et en santé, avec une vie équilibrée",
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
      en: "We understand your situation. Then we build around it.",
      ar: "كنفهمو وضعيتك. من بعد كنبنيو عليك.",
      fr: "On comprend ta situation. Ensuite on construit autour.",
    } as Localized,
    steps: [
      {
        num: "01",
        title: { en: "Your situation, obstacles, and goals", ar: "وضعيتك، العوائق، والأهداف", fr: "Ta situation, tes freins, tes objectifs" },
        body: {
          en: "We start by understanding where you are, what is blocking you, and what you want. Schedule, preferences, past attempts. Clear picture first.",
          ar: "كنبدو بفهم فين راك، شنو كيعرقلك، وشنو باغي توصل ليه. الـ schedule، التفضيلات، وشنو جربتي قبل. الصورة كاملة الأول.",
          fr: "On commence par comprendre où tu en es, ce qui te freine, et ce que tu veux. Agenda, préférences, essais passés. D’abord le tableau clair.",
        },
      },
      {
        num: "02",
        title: { en: "Your plan, built for your life", ar: "Plan مصاوب على حياتك", fr: "Ton plan, pensé pour ta vie" },
        body: {
          en: "Training and nutrition made for you. Loaded in my app, simple to follow, built around real life.",
          ar: "Training و nutrition مصاوبين ليك. محمّلين فـ app ديالي، ساهلين تتبعهم، ومبنيين على حياتك الحقيقية.",
          fr: "Training et nutrition faits pour toi. Dans mon app, simples à suivre, pensés pour la vraie vie.",
        },
      },
      {
        num: "03",
        title: { en: "Daily support on WhatsApp", ar: "متابعة يومية فـ WhatsApp", fr: "Suivi quotidien sur WhatsApp" },
        body: {
          en: "We talk every day. How training felt, what is hard, what needs a change. You are never left alone.",
          ar: "كنهدرو كل نهار. كيفاش داز الـ training، شنو صعيب، وشنو خاصو يتبدل. عمرك ما كتكون بوحدك.",
          fr: "On parle tous les jours. Ressenti du training, ce qui bloque, ce qu’il faut changer. Tu n’es jamais seul.",
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
      en: "Private coaching in my app. Clear training, real meals, form checks, and daily WhatsApp. One coach. One system.",
      ar: "Private coaching فـ app ديالي. Training واضح، وجبات حقيقية، مراجعة الـ form، و WhatsApp يومي. Coach واحد. System واحد.",
      fr: "Coaching privé dans mon app. Training clair, vrais repas, checks de forme, WhatsApp quotidien. Un coach. Un système.",
    } as Localized,
    includedTitle: { en: "Included", ar: "شنو داخل", fr: "Inclus" } as Localized,
    included: [
      {
        title: {
          en: "Private coaching in my app",
          ar: "Private coaching فـ app ديالي",
          fr: "Coaching privé dans mon app",
        },
        detail: {
          en: "A smooth experience in my app where we track your PRs, milestones, bodyweight, weekly photos, training volume, and muscle progress. Everything in one place.",
          ar: "تجربة سلسة فـ app ديالي كنتبعو فيها الـ PRs، الـ milestones، الوزن، الصور الأسبوعية، الـ training volume، وتقدم العضلات. كلشي فبلاصة وحدة.",
          fr: "Une expérience fluide dans mon app: on suit tes PRs, milestones, poids, photos hebdo, volume d’entraînement et progrès musculaire. Tout au même endroit.",
        },
      },
      {
        title: {
          en: "Meals built for you",
          ar: "وجبات مصاوبة ليك",
          fr: "Repas faits pour toi",
        },
        detail: {
          en: "Tailored meals with the right calories and macros for your goal. Built around your schedule, your taste, and real variety so eating stays enjoyable.",
          ar: "وجبات مخصصة بـ calories و macros على قد هدفك. على حساب وقتك، ذوقك، وتنويع باش الماكلة تبقا متعة ماشي عذاب.",
          fr: "Repas sur mesure avec calories et macros adaptés à ton objectif. Pensés pour ton agenda, tes goûts, avec de la variété pour que manger reste agréable.",
        },
      },
      {
        title: {
          en: "Video demos and form checks",
          ar: "فيديوهات التمارين ومراجعة الـ form",
          fr: "Démos vidéo et checks de forme",
        },
        detail: {
          en: "Every program includes my exercise video demos. I also check your form with you so you train safely and get stronger faster.",
          ar: "كل program فيه فيديوهات التمارين ديالي. وكنراجع معاك الـ form باش تدرّب بسلامة وتولي أقوى بسرعة.",
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
          ar: "كنهدرو كل نهار. أسئلة، عوائق، نجاحات. كتصيفط ليا، كنجاوب، وكمشيو للقدّام بجوج.",
          fr: "On parle tous les jours. Questions, freins, avancées. Tu m’écris, je réponds, et on avance ensemble.",
        },
      },
      {
        title: {
          en: "Direct access to me",
          ar: "Direct access ليا",
          fr: "Accès direct à moi",
        },
        detail: {
          en: "No bots. No assistants. You work with me directly.",
          ar: "ماشي bots. ماشي assistants. كتخدم معايا مباشرة.",
          fr: "Pas de bots. Pas d’assistants. Tu travailles directement avec moi.",
        },
      },
    ],
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
      en: "Start lighter. Build the hybrid body on your own schedule, then level up to coaching when you are ready.",
      ar: "بدا بأخف. بني الـ hybrid body على وقتك، ومن بعد طلع للـ coaching ملي تكون واجد.",
      fr: "Commence plus léger. Construis le physique hybride à ton rythme, puis passe au coaching quand tu es prêt.",
    } as Localized,
    languagesNote: {
      en: "The Hybrid Training Program is available in Arabic and English.",
      ar: "الـ Hybrid Training Program متوفر بالعربية و بالإنجليزية.",
      fr: "Le Hybrid Training Program est disponible en arabe et en anglais.",
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
        shortTitle: {
          en: "HYBRID TRAINING PROGRAM",
          ar: "HYBRID TRAINING PROGRAM",
          fr: "HYBRID TRAINING PROGRAM",
        },
        title: {
          en: "Hybrid Training Program",
          ar: "Hybrid Training Program",
          fr: "Hybrid Training Program",
        },
        level: { en: "All levels", ar: "جميع المستويات", fr: "Tous niveaux" },
        duration: { en: "3 / 4 / 5 days", ar: "3 / 4 / 5 أيام", fr: "3 / 4 / 5 jours" },
        languages: {
          en: "Available in Arabic & English",
          ar: "متوفر بالعربية و الإنجليزية",
          fr: "Disponible en arabe & anglais",
        },
        body: {
          en: "The hybrid body: stronger, bigger where it counts, lean and athletic. Without living only for the gym.",
          ar: "الـ hybrid body: أقوى، حجم فالبلايص اللي كتبان، lean و athletic. بلا ما تعيش غير للصالة.",
          fr: "Le physique hybride: plus fort, plus de muscle où ça compte, sec et athletic. Sans vivre que pour la salle.",
        },
        price: { en: "$19.99", ar: "$19.99", fr: "19,99 $" },
        compareAt: { en: "$29.99", ar: "$29.99", fr: "29,99 $" },
        cta: {
          en: "Get the Hybrid Training Program",
          ar: "خود الـ Hybrid Training Program",
          fr: "Prendre le Hybrid Training Program",
        },
        details: {
          en: "This is a guide to the hybrid approach: how to build strength, size, and lean muscle by mixing bodybuilding and calisthenics, strength and endurance. Inside you get 3 full training programs (3, 4, or 5 days per week). Pick the one that matches your week and start building the physique. Available in Arabic and English.",
          ar: "هاد Guide كيشح ليك الـ hybrid approach: كيفاش تبني القوة، الحجم، و lean muscle بالمزج بين bodybuilding و calisthenics، القوة و endurance. داخل كاين 3 programs كاملين (3، 4، ولا 5 أيام فالسيمانة). اختار اللي كيناسب أسبوعك وبدا تبني الجسم. متوفر بالعربية و الإنجليزية.",
          fr: "Un guide de l’approche hybride: comment construire force, volume et muscle sec en mélangeant musculation et calisthenics, force et endurance. Dedans: 3 programmes complets (3, 4 ou 5 jours/semaine). Choisis celui qui colle à ta semaine et construis le physique. Disponible en arabe et en anglais.",
        },
        bullets: [
          { en: "A hybrid physique: strength, size, and lean muscle mass", ar: "Hybrid physique: قوة، حجم، و lean muscle mass", fr: "Physique hybride: force, volume et masse musculaire sèche" },
          { en: "Look athletic. Strong in the gym and with your own bodyweight", ar: "شكل athletic. قوي فالصالة ومع وزن جسمك", fr: "Look athletic. Fort en salle et au poids de corps" },
          { en: "3 complete programs: 3, 4, or 5 days, based on your availability", ar: "3 programs كاملين: 3، 4، ولا 5 أيام، على حساب الوقت ديالك", fr: "3 programmes complets: 3, 4 ou 5 jours, selon ta dispo" },
          { en: "Available in Arabic and English", ar: "متوفر بالعربية و الإنجليزية", fr: "Disponible en arabe et en anglais" },
          { en: "Bodybuilding + calisthenics. Strength + endurance. One system.", ar: "Bodybuilding + calisthenics. قوة + endurance. System واحد.", fr: "Musculation + calisthenics. Force + endurance. Un seul système." },
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
          en: "The plan is built around the hours you actually have. Short, focused sessions that fit real life. If you can train a few times a week, we have a path.",
          ar: "الـ plan كيتبنى على الوقت اللي عندك فعلاً. Sessions قصيرة ومركزة كتناسب الحياة الحقيقية. إلا كنتي قادر تدرّب غير شي مرات فالسيمانة، نقدروا نبنيو على هاد الأساس.",
          fr: "Le plan est construit sur les heures que tu as vraiment. Séances courtes et ciblées qui tiennent dans la vraie vie. Si tu peux t’entraîner quelques fois par semaine, on a un chemin.",
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
