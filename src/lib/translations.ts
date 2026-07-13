export type Language = 'en' | 'ar' | 'fr';

/**
 * Site copy. Hormozi style:
 * dream outcome clear, offer specific, proof over fluff,
 * next step obvious. No em dashes. No vague adjectives.
 */
export const translations = {
  nav: {
    about: { en: "About", ar: "من أنا", fr: "À propos" },
    coaching: { en: "Coaching", ar: "التدريب", fr: "Coaching" },
    results: { en: "Results", ar: "النتائج", fr: "Résultats" },
    faq: { en: "FAQ", ar: "الأسئلة", fr: "FAQ" },
    products: { en: "Products", ar: "المنتجات", fr: "Produits" },
    applyNow: { en: "DM ME 'COACHING'", ar: "راسلني 'COACHING'", fr: "DM MOI 'COACHING'" },
    backToHome: { en: "BACK TO START", ar: "الرجوع للبداية", fr: "RETOUR ACCUEIL" },
    back: { en: "Back", ar: "رجوع", fr: "Retour" },
    choosePath: { en: "All Paths", ar: "كل المسارات", fr: "Tous les parcours" },
  },

  hero: {
    headline1: { en: "BUILD THE", ar: "ابني", fr: "CONSTRUIS LE" },
    headline2: { en: "HYBRID PHYSIQUE", ar: "Hybrid Physique", fr: "PHYSIQUE HYBRIDE" },
    emotionalHook: { en: "SIZE · STRENGTH · FAT LOSS · VITALITY", ar: "حجم · قوة · دهون · حيوية", fr: "VOLUME · FORCE · SEC · VITALITÉ" },
    headline3: { en: "", ar: "", fr: "" },
    promise: { en: "", ar: "", fr: "" },
    cta: { en: "DM ME 'COACHING'", ar: "راسلني 'COACHING'", fr: "DM MOI 'COACHING'" },
    ctaSubtext: { en: "I REPLY MYSELF WITHIN 24H.", ar: "كنجاوب راسي قل من 24 ساعة.", fr: "JE RÉPONDS MOI-MÊME SOUS 24H." },
    scroll: { en: "SEE HOW IT WORKS", ar: "شوف كيفاش كتخدم", fr: "VOIR COMMENT ÇA MARCHE" },
    browsePrograms: { en: "SEE PROGRAMS", ar: "شوف البرامج", fr: "VOIR LES PROGRAMMES" },
    stats: {
      clients: { en: "100+", ar: "100+", fr: "100+" },
      clientsLabel: { en: "CLIENTS COACHED", ar: "عميل تابعتهم", fr: "CLIENTS COACHÉS" },
      followers: { en: "600K+", ar: "+600K", fr: "+600K" },
      followersLabel: { en: "FOLLOWERS", ar: "متابع", fr: "ABONNÉS" },
      years: { en: "8+", ar: "8+", fr: "8+" },
      yearsLabel: { en: "YEARS COACHING", ar: "سنوات تدريب", fr: "ANS DE COACHING" },
    },
  },

  about: {
    title1: { en: "WHO I", ar: "شكون", fr: "QUI SUIS" },
    title2: { en: "AM", ar: "أنا", fr: "-JE" },
    intro: {
      en: "I built my physique the hard way. Then I built a system so you don't waste years guessing.",
      ar: "بنيت جسمي بالطريقة الصعيبة. ومن بعد بنيت سيستيم باش ما تضيعش سنين فالتخمين.",
      fr: "J'ai construit mon physique à la dure. Puis un système pour que tu ne perdes pas des années à chercher.",
    },
    name: { en: "Mehdi", ar: "المهدي", fr: "Mehdi" },
    followers: { en: "followers", ar: "متابع", fr: "abonnés" },
    description1: {
      en: "8+ years coaching. 200+ clients. 600K+ people watching the process. Morocco-based. 100% natural.",
      ar: "+8 سنين كوتشينغ. +200 عميل. +600K كيتابعو العملية. من المغرب. 100% طبيعي.",
      fr: "8+ ans de coaching. 200+ clients. 600K+ qui suivent le process. Basé au Maroc. 100% naturel.",
    },
    description2: {
      en: "Most guys stall because they copy random programs. I fix that. One plan. One coach. One outcome: a hybrid physique that looks strong and performs stronger.",
      ar: "بزاف كيتوقفو حيت كينقلو برامج عشوائية. أنا كنصلّح هادشي. برنامج واحد. كوتش واحد. نتيجة وحدة: Hybrid Physique قوي فالشكل وفالأداء.",
      fr: "La plupart stagnent en copiant des programmes au hasard. Je corrige ça. Un plan. Un coach. Un résultat: un physique hybride qui a l'air fort et qui l'est.",
    },
    description3: { en: "", ar: "", fr: "" },
    clients: { en: "200+", ar: "200+", fr: "200+" },
    clientsLabel: { en: "bodies changed", ar: "أجسام تبدّلات", fr: "corps transformés" },
    naturalLabel: { en: "100% natural", ar: "100% طبيعي", fr: "100% naturel" },
    description4: { en: "", ar: "", fr: "" },
    description5: {
      en: "You bring the work. I bring the map.",
      ar: "نتا الخدمة. أنا الخريطة.",
      fr: "Toi le travail. Moi la carte.",
    },
    you: { en: "", ar: "", fr: "" },
  },

  coaching: {
    title1: { en: "1-ON-1", ar: "تدريب شخصي", fr: "COACHING" },
    title2: { en: "ONLINE COACHING", ar: "أونلاين", fr: "EN LIGNE 1-ON-1" },
    subtitle: { en: "", ar: "", fr: "" },
    whatYouGet: { en: "THE TRANSFORMATION", ar: "التحول", fr: "LA TRANSFORMATION" },
    features: {
      training: {
        title: { en: "Training", ar: "التدريب", fr: "Entraînement" },
        points: [
          { en: "Stop spinning. Every session has a job", ar: "وقف الدوران. كل حصة عندها هدف", fr: "Fini de tourner. Chaque séance a un rôle" },
          { en: "Get stronger every week you show up", ar: "ولي أقوى كل أسبوع كتحضر", fr: "Plus fort chaque semaine où tu viens" },
          { en: "Form fixed on camera before it stalls you", ar: "التكنيك كيتصحّح بالفيديو قبل ما يوقفك", fr: "Technique corrigée en vidéo avant qu'elle te bloque" },
          { en: "Hybrid size + skills in the same block", ar: "حجم Hybrid + مهارات فنفس البلوك", fr: "Volume hybride + skills dans le même bloc" }
        ]
      },
      nutrition: {
        title: { en: "Nutrition", ar: "التغذية", fr: "Nutrition" },
        points: [
          { en: "Eat for the body you want, not guilt", ar: "كول للجسم اللي بغيتي، ماشي بالذنب", fr: "Mange pour le corps voulu, pas la culpabilité" },
          { en: "Lose fat or add size without living in the kitchen", ar: "نقص دهون أو زيد حجم بلا ما تعيش فالمطبخ", fr: "Perds du gras ou prends du volume sans vivre en cuisine" },
          { en: "Swap meals. Keep results. Real life allowed", ar: "بدّل الوجبات. خلّي النتيجة. الحياة العادية مسموحة", fr: "Change les repas. Garde les résultats. Vie réelle ok" },
          { en: "Weekly tweaks when the scale lies", ar: "تعديل أسبوعي ملي الميزان كيكذب", fr: "Ajustements hebdo quand la balance ment" }
        ]
      },
      support: {
        title: { en: "Support", ar: "المتابعة", fr: "Support" },
        points: [
          { en: "You never train alone again", ar: "ما بقيتش كتدرّب بوحدك", fr: "Tu ne t'entraînes plus jamais seul" },
          { en: "Stuck at 10pm? I answer. Not a bot", ar: "علقتي فـ 10 الليل؟ كنجاوب. ماشي بوت", fr: "Bloqué à 22h? Je réponds. Pas un bot" },
          { en: "Accountability that actually changes behavior", ar: "محاسبة كتبدّل السلوك بصح", fr: "Une accountability qui change vraiment le comportement" }
        ]
      }
    },
    whoIsFor: { en: "THIS IS FOR YOU IF", ar: "لك إذا", fr: "POUR TOI SI" },
    whoIsForItems: [
      { en: "You're done collecting programs and ready to execute one", ar: "ساليتي من جمع البرامج وبغيتي تنفّذ واحد", fr: "Tu as fini de collectionner les programmes. Tu veux en exécuter un" },
      { en: "You want a body that looks expensive and performs harder", ar: "بغيتي جسم كيبان غالي وكيخدم أقوى", fr: "Tu veux un corps qui a l'air premium et qui performe plus dur" },
      { en: "You'll reply, show up, and let me steer", ar: "غادي تجاوب، تحضر، وخلّيني نوجّه", fr: "Tu réponds, tu viens, et tu me laisses piloter" }
    ],
    investment: { en: "THE OFFER", ar: "العرض", fr: "L'OFFRE" },
    priceAmount: { en: "$50", ar: "50$", fr: "50$" },
    perMonth: { en: "/month", ar: "/شهر", fr: "/mois" },
    priceAnchor: {
      en: "Most online coaches charge $150+/mo for a PDF and a group chat.",
      ar: "بزاف د الكوتشات كيخلصو +150$/شهر على PDF وغروب.",
      fr: "La plupart des coachs prennent 150$+/mois pour un PDF et un groupe."
    },
    priceValue: {
      en: "Here you get me on WhatsApp. Custom plan. Weekly adjustments.",
      ar: "هنا كتحصل عليا فواتساب. برنامج مخصص. تعديل كل أسبوع.",
      fr: "Ici tu m'as sur WhatsApp. Plan sur mesure. Ajustements hebdo."
    },
    commitment: { en: "12 weeks. $600 total.", ar: "12 سيمانة. 600$ إجمالي.", fr: "12 semaines. 600$ total." },
    paymentPlans: { en: "Payment plans available. Limited spots so I can actually coach you.", ar: "خطط دفع متاحة. أماكن محدودة باش نتابعك مزيان.", fr: "Paiement échelonné. Places limitées pour un vrai suivi." },
    bonusesTitle: { en: "STACKED IN WHEN YOU START", ar: "داخل من نهار البداية", fr: "INCLUS DÈS LE DÉPART" },
    bonuses: [
      { en: "Video form protocol so bad reps never become bad habits", ar: "بروتوكول فيديو باش التيكنيك الغالط ما يولّيش عادة", fr: "Protocole vidéo pour que les mauvaises reps ne deviennent pas des habitudes" },
      { en: "Macro setup that matches your goal in week one", ar: "ضبط ماكروز على هدفك من الأسبوع الأول", fr: "Setup macros aligné sur ton objectif dès la semaine 1" },
      { en: "Meal swap system so life doesn't break the diet", ar: "سيستيم تبديل وجبات باش الحياة ما تكسرش الريجيم", fr: "Système de swaps pour que la vie ne casse pas le plan" },
      { en: "Progress photo reviews so you see what the mirror misses", ar: "مراجعة صور التقدم باش تشوف اللي المراية كتخفيه", fr: "Revues photos pour voir ce que le miroir rate" }
    ],
    guaranteeTitle: { en: "THE GUARANTEE", ar: "الضمان", fr: "LA GARANTIE" },
    guarantee: {
      en: "",
      ar: "",
      fr: ""
    },
    messageMe: { en: "DM ME 'COACHING'", ar: "راسلني 'COACHING'", fr: "DM MOI 'COACHING'" },
    dmInstructions: { en: "Send this in your DM:", ar: "صيفط هادشي فالـ DM:", fr: "Envoie ça en DM :" },
    dmItem1: { en: "Your goal", ar: "هدفك", fr: "Ton objectif" },
    dmItem2: { en: "Your experience", ar: "خبرتك", fr: "Ton expérience" },
    dmItem3: { en: "When you can start", ar: "متى تقدر تبدا", fr: "Quand tu peux commencer" },
    dmResponse: { en: "I reply to every message myself.", ar: "كنجاوب على كل ميساج براسي.", fr: "Je réponds à chaque message moi-même." },
    affordabilityMessage: { en: "Can't do 1-on-1 yet?", ar: "مازال ما تقدّش على 1-on-1؟", fr: "Pas encore prêt pour le 1-on-1 ?" },
    checkProducts: { en: "Get the Blueprint", ar: "خود الدليل", fr: "Prendre le Blueprint" },
    affordabilityDesc: { en: "", ar: "", fr: "" },
    applyHeadline: { en: "Ready to stop guessing?", ar: "واجد توقف التخمين؟", fr: "Prêt à arrêter de deviner ?" },
  },

  transformations: {
    title1: { en: "REAL", ar: "نتائج", fr: "RÉSULTATS" },
    title2: { en: "RESULTS", ar: "حقيقية", fr: "RÉELS" },
    subtitle: { en: "Real clients. Real work.", ar: "عملاء حقيقيين. خدمة حقيقية.", fr: "Vrais clients. Vrai travail." },
    before: { en: "BEFORE", ar: "قبل", fr: "AVANT" },
    after: { en: "AFTER", ar: "بعد", fr: "APRÈS" },
    viewAll: { en: "See all results", ar: "شوف كل النتائج", fr: "Voir tous les résultats" },
    testimonials: [
      {
        name: { en: "ALEX", ar: "يوسف", fr: "ALEX" },
        quote: { en: "+10 lbs muscle. First muscle-up.", ar: "+5 كيلو عضل. أول ماصل-أب.", fr: "+5 kg muscle. Premier muscle-up." },
      },
      {
        name: { en: "SARAH", ar: "سارة", fr: "SARAH" },
        quote: { en: "Stronger and leaner. Best shape of my life.", ar: "أقوى وأخف. أحسن فورمة فحياتي.", fr: "Plus forte et sèche. Meilleure forme de ma vie." },
      },
      {
        name: { en: "MOHAMED", ar: "محمد", fr: "MOHAMED" },
        quote: { en: "Skinny to dense. Nutrition made it simple.", ar: "من ضعيف لكثيف. التغذية سهلاتها.", fr: "De maigre à dense. Nutrition simplifiée." },
      },
      {
        name: { en: "KARIM", ar: "كريم", fr: "KARIM" },
        quote: { en: "+40 kg squat. First front lever.", ar: "+40 كيلو سكوات. أول فرونت ليفر.", fr: "+40 kg squat. Premier front lever." },
      },
      {
        name: { en: "OMAR", ar: "عمر", fr: "OMAR" },
        quote: { en: "I used to skip sessions. Now I don't.", ar: "كنت كنفيّت الحصص. دابا لا.", fr: "Je ratais des séances. Plus maintenant." },
      },
      {
        name: { en: "ADAM", ar: "أدم", fr: "ADAM" },
        quote: { en: "Strength and aesthetics. Same block.", ar: "قوة وشكل. نفس البلوك.", fr: "Force et esthétique. Même bloc." }
      },
      {
        name: { en: "HAJAR", ar: "هاجر", fr: "HAJAR" },
        quote: { en: "−8 kg. Stronger than before.", ar: "−8 كيلو. أقوى من قبل.", fr: "−8 kg. Plus forte qu'avant." }
      },
      {
        name: { en: "YASSINE", ar: "ياسين", fr: "YASSINE" },
        quote: { en: "+20 kg bench.", ar: "+20 كيلو بنش.", fr: "+20 kg bench." }
      },
      {
        name: { en: "LEILA", ar: "ليلى", fr: "LEILA" },
        quote: { en: "Clear plan. I finally stuck to it.", ar: "برنامج واضح. أخيراً تبعتو.", fr: "Plan clair. J'ai enfin tenu." }
      },
      {
        name: { en: "DRISS", ar: "إدريس", fr: "DRISS" },
        quote: { en: "Best money I spent on myself.", ar: "أحسن فلوس صرفتها على راسي.", fr: "Meilleur argent dépensé sur moi." }
      },
      {
        name: { en: "MEHDI", ar: "المهدي", fr: "MEHDI" },
        quote: {
          en: "−8 kg / 16 weeks. Hybrid system.",
          ar: "−8 كيلو / 16 سيمانة.",
          fr: "−8 kg / 16 semaines."
        },
        imageBefore: "/transformation-11-before.png",
        imageAfter: "/transformation-11-after.png"
      }
    ],
    cta: { en: "DM ME 'COACHING'", ar: "راسلني 'COACHING'", fr: "DM MOI 'COACHING'" }
  },

  videoTestimonial: {
    tag: { en: "ON CAMERA", ar: "فالمشهد", fr: "À L'ÉCRAN" },
    title1: { en: "PROOF", ar: "الدليل", fr: "LA PREUVE" },
    title2: { en: "ON CAMERA", ar: "فالمشهد", fr: "EN VIDÉO" },
    subtitle: {
      en: "Watch a client explain what changed.",
      ar: "سمع عميل كيشرح شنو تبدّل.",
      fr: "Écoute un client expliquer ce qui a changé.",
    },
    play: { en: "Play testimonial", ar: "شغّل الشهادة", fr: "Lancer le témoignage" },
    close: { en: "Close", ar: "سدّ", fr: "Fermer" },
    openIg: { en: "Open on Instagram", ar: "حل فـ انستغرام", fr: "Ouvrir sur Instagram" },
    client: { en: "Client result", ar: "نتيجة عميل", fr: "Résultat client" },
  },

  faq: {
    title1: { en: "QUESTIONS", ar: "الأسئلة", fr: "QUESTIONS" },
    title2: { en: "ANSWERED", ar: "مجاوبة", fr: "RÉPONSES" },
    cta: { en: "DM ME 'COACHING'", ar: "راسلني 'COACHING'", fr: "DM MOI 'COACHING'" },
    items: [
      {
        question: { en: "How does online coaching work?", ar: "كيفاش كيخدم التدريب أونلاين؟", fr: "Comment marche le coaching en ligne ?" },
        answer: {
          en: "DM me. I send a form. I build your plan. You pay. We work on WhatsApp.",
          ar: "صيفط DM. نصيفط فورم. نبني البرنامج. خلص. وكنخدمو واتساب.",
          fr: "DM moi. Formulaire. Je construis le plan. Paiement. WhatsApp."
        }
      },
      {
        question: { en: "Do I need a gym?", ar: "واش خصني لاصال؟", fr: "Ai-je besoin d'une salle ?" },
        answer: {
          en: "Gym is best. Home works with a bar and basics.",
          ar: "الأحسن لاصال. الدار ممكن مع بار.",
          fr: "Salle idéale. Maison ok avec barre."
        }
      },
      {
        question: { en: "What if I'm a beginner?", ar: "إلا كنت مبتدئ؟", fr: "Et si je suis débutant ?" },
        answer: {
          en: "Good. Your plan matches your level from day one.",
          ar: "مزيان. البرنامج على قدك من نهار الأول.",
          fr: "Parfait. Plan adapté dès le jour 1."
        }
      },
      {
        question: { en: "Can I see results in 12 weeks?", ar: "واش نشوف نتائج فـ 12 سيمانة؟", fr: "Résultats en 12 semaines ?" },
        answer: {
          en: "Yes, if you follow the plan. Miss weeks, miss results.",
          ar: "أه، إلا تبعت البرنامج. إلا فيتي، ما كاينش نتيجة.",
          fr: "Oui si tu suis. Tu rates, tu rates les résultats."
        }
      },
      {
        question: { en: "What if I travel or miss workouts?", ar: "إلا سافرت ولا فتّيت حصص؟", fr: "Si je voyage ou rate des séances ?" },
        answer: {
          en: "I adjust the plan. Consistency beats perfection.",
          ar: "كنعدّل البرنامج. الاستمرارية أهم من الكمال.",
          fr: "J'ajuste. La régularité bat la perfection."
        }
      },
      {
        question: { en: "Payment plans?", ar: "واش كاين دفع مقسّط؟", fr: "Paiement échelonné ?" },
        answer: {
          en: "Yes. DM me and we set it up.",
          ar: "أه. صيفط ليا ونرتبوها.",
          fr: "Oui. DM moi et on règle ça."
        }
      }
    ]
  },

  products: {
    title1: { en: "PICK YOUR", ar: "اختار", fr: "CHOISIS" },
    title2: { en: "SPEED", ar: "سرعتك", fr: "TON RYTHME" },
    subtitle: { en: "Same system. Different levels of done for you.", ar: "نفس السيستيم. مستويات مختلفة من المساعدة.", fr: "Même système. Différents niveaux d'accompagnement." },
    free: { en: "FREE", ar: "فابور", fr: "GRATUIT" },
    freeTitle: { en: "HYBRID SPLIT IDENTIFIER", ar: "أداة تحديد الـ Split", fr: "IDENTIFICATEUR DE SPLIT" },
    freeDescription: { en: "Tell it your days and goal. Get the split that fits. Takes minutes.", ar: "دخل أيامك وهدفك. لقى الـ Split المناسب. دقائق.", fr: "Dis tes jours et ton objectif. Reçois le split. En minutes." },
    freeButton: { en: "Get Free Access", ar: "خودها فابور", fr: "Accès Gratuit" },
    joinWaitlist: { en: "OPEN FREE TOOL", ar: "حل الأداة", fr: "OUVRIR L'OUTIL" },
    comingSoon: { en: "COMING SOON", ar: "قريباً", fr: "BIENTÔT" },
    paidTitle: { en: "HYBRID BLUEPRINT", ar: "Hybrid Blueprint", fr: "HYBRID BLUEPRINT" },
    paidDescription: { en: "8 weeks of training. 4 meal plans. Tracker. Pay once. Keep forever.", ar: "8 سيمانات تدريب. 4 بلانات ماكلة. تراكر. خلص مرة. بقا عندك.", fr: "8 semaines. 4 plans repas. Tracker. Paye une fois. À toi pour toujours." },
    includes: { en: "What's inside:", ar: "شنو كاين:", fr: "Ce qu'il y a :" },
    features: [
      { en: "Hybrid guide: calisthenics x bodybuilding", ar: "دليل Hybrid: Calisthenics x Bodybuilding", fr: "Guide: calisthenics x musculation" },
      { en: "8-week progressive program", ar: "برنامج 8 سيمانات تصاعدي", fr: "Programme progressif 8 semaines" },
      { en: "4 meal plans by goal", ar: "4 أنظمة غذائية حسب الهدف", fr: "4 plans repas selon objectif" },
      { en: "Rules I actually use", ar: "القواعد اللي كنخدم بيها", fr: "Les règles que j'utilise" },
      { en: "Workout tracker included", ar: "تراكر التمارين داخل", fr: "Tracker inclus" }
    ],
    freeBullets: [
      { en: "Split matched to your schedule", ar: "Split على حساب وقتك", fr: "Split selon ton emploi du temps" },
      { en: "Starter hybrid routine", ar: "روتين Hybrid للبداية", fr: "Routine hybride de départ" },
      { en: "Basic macro targets", ar: "أهداف ماكروز أساسية", fr: "Cibles macros de base" }
    ],
    freeProof: { en: "Real hybrid results", ar: "نتائج حقيقية", fr: "Vrais résultats hybrides" },
    freeAccessNote: { en: "Instant access. No email required.", ar: "ولوج فوري. بلا إيميل.", fr: "Accès instantané. Sans email." },
    paidButton: { en: "Get Blueprint $20", ar: "خود الدليل 20$", fr: "Blueprint 20$" },
    originalPrice: { en: "$25", ar: "25$", fr: "25$" },
    limitedTime: { en: "INTRO PRICE", ar: "تمن أول", fr: "PRIX INTRO" },
    discountText: { en: "INSTANT ACCESS", ar: "ولوج فوري", fr: "ACCÈS INSTANTANÉ" },
  },

  finalCta: {
    title1: { en: "WANT THE", ar: "بغيتي", fr: "TU VEUX LE" },
    title2: { en: "RESULT?", ar: "النتيجة؟", fr: "RÉSULTAT ?" },
    line1: { en: "", ar: "", fr: "" },
    line2: { en: "", ar: "", fr: "" },
    line3: { en: "", ar: "", fr: "" },
    weeksFrom: { en: "In 12 weeks:", ar: "فـ 12 سيمانة:", fr: "Dans 12 semaines :" },
    benefits: [
      { en: "Leaner or heavier, your call", ar: "أخف أو أثقل، حسب هدفك", fr: "Plus sec ou plus lourd" },
      { en: "Stronger on every lift", ar: "أقوى فكل تمرين", fr: "Plus fort partout" },
      { en: "Clear training and nutrition", ar: "تدريب وتغذية واضحة", fr: "Training et nutrition clairs" },
      { en: "A body you actually like", ar: "جسم عاجبك بصح", fr: "Un corps que tu aimes" }
    ],
    guarantee: {
      en: "",
      ar: "",
      fr: ""
    },
    spots: {
      en: "Limited spots. I coach a small roster on purpose.",
      ar: "أماكن محدودة. كنخدم مع عدد قليل عمداً.",
      fr: "Places limitées. Petit roster, exprès."
    },
    alternative: { en: "", ar: "", fr: "" },
    choice: { en: "", ar: "", fr: "" },
    cta: { en: "DM ME 'COACHING'", ar: "صيفط ليا 'COACHING'", fr: "DM MOI 'COACHING'" },
    dmText: { en: "DM me", ar: "صيفط ليا", fr: "DM moi" },
    coaching: { en: "'COACHING'", ar: "'COACHING'", fr: "'COACHING'" },
    onInstagram: { en: "on Instagram.", ar: "فـ انستغرام.", fr: "sur Instagram." },
    letsGo: { en: "", ar: "", fr: "" },
  },

  footer: {
    title1: { en: "FOLLOW FOR", ar: "تابعني على", fr: "SUIS POUR" },
    title2: { en: "FREE CONTENT", ar: "محتوى فابور", fr: "DU GRATUIT" },
    questions: { en: "Questions? DM me anytime.", ar: "أسئلة؟ صيفط ليا أي وقت.", fr: "Questions ? DM à tout moment." },
    rights: { en: "All Rights Reserved", ar: "جميع الحقوق محفوظة", fr: "Tous droits réservés" },
  },

  tools: {
    title1: { en: "FREE", ar: "أدوات", fr: "OUTILS" },
    title2: { en: "TOOLS", ar: "مجانية", fr: "GRATUITS" },
    subtitle: { en: "Use them. No charge.", ar: "خدم بيهم. بلا فلوس.", fr: "Utilise-les. Gratuit." },
    orm: {
      title: { en: "1RM Calculator", ar: "حاسبة الـ 1RM", fr: "Calculateur 1RM" },
      purpose: {
        en: "Enter your 10RM. Get your estimated 1RM and training zones.",
        ar: "دخل 10RM. جيب 1RM والمناطق ديال التدريب.",
        fr: "Entre ton 10RM. Reçois 1RM et zones d'entraînement."
      },
      desc: { en: "Type your 10 rep max. Result updates live.", ar: "كتب أقصى وزن فـ 10 تكرارات. النتيجة فورية.", fr: "Entre ton max sur 10 reps. Résultat en direct." },
      exerciseLabel: { en: "Exercise", ar: "التمرين", fr: "Exercice" },
      exercises: {
        benchPress: { en: "Barbell Bench Press", ar: "ضغط بار صدر", fr: "Développé Couché" },
        weightedDips: { en: "Weighted Dips", ar: "متوازي بوزن", fr: "Dips Lestés" },
        weightedPullups: { en: "Weighted Pull-ups", ar: "عقلة بوزن", fr: "Tractions Lestées" },
        squat: { en: "Squat", ar: "سكوات", fr: "Squat" },
        deadlift: { en: "Deadlift", ar: "ديدلفت", fr: "Soulevé de Terre" },
        zBarCurls: { en: "Z-Bar Curls", ar: "باي زد بار", fr: "Curl Barre Z" },
      },
      weightLabel: { en: "10 Rep Max (KG)", ar: "وزن 10 تكرارات", fr: "Poids de 10 RM" },
      bodyweightLabel: { en: "Bodyweight (KG)", ar: "وزن الجسم", fr: "Poids de corps" },
      calculate: { en: "Calculate 1RM", ar: "احسب الأقصى", fr: "Calculer 1RM" },
      resultLabel: { en: "Estimated 1RM", ar: "الـ 1RM التقديري", fr: "1RM estimé" },
      trainingZones: { en: "Training Zones", ar: "مناطق التدريب", fr: "Zones d'entraînement" },
      zoneStrength: { en: "Strength (90%)", ar: "قوة (90%)", fr: "Force (90%)" },
      zoneHypertrophy: { en: "Hypertrophy (80%)", ar: "حجم (80%)", fr: "Hypertrophie (80%)" },
      zoneEndurance: { en: "Endurance (60%)", ar: "تحمل (60%)", fr: "Endurance (60%)" },
    },
    splitFinder: {
      title: { en: "Split Finder", ar: "مكتشف الـ Split", fr: "Trouveur de Split" },
      desc: { en: "Match a split to how many days you train.", ar: "لقى Split حسب شحال من نهار كترينى.", fr: "Trouve un split selon tes jours d'entraînement." },
      button: { en: "Open Finder", ar: "حل الأداة", fr: "Ouvrir" },
    }
  },

  sticky: {
    apply: { en: "DM ME 'COACHING'", ar: "صيفط ليا 'COACHING'", fr: "DM MOI 'COACHING'" },
  },

  modal: {
    title: { en: "GET THE FREE TOOL", ar: "خود الأداة فابور", fr: "OUTIL GRATUIT" },
    subtitle: { en: "Drop your email. Get the Split Identifier.", ar: "دخل الإيميل. جيب أداة الـ Split.", fr: "Laisse ton email. Reçois le Split Identifier." },
    nameLabel: { en: "First Name", ar: "الاسم", fr: "Prénom" },
    emailLabel: { en: "Email", ar: "الإيميل", fr: "Email" },
    submit: { en: "SEND THE TOOL", ar: "صيفط الأداة", fr: "ENVOYER L'OUTIL" },
    submitting: { en: "SENDING...", ar: "كيسيفط...", fr: "ENVOI..." },
    successTitle: { en: "CHECK YOUR INBOX", ar: "شوف الإيميل", fr: "VÉRIFIE TA BOÎTE" },
    successDesc: { en: "Check your inbox. Your Hybrid Split Identifier is coming.", ar: "شوف الإيميل. الأداة فالطريق.", fr: "Vérifie ta boîte. L'outil arrive." },
    privacy: { en: "No spam. Unsubscribe anytime.", ar: "بلا سبام. تقدر تلغي أي وقت.", fr: "Pas de spam. Désabo quand tu veux." },
  },

  paidProductModal: {
    title: { en: "HYBRID BLUEPRINT", ar: "Hybrid Blueprint", fr: "HYBRID BLUEPRINT" },
    subtitle: { en: "The full hybrid system in one product. Pay once.", ar: "السيستيم Hybrid كامل فمنتوج واحد. خلص مرة.", fr: "Le système hybride complet. Paye une fois." },
    oneTimePayment: { en: "ONE-TIME PAYMENT", ar: "خلص مرة وحدة", fr: "PAIEMENT UNIQUE" },
    whatYouGet: { en: "WHAT YOU GET:", ar: "شنو غاتاخد:", fr: "CE QUE TU REÇOIS :" },
    features: [
      { en: "8-week progressive hybrid program", ar: "برنامج Hybrid 8 سيمانات", fr: "Programme hybride 8 semaines" },
      { en: "4 meal plans by goal", ar: "4 أنظمة غذائية حسب الهدف", fr: "4 plans repas selon objectif" },
      { en: "Workout tracker", ar: "تراكر التمارين", fr: "Tracker d'entraînement" },
      { en: "Rules I use with clients", ar: "القواعد اللي كنخدم بيها مع العملاء", fr: "Règles que j'utilise avec mes clients" },
      { en: "Exercise demos", ar: "فيديوهات التمارين", fr: "Démos d'exercices" },
      { en: "Lifetime access. No subscription.", ar: "ولوج مدى الحياة. بلا اشتراك.", fr: "Accès à vie. Pas d'abonnement." }
    ],
    howToUse: { en: "HOW TO USE IT:", ar: "كيفاش تخدم بيه:", fr: "COMMENT L'UTILISER :" },
    howToUseDesc: { en: "Follow the 8-week cycle. Pick the meal plan for your goal. Track every session. Update loads when the plan says so.", ar: "تبع دورة 8 سيمانات. اختار بلان الماكلة على حساب هدفك. سجّل كل حصة. زيد الأوزان ملي يقول البرنامج.", fr: "Suis le cycle 8 semaines. Choisis le plan repas selon ton objectif. Note chaque séance. Monte les charges quand le plan le dit." },
    paymentMethodsTitle: { en: "PAYMENT METHODS:", ar: "طرق الدفع:", fr: "PAIEMENT :" },
    methods: {
      bank: { en: "Bank Transfer (CIH/Bank)", ar: "تحويل بنكي (CIH/Bank)", fr: "Virement bancaire" },
      cash: { en: "Cash agencies (Wafacash, CashPlus)", ar: "وكالات الكاش (Wafacash, CashPlus)", fr: "Agences cash (Wafacash...)" },
      intl: { en: "International (Western Union)", ar: "دولي (Western Union)", fr: "International (Western Union)" }
    },
    howToBuy: { en: "3 STEPS:", ar: "3 خطوات:", fr: "3 ÉTAPES :" },
    step1: { en: "Tap below to open Instagram", ar: "كليكي لتحت باش تحل انستغرام", fr: "Clique pour ouvrir Instagram" },
    step2: { en: "Send the message 'HYBRID BLUEPRINT'", ar: "صيفط 'HYBRID BLUEPRINT'", fr: "Envoie 'HYBRID BLUEPRINT'" },
    step3: { en: "I send payment details for your method", ar: "نصيفط ليك معلومات الخلاص", fr: "Je t'envoie les infos de paiement" },
    step4: { en: "Send proof. Get the product the same day.", ar: "صيفط الوصل. جيب البرودوي نهار نتاعو.", fr: "Envoie la preuve. Reçois le produit le jour même." },
    dmButton: { en: "DM ME 'HYBRID BLUEPRINT'", ar: "صيفط ليا 'HYBRID BLUEPRINT'", fr: "DM MOI 'HYBRID BLUEPRINT'" },
    dmLinkText: { en: "HYBRID BLUEPRINT", ar: "HYBRID BLUEPRINT", fr: "HYBRID BLUEPRINT" }
  },

  productTeaser: {
    title: { en: "GO FASTER SOLO", ar: "سرّع بوحدك", fr: "AVANCE SEUL" },
    subtitle: { en: "Same method. You run it without me.", ar: "نفس الطريقة. نتا اللي كتخدم بيها.", fr: "Même méthode. Tu l'appliques sans moi." },
    cta: { en: "SEE THE BLUEPRINT", ar: "شوف الدليل", fr: "VOIR LE BLUEPRINT" },
    blueprintTitle: { en: "Hybrid Blueprint", ar: "Hybrid Blueprint", fr: "Hybrid Blueprint" },
    blueprintDesc: { en: "Program + meals + tracker. $20.", ar: "برنامج + ماكلة + تراكر. 20$.", fr: "Programme + repas + tracker. 20$." },
    freeTitle: { en: "Free Split Finder", ar: "مكتشف الـ Split", fr: "Trouveur de Split" },
    freeDesc: { en: "Know your weekly split.", ar: "عرف الـ Split ديالك.", fr: "Trouve ton split hebdo." }
  },

  gateway: {
    badge: { en: "UNBREAKABLES TEAM", ar: "UNBREAKABLES TEAM", fr: "UNBREAKABLES TEAM" },
    title1: { en: "CHOOSE YOUR", ar: "اختار", fr: "CHOISIS" },
    title2: { en: "PATH", ar: "مسارك", fr: "PARCOURS" },
    subtitle: { en: "", ar: "", fr: "" },
    coaching: {
      title: { en: "1-on-1 Coaching", ar: "تدريب شخصي", fr: "Coaching 1-on-1" },
      coverTag: { en: "1:1 COACHING", ar: "تدريب 1:1", fr: "COACHING 1:1" },
      desc: {
        en: "I build it. You execute. 12 weeks.",
        ar: "أنا اللي نبني. نتا اللي تخدّم. 12 سيمانة.",
        fr: "Je construis. Tu exécutes. 12 semaines."
      },
      cta: { en: "Apply Now", ar: "قدّم دابا", fr: "Postuler" },
      tag: { en: "01", ar: "01", fr: "01" }
    },
    blueprint: {
      title: { en: "Hybrid Blueprint", ar: "Hybrid Blueprint", fr: "Hybrid Blueprint" },
      coverTag: { en: "HYBRID PROGRAM 8 WEEKS", ar: "برنامج HYBRID 8 سيمانات", fr: "PROGRAMME HYBRID 8 SEM." },
      desc: {
        en: "Full system. Pay once. Keep forever.",
        ar: "السيستيم كامل. خلص مرة. بقا عندك.",
        fr: "Système complet. Paye une fois. À vie."
      },
      cta: { en: "Buy Blueprint", ar: "شري الدليل", fr: "Acheter" },
      tag: { en: "02", ar: "02", fr: "02" }
    },
    freeTool: {
      title: { en: "Free Hybrid Tool", ar: "أداة مجانية", fr: "Outil Gratuit" },
      coverTag: { en: "FREE TOOL", ar: "أداة مجانية", fr: "OUTIL GRATUIT" },
      desc: {
        en: "Split finder + 1RM. Zero cost.",
        ar: "Split + 1RM. بلا فلوس.",
        fr: "Split + 1RM. Gratuit."
      },
      cta: { en: "Start Free", ar: "بدا فابور", fr: "Commencer" },
      tag: { en: "03", ar: "03", fr: "03" }
    },
    explore: { en: "Or see the full site", ar: "أو شوف الموقع كامل", fr: "Ou voir tout le site" }
  },

  freeToolPage: {
    title1: { en: "FREE", ar: "أدوات", fr: "OUTILS" },
    title2: { en: "HYBRID TOOLS", ar: "مجانية", fr: "GRATUITS" },
    subtitle: {
      en: "Drop your email. Get the Split Identifier in your inbox.",
      ar: "دخل الإيميل. جيب أداة الـ Split فالبوكس.",
      fr: "Laisse ton email. Reçois le Split Identifier."
    },
    sentTitle: { en: "CHECK YOUR INBOX", ar: "شوف الإيميل ديالك", fr: "VÉRIFIE TA BOÎTE" },
    sentDesc: {
      en: "Tool is coming. Use the 1RM calculator below while you wait.",
      ar: "الأداة فالطريق. استعمل حاسبة 1RM لتحت.",
      fr: "L'outil arrive. Utilise le 1RM ci-dessous."
    },
    calculatorTitle: { en: "Bonus: 1RM Calculator", ar: "بونوس: حاسبة 1RM", fr: "Bonus : Calculateur 1RM" }
  },

  languageModal: {
    title1: { en: "CHOOSE YOUR", ar: "اختار", fr: "CHOISIS TA" },
    title2: { en: "LANGUAGE", ar: "اللغة", fr: "LANGUE" },
    subtitle: { en: "Pick a language to continue.", ar: "اختار اللغة باش تكمل.", fr: "Choisis une langue pour continuer." },
  },

  notFound: {
    title: { en: "PAGE NOT FOUND", ar: "الصفحة ما كايناش", fr: "PAGE INTROUVABLE" },
    cta: { en: "Back to start", ar: "رجع للبداية", fr: "Retour à l'accueil" },
  },
};

export const getTranslation = (obj: { en: string; ar: string }, lang: Language): string => {
  return obj[lang];
};
