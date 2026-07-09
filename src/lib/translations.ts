export type Language = 'en' | 'ar' | 'fr';

export const translations = {
  // Header & Navigation
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

  // Hero Section (Refined Digestible Design)
  hero: {
    headline1: { en: "BUILD THE", ar: "ابني", fr: "BATISSEZ LE" },
    headline2: { en: "HYBRID PHYSIQUE", ar: "Hybrid Physique", fr: "PHYSIQUE HYBRIDE" },
    emotionalHook: { en: "SIZE • STRENGTH • FAT LOSS • VITALITY", ar: "حجم • قوة • دهون • حيوية", fr: "VOLUME • FORCE • GRAS • VITALITÉ" },
    headline3: { en: "", ar: "", fr: "" },
    promise: { en: "", ar: "", fr: "" },
    cta: { en: "DM ME 'COACHING'", ar: "راسلني 'COACHING'", fr: "DM MOI 'COACHING'" },
    ctaSubtext: { en: "I RESPOND PERSONALLY WITHIN 24H.", ar: "كنجاوب راسي قل من 24 ساعة.", fr: "JE RÉPONDS PERSONNELLEMENT SOUS 24H." },
    scroll: { en: "EXPLORE THE METHOD", ar: "اكتشف النظام", fr: "DÉCOUVRIR LA MÉTHODE" },
    browsePrograms: { en: "EXPLORE PROGRAMS", ar: "اكتشف البرامج", fr: "VOIR LES PROGRAMMES" },
    stats: {
      clients: { en: "100+", ar: "100+", fr: "100+" },
      clientsLabel: { en: "TRANSFORMATIONS", ar: "تحول جذري", fr: "TRANSFORMATIONS" },
      followers: { en: "600K+", ar: "+600K", fr: "+600K" },
      followersLabel: { en: "FOLLOWERS", ar: "متابع", fr: "ABONNÉS" },
      years: { en: "8+", ar: "8+", fr: "8+" },
      yearsLabel: { en: "YEARS EXP", ar: "سنوات خبرة", fr: "ANS D'EXP" },
    },
  },
  // About Section
  about: {
    title1: { en: "WHO I", ar: "شكون", fr: "QUI SUIS" },
    title2: { en: "AM", ar: "أنا", fr: "-JE" },
    intro: { en: "I'm Mehdi — hybrid coach, 600K+ audience, Morocco.", ar: "أنا المهدي — كوتش Hybrid، +600K متابع.", fr: "Je suis Mehdi — coach hybride, 600K+ audience." },
    name: { en: "Mehdi", ar: "المهدي", fr: "Mehdi" },
    followers: { en: "followers", ar: "متابع", fr: "abonnés" },
    description1: { en: "", ar: "", fr: "" },
    description2: {
      en: "Calisthenics × bodybuilding. No shortcuts. Just the work.",
      ar: "كاليستينيكس × بوديبيلدينغ. بلا تخربيق.",
      fr: "Calisthenics × musculation. Pas de raccourcis."
    },
    description3: { en: "", ar: "", fr: "" },
    clients: { en: "200+", ar: "200+", fr: "200+" },
    clientsLabel: { en: "clients coached", ar: "عميل", fr: "clients coachés" },
    naturalLabel: { en: "100% natural", ar: "100% طبيعي", fr: "100% naturel" },
    description4: { en: "", ar: "", fr: "" },
    description5: { en: "Your turn.", ar: "دورك.", fr: "À ton tour." },
    you: { en: "", ar: "", fr: "" },
  },

  // Coaching Section
  coaching: {
    title1: { en: "1-ON-1", ar: "تدريب شخصي", fr: "COACHING" },
    title2: { en: "ONLINE COACHING", ar: "أونلاين", fr: "EN LIGNE 1-ON-1" },
    subtitle: { en: "", ar: "", fr: "" },
    whatYouGet: { en: "THE METHOD", ar: "النظام", fr: "LA MÉTHODE" },
    features: {
      training: {
        title: { en: "Training", ar: "التدريب", fr: "Entraînement" },
        points: [
          { en: "Custom weekly plan", ar: "برنامج أسبوعي مخصص", fr: "Plan hebdo sur mesure" },
          { en: "Video form checks", ar: "تصحيح التيكنيك بالفيديو", fr: "Corrections vidéo" },
          { en: "Log every lift", ar: "تتبع كل رفع", fr: "Suivi de chaque série" },
          { en: "New targets weekly", ar: "أهداف جديدة كل أسبوع", fr: "Nouveaux objectifs" }
        ]
      },
      nutrition: {
        title: { en: "Nutrition", ar: "التغذية", fr: "Nutrition" },
        points: [
          { en: "Macros for your goal", ar: "ماكروز حسب هدفك", fr: "Macros selon objectif" },
          { en: "Swap meals anytime", ar: "بدّل الوجبات متى بغيتي", fr: "Repas interchangeables" },
          { en: "Prep guides + photos", ar: "تحضير + صور", fr: "Guides + photos" },
          { en: "Weekly macro tweaks", ar: "تعديل أسبوعي", fr: "Ajustements hebdo" }
        ]
      },
      support: {
        title: { en: "Support", ar: "المتابعة", fr: "Support" },
        points: [
          { en: "Daily WhatsApp check-ins", ar: "متابعة يومية واتساب", fr: "Check-ins WhatsApp" },
          { en: "Message me anytime", ar: "راسلني أي وقت", fr: "Écris-moi quand tu veux" },
          { en: "Direct coach access", ar: "وصول مباشر للكوتش", fr: "Accès direct coach" }
        ]
      }
    },
    whoIsFor: { en: "FOR YOU IF", ar: "لك إذا", fr: "POUR TOI SI" },
    whoIsForItems: [
      { en: "You're serious", ar: "أنت جاد", fr: "Tu es sérieux" },
      { en: "You want a coach", ar: "بغيتي كوتش", fr: "Tu veux un coach" },
      { en: "You'll do the work", ar: "غادي تخدم", fr: "Tu feras le travail" }
    ],
    investment: { en: "INVESTMENT:", ar: "الاستثمار:", fr: "INVESTISSEMENT :" },
    perMonth: { en: "/month", ar: "/شهر", fr: "/mois" },
    commitment: { en: "(12-week minimum commitment = $600 total)", ar: "(التزام 12 أسبوع = 600$ إجمالي)", fr: "(Engagement min. 12 semaines = 600$ total)" },
    paymentPlans: { en: "Payment plans available. Limited spots to ensure quality.", ar: "خطط دفع متاحة. أماكن محدودة لضمان الجودة.", fr: "Facilités de paiement disponibles. Places limitées pour la qualité." },
    messageMe: { en: "DM ME 'COACHING'", ar: "راسلني 'COACHING'", fr: "DM MOI 'COACHING'" },
    dmInstructions: { en: "DM me on Instagram:", ar: "راسلني على انستغرام:", fr: "DM sur Instagram :" },
    dmItem1: { en: "Your goal", ar: "هدفك", fr: "Ton objectif" },
    dmItem2: { en: "Your experience", ar: "خبرتك", fr: "Ton expérience" },
    dmItem3: { en: "When you start", ar: "متى تبدا", fr: "Quand tu commences" },
    dmResponse: { en: "I respond personally to every message.", ar: "أرد شخصياً على كل رسالة بنفسي.", fr: "Je réponds personnellement à chaque message." },
    affordabilityMessage: { en: "Tighter budget?", ar: "ميزانية محدودة؟", fr: "Budget serré ?" },
    checkProducts: { en: "See Blueprint", ar: "شوف الدليل", fr: "Voir le guide" },
    affordabilityDesc: { en: "", ar: "", fr: "" },
  },

  // Transformations Section
  transformations: {
    title1: { en: "REAL", ar: "نتائج", fr: "RÉSULTATS" },
    title2: { en: "RESULTS", ar: "حقيقية", fr: "RÉELS" },
    subtitle: { en: "Drag to compare.", ar: "اسحب للمقارنة.", fr: "Glissez pour comparer." },
    before: { en: "BEFORE", ar: "قبل", fr: "AVANT" },
    after: { en: "AFTER", ar: "بعد", fr: "APRÈS" },
    testimonials: [
      {
        name: { en: "ALEX", ar: "يوسف", fr: "ALEX" },
        quote: { en: "I gained 10lbs of muscle while learning to muscle-up. The hybrid approach is a game changer.", ar: "زدت 5 كيلو ديال العضلات وتعلمت الماصل-أب. هاد المنهجية دـ Hybrid بدلات ليا كلشي.", fr: "J'ai pris 5kg de muscle tout en apprenant le muscle-up. L'approche hybride change tout." },
      },
      {
        name: { en: "SARAH", ar: "سارة", fr: "SARAH" },
        quote: { en: "Finally a program that balances strength and aesthetics. Best shape of my life.", ar: "أخيراً لقيت برنامج كيجمع بين القوة والشكل. أحسن فورمة وصلت ليها فحياتي.", fr: "Enfin un programme qui équilibre force et esthétique. La meilleure forme de ma vie." },
      },
      {
        name: { en: "MOHAMED", ar: "محمد", fr: "MOHAMED" },
        quote: { en: "From skinny to shredded power. The nutrition guide made it simple.", ar: "من ضعيف لواحد صحيح ومفصل. دليل التغذية سهل عليا كلشي.", fr: "De maigre à puissant et sec. Le guide nutritionnel a tout simplifié." },
      },
      {
        name: { en: "KARIM", ar: "كريم", fr: "KARIM" },
        quote: { en: "My squat went up 40kg and I got my first front lever. Unbelievable.", ar: "السكوات ديالي زادت بـ 40 كيلو وجبت أول فرونت ليفر. شي حاجة خيالية.", fr: "Mon squat a augmenté de 40kg et j'ai eu mon premier front lever. Incroyable." },
      },
      {
        name: { en: "OMAR", ar: "عمر", fr: "OMAR" },
        quote: { en: "Training used to be boring. Now I look forward to every session.", ar: "لانترينمان كان ممل. دابا كنستنى كل حصة بفارغ الصبر.", fr: "L'entraînement était ennuyeux. Maintenant j'ai hâte à chaque séance." },
      },
      {
        name: { en: "ADAM", ar: "أدم", fr: "ADAM" },
        quote: { en: "The hybrid blueprint literally changed my life. Strength and aesthetics at the same time.", ar: "هاد السيستيم بدل ليا حياتي. القوة والشكل فنفس الوقت.", fr: "Le blueprint hybride a littéralement changé ma vie. Force et esthétique en même temps." }
      },
      {
        name: { en: "HAJAR", ar: "هاجر", fr: "HAJAR" },
        quote: { en: "Lost 8kg and got stronger than ever. The meal plans are delicious.", ar: "نقصت 8 كيلو وكبرت القوة ديالي. لبلانات دـ الماكلة بنان.", fr: "Perdu 8kg et plus forte que jamais. Les plans repas sont délicieux." }
      },
      {
        name: { en: "YASSINE", ar: "ياسين", fr: "YASSINE" },
        quote: { en: "Increased my bench by 20kg. Unbeatable results.", ar: "زدت 20 كيلو فالبنش برس. نتائج خيالية.", fr: "Augmenté mon bench de 20kg. Résultats imbattables." }
      },
      {
        name: { en: "LEILA", ar: "ليلى", fr: "LEILA" },
        quote: { en: "The community and support are amazing. I finally feel confident.", ar: "المجتمع والدعم ناضيين. أخيراً وليت كتحس بالثقة.", fr: "La communauté et le soutien sont incroyables. Je me sens enfin confiante." }
      },
      {
        name: { en: "DRISS", ar: "إدريس", fr: "DRISS" },
        quote: { en: "From Zero to Hero. Best investment in myself.", ar: "من الزيرو للقمة. أحسن حاجة درتها لراسي.", fr: "De Zéro à Héros. Meilleur investissement sur moi-même." }
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

  // FAQ Section
  faq: {
    title1: { en: "FREQUENTLY ASKED", ar: "الأسئلة", fr: "QUESTIONS" },
    title2: { en: "QUESTIONS", ar: "الشائعة", fr: "FRÉQUENTES" },
    cta: { en: "DM ME 'COACHING'", ar: "راسلني 'COACHING'", fr: "DM MOI 'COACHING'" },
    items: [
      {
        question: { en: "How does online coaching work?", ar: "كيفاش كيخدم هاد التدريب أونلاين؟", fr: "Comment fonctionne le coaching en ligne ?" },
        answer: {
          en: "DM me. I send a form, build your plan, payment, then we work on WhatsApp.",
          ar: "صيفط ليا DM. نصيفط فورم، نبني البرنامج، الدفع، وكنخدمو واتساب.",
          fr: "DM moi. Formulaire, plan, paiement, puis WhatsApp."
        }
      },
      {
        question: { en: "Do I need a gym?", ar: "واش غيخصني ضروري لاصال؟", fr: "Ai-je besoin d'une salle de sport ?" },
        answer: {
          en: "Gym is best. Home works with a bar and basics.",
          ar: "الأحسن لاصال. الدار ممكن مع بار.",
          fr: "Salle idéale. Maison possible avec barre."
        }
      },
      {
        question: { en: "What if I'm a beginner?", ar: "شنو إلا كنت يلاه بادئ (مبتدئ)؟", fr: "Et si je suis débutant ?" },
        answer: {
          en: "Good. Your plan matches your level.",
          ar: "مزيان. البرنامج على قدك.",
          fr: "Parfait. Plan adapté à ton niveau."
        }
      },
      {
        question: { en: "Can I see results in 12 weeks?", ar: "واش نقدر نشوف نتائج فـ 12 سيمانة؟", fr: "Puis-je voir des résultats en 12 semaines ?" },
        answer: {
          en: "Yes — if you follow the plan.",
          ar: "أه — إلا تبعت البرنامج.",
          fr: "Oui — si tu suis le plan."
        }
      },
      {
        question: { en: "What if I travel or miss workouts?", ar: "إلا سافرت ولا فتوني حصص شنو غاندير؟", fr: "Et si je voyage ou rate des séances ?" },
        answer: {
          en: "I adjust. Consistency beats perfection.",
          ar: "كنعدّل. الاستمرارية أهم.",
          fr: "J'ajuste. La régularité compte."
        }
      },
      {
        question: { en: "Payment plans?", ar: "ليبلانات دـ الخلاص؟", fr: "Facilités de paiement ?" },
        answer: {
          en: "Yes. DM me to discuss.",
          ar: "أه. صيفط ليا.",
          fr: "Oui. DM pour en parler."
        }
      }
    ]
  },

  // Products Section (Lead Magnet & Blueprint)
  products: {
    title1: { en: "START THE", ar: "ابدأ", fr: "COMMENCEZ" },
    title2: { en: "JOURNEY", ar: "الرحلة", fr: "L'AVENTURE" },
    subtitle: { en: "High-value tools for the serious hybrid athlete.", ar: "أدوات ناضية للرياضي الـ Hybrid.", fr: "Des outils de haute valeur pour l'athlète hybride sérieux." },
    free: { en: "STRATEGIC LEAD MAGNET", ar: "فابور", fr: "LEAD MAGNET STRATÉGIQUE" },
    freeTitle: { en: "THE HYBRID SPLIT IDENTIFIER", ar: "أداة تحديد الـ Split المناسب ليك", fr: "L'IDENTIFICATEUR DE SPLIT HYBRIDE" },
    freeDescription: { en: "A tool that helps you find the best split based on your schedule and goals etc.", ar: "أداة كاتعاونك تلقى أحسن Split على حساب وقتك وأهدافك.", fr: "Un outil pour trouver le meilleur split selon ton emploi du temps et tes objectifs." },
    freeButton: { en: "Get Free Access", ar: "خودها فابور", fr: "Accès Gratuit" },
    joinWaitlist: { en: "GET FREE ACCESS", ar: "صيفط ليا الأداة", fr: "ACCÈS GRATUIT" },
    comingSoon: { en: "COMING SOON", ar: "قريباً", fr: "BIENTÔT" },
    paidTitle: { en: "THE COMPLETE HYBRID BLUEPRINT", ar: "الدليل الشامل للـ HYBRID", fr: "LE BLUEPRINT HYBRIDE COMPLET" },
    paidDescription: { en: "More than a program. A complete guide combining calisthenics & bodybuilding, with 4 meal plans, progressive overload, and tracking tools.", ar: "كتر من مجرد برنامج. دليل شامل كيجمع بين Calisthenics و Bodybuilding، فيه 4 ديال لبلانات د الماكلة، وتتبع للأحمال التدريبية.", fr: "Plus qu'un programme. Un guide complet combinant Calisthenics & Bodybuilding, avec 4 plans repas, surcharge progressive et outils de suivi." },
    includes: { en: "What's Inside (The Guide):", ar: "شنو كاين لداخل (الدليل):", fr: "Ce qui est inclus (Le Guide) :" },
    features: [
      { en: "Complete Hybrid Guide (Calisthenics x Bodybuilding explained)", ar: "دليل Hybrid شامل (شرح Calisthenics x Bodybuilding)", fr: "Guide Hybride Complet (Calisthenics x Bodybuilding expliqués)" },
      { en: "8-Week Progressive Training Program", ar: "برنامج تدريبي تصاعدي ديال 8 سيمانات", fr: "Programme d'entraînement progressif de 8 semaines" },
      { en: "4 Meal Plans (Fat Loss, Recomp, Lean Bulk, Bulk)", ar: "4 أنظمة غذائية (Fat Loss, Recomp, Lean Bulk, Bulk)", fr: "4 Plans Repas (Fat Loss, Recomp, Lean Bulk, Bulk)" },
      { en: "Underground Training Codes & Secrets", ar: "أسرار و Underground Training Codes", fr: "Secrets et Underground Training Codes" },
      { en: "Workout Tracker & Performance Copy", ar: "Workout Tracker & Performance Copy", fr: "Workout Tracker & Performance Copy" }
    ],
    paidButton: { en: "Start Solo - $20", ar: "ابدأ بوحدك - 20$", fr: "Commencer Solo - 20$" },
    originalPrice: { en: "$25", ar: "25$", fr: "25$" },
    limitedTime: { en: "LIMITED TIME PRICE", ar: "تمن لفترة محدودة", fr: "PRIX LIMITÉ" },
    discountText: { en: "INSTANT DOWNLOAD", ar: "تيليشارجي دابا", fr: "TÉLÉCHARGEMENT INSTANTANÉ" },
  },

  // Final CTA Section
  finalCta: {
    title1: { en: "READY TO", ar: "مستعد", fr: "PRÊT À" },
    title2: { en: "START?", ar: "تبدا؟", fr: "COMMENCER ?" },
    line1: { en: "", ar: "", fr: "" },
    line2: { en: "", ar: "", fr: "" },
    line3: { en: "", ar: "", fr: "" },
    weeksFrom: { en: "In 12 weeks:", ar: "فـ 12 سيمانة:", fr: "Dans 12 semaines :" },
    benefits: [
      { en: "Leaner or heavier — your call", ar: "أخف أو أثقل — حسب هدفك", fr: "Plus sec ou plus lourd" },
      { en: "Stronger on every lift", ar: "أقوى فكل تمرين", fr: "Plus fort partout" },
      { en: "Clear training + nutrition", ar: "تدريب وتغذية واضحة", fr: "Training + nutrition clairs" },
      { en: "A body you're proud of", ar: "جسم تفتخر بيه", fr: "Un corps dont tu es fier" }
    ],
    alternative: { en: "", ar: "", fr: "" },
    choice: { en: "", ar: "", fr: "" },
    cta: { en: "DM ME 'COACHING'", ar: "صيفط ليا 'COACHING'", fr: "DM MOI 'COACHING'" },
    dmText: { en: "DM me", ar: "صيفط ليا", fr: "DM moi" },
    coaching: { en: "'COACHING'", ar: "'COACHING'", fr: "'COACHING'" },
    onInstagram: { en: "on Instagram.", ar: "فـ انستغرام.", fr: "sur Instagram." },
    letsGo: { en: "", ar: "", fr: "" },
  },

  // Footer
  footer: {
    title1: { en: "FOLLOW FOR", ar: "تابعني على", fr: "SUIVRE POUR" },
    title2: { en: "FREE CONTENT", ar: "محتوى فابور", fr: "CONTENU GRATUIT" },
    questions: { en: "Questions? DM me anytime.", ar: "أسئلة؟ صيفط ليا فـ أي وقت.", fr: "Questions ? DM à tout moment." },
    rights: { en: "All Rights Reserved", ar: "جميع الحقوق محفوظة", fr: "Tous droits réservés" },
  },

  // Free Tools Section
  tools: {
    title1: { en: "FREE", ar: "أدوات", fr: "OUTILS" },
    title2: { en: "RESOURCES", ar: "مجانية", fr: "GRATUITS" },
    subtitle: { en: "Professional tools to optimize your performance. No charge.", ar: "أدوات احترافية لتحسين الأداء ديالك. فابور.", fr: "Outils professionnels pour optimiser votre performance. Gratuit." },
    orm: {
      title: { en: "1RM Calculator", ar: "حاسبة الـ 1RM", fr: "Calculateur 1RM" },
      purpose: {
        en: "Calculate the maximum weight you can lift for one rep to determine your true strength standard.",
        ar: "احسب أقصى وزن تقدر تهزو لمرة وحدة باش تعرف القوة الحقيقية ديالك.",
        fr: "Calculez la charge maximale pour une reps pour déterminer votre vraie force."
      },
      desc: { en: "Enter your 10 rep max to estimate your one-rep max.", ar: "دخل أقصى وزن كدير بيه 10 التكرارات.", fr: "Entrez votre max sur 10 reps pour estimer votre 1RM." },
      exerciseLabel: { en: "Exercise", ar: "التمرين", fr: "Exercice" },
      exercises: {
        benchPress: { en: "Barbell Bench Press", ar: "ضغط بار صدر", fr: "Développé Couché" },
        weightedDips: { en: "Weighted Dips", ar: "متوازي بوزن", fr: "Dips Lestés" },
        weightedPullups: { en: "Weighted Pull-ups", ar: "عقلة بوزن", fr: "Tractions Lestées" },
        squat: { en: "Squat", ar: "سكوات", fr: "Squat" },
        deadlift: { en: "Deadlift", ar: "ديدلفت", fr: "Soulevé de Terre" },
        zBarCurls: { en: "Z-Bar Curls", ar: "باي زد بار", fr: "Curl Barre Z" },
      },
      weightLabel: { en: "10 Rep Max Weight", ar: "وزن 10 تكرارات", fr: "Poids de 10 RM" },
      bodyweightLabel: { en: "Bodyweight", ar: "وزن الجسم", fr: "Poids de corps" },
      calculate: { en: "Calculate 1RM", ar: "احسب الأقصى", fr: "Calculer 1RM" },
      resultLabel: { en: "Your Estimated 1RM:", ar: "الـ 1RM التقديري:", fr: "Votre 1RM Estimé :" },
      trainingZones: { en: "Training Zones", ar: "مناطق التدريب", fr: "Zones d'Entraînement" },
      zoneStrength: { en: "Pure Strength (90%)", ar: "قوة قصوى (90%)", fr: "Force Pure (90%)" },
      zoneHypertrophy: { en: "Hypertrophy (75-85%)", ar: "بناء عضلي (75-85%)", fr: "Hypertrophie (75-85%)" },
      zoneEndurance: { en: "Endurance (60%)", ar: "تحمل (60%)", fr: "Endurance (60%)" },
    },
    splitFinder: {
      title: { en: "Split Finder", ar: "مكتشف الـ Split", fr: "Trouveur de Split" },
      desc: { en: "Find the perfect workout split based on your weekly frequency.", ar: "لقى نظام التدريب المثالي على حساب شحال من نهار غاتترينى.", fr: "Trouvez le split parfait selon votre fréquence d'entraînement." },
      button: { en: "Launch Finder", ar: "بدا البحث", fr: "Lancer" },
    }
  },

  // Sticky Button (DM Focus)
  sticky: {
    apply: { en: "DM ME 'COACHING'", ar: "صيفط ليا 'COACHING'", fr: "DM MOI 'COACHING'" },
  },

  // Email Capture Modal
  modal: {
    title: { en: "JOIN THE 1%", ar: "انضم للـ 1%", fr: "REJOIGNEZ LE 1%" },
    subtitle: { en: "Get the free guide and exclusive tips delivered to your inbox.", ar: "خود الدليل الفابور ونصائح حصرية فـ إيميل ديالك.", fr: "Recevez le guide gratuit et des conseils exclusifs." },
    nameLabel: { en: "First Name", ar: "الاسم الأول", fr: "Prénom" },
    emailLabel: { en: "Email Address", ar: "البريد الإلكتروني", fr: "Email" },
    submit: { en: "SEND ME THE FREE TOOL", ar: "صيفط ليا الأداة", fr: "ENVOYEZ-MOI L'OUTIL" },
    submitting: { en: "JOINING...", ar: "جاري الانضمام...", fr: "EN COURS..." },
    successTitle: { en: "YOU'RE ON THE LIST!", ar: "تم التسجيل!", fr: "VOUS ÊTES INSCRI(E) !" },
    successDesc: { en: "Check your inbox — your Hybrid Split Identifier is on its way.", ar: "شوف الإيميل ديالك — الأداة فالطريق.", fr: "Vérifiez votre boîte — l'outil est en route." },
    privacy: { en: "No spam. Unsubscribe anytime.", ar: "بلا بريد مزعج. تقدر تلغي فـ أي وقت.", fr: "Pas de spam. Désabonnement à tout moment." },
  },

  // Paid Product Info Modal
  paidProductModal: {
    title: { en: "THE COMPLETE HYBRID BLUEPRINT", ar: "الدليل الشامل للـ HYBRID", fr: "LE BLUEPRINT HYBRIDE COMPLET" },
    subtitle: { en: "The ultimate guide to mastering calisthenics & bodybuilding.", ar: "الدليل النهائي لاحتراف Calisthenics و Bodybuilding.", fr: "Le guide ultime pour maîtriser Calisthenics & Bodybuilding." },
    oneTimePayment: { en: "ONE-TIME PAYMENT", ar: "خلص مرة وحدة وتهنا", fr: "PAIEMENT UNIQUE" },
    whatYouGet: { en: "WHAT YOU GET (THE FULL GUIDE):", ar: "شنو غاتستافد (الدليل الكامل):", fr: "CE QUE VOUS RECEVEZ (GUIDE COMPLET) :" },
    features: [
      { en: "8-Week Progressive Hybrid Training Program", ar: "برنامج تدريبي هجين متكامل لمدة 8 سيمانات", fr: "Programme d'entraînement hybride progressif de 8 semaines" },
      { en: "4 Customizable Meal Plans (Fat Loss, Clean Bulk, etc)", ar: "4 أنظمة غذائية مخصصة (Fat Loss, Clean Bulk, etc)", fr: "4 Plans Repas Personnalisables (Fat Loss, Clean Bulk, etc)" },
      { en: "Complete Workout Tracker & Performance Copy", ar: "Complete Workout Tracker & Performance Copy", fr: "Complete Workout Tracker & Performance Copy" },
      { en: "Underground Codes of the Game Explained", ar: "شرح Underground Codes of the Game", fr: "Underground Codes of the Game expliqués" },
      { en: "Exercise Library with Video Demonstrations", ar: "مكتبة فيها فيديوهات كتشرح كل تمرين", fr: "Bibliothèque d'exercices avec démos vidéo" },
      { en: "Lifetime Access - No Subscription", ar: "البرنامج ديالك مدى الحياة، بلا اشتراك شهري", fr: "Accès à vie - Pas d'abonnement" }
    ],
    howToUse: { en: "HOW TO USE:", ar: "كيفاش تخدم بيه:", fr: "COMMENT L'UTILISER :" },
    howToUseDesc: { en: "This is more than a PDF. It's a complete 8-week mentorship in a document. You get the full 8-week training cycle, 4 distinct meal plans to choose from based on your goal, and the exact methods I use to build muscle and strength simultaneously.", ar: "هادا كبر من مجرد PDF. هادا بحال تدريب كامل لمدة 8 سيمانات فملف. عندك دورة تدريبية كاملة، 4 د الأنظمة د الماكلة تختار بيناتهم، والطرق الضبطة اللي كنخدم بيها باش نبني العضلات والقوة دقة وحدة.", fr: "C'est plus qu'un PDF. C'est un mentorat complet de 8 semaines dans un document. Vous avez le cycle complet d'entraînement, 4 plans repas au choix selon votre objectif, et les méthodes exactes que j'utilise." },
    paymentMethodsTitle: { en: "ACCEPTED PAYMENT METHODS:", ar: "طرق الدفع المقبولة:", fr: "MÉTHODES DE PAIEMENT :" },
    methods: {
      bank: { en: "Bank Transfer (CIH/Bank)", ar: "تحويل بنكي (CIH/Bank)", fr: "Virement Bancaire" },
      cash: { en: "Cash Agencies (Wafacash, CashPlus...)", ar: "وكالات الكاش (Wafacash, CashPlus...)", fr: "Agences Cash (Wafacash...)" },
      intl: { en: "International (Western Union)", ar: "دولي (Western Union)", fr: "International (West. Union)" }
    },
    howToBuy: { en: "SIMPLE 3-STEP PROCESS:", ar: "3 خطوات سهلة باش تاخدو:", fr: "PROCESSUS SIMPLE EN 3 ÉTAPES :" },
    step1: { en: "Click the button below to open Instagram", ar: "كليكي على البوطونة لتحت باش تحل انستغرام", fr: "Cliquez sur le bouton ci-dessous pour ouvrir Instagram" },
    step2: { en: "Send the pre-filled message 'HYBRID BLUEPRINT'", ar: "صيفط الميساج اللي مكتوب 'HYBRID BLUEPRINT'", fr: "Envoyez le message pré-rempli 'HYBRID BLUEPRINT'" },
    step3: { en: "I'll send you the payment details for your chosen method", ar: "غانسيفط ليك معلومات الخلاص للطريقة اللي ختارتي", fr: "Je vous envoie les détails de paiement pour votre méthode" },
    step4: { en: "Send proof of payment & receive your product instantly!", ar: "صيفط وصل الخلاص وها البروكرام عندك!", fr: "Envoyez la preuve de paiement & recevez votre produit !" },
    dmButton: { en: "DM ME 'HYBRID BLUEPRINT'", ar: "صيفط ليا 'HYBRID BLUEPRINT'", fr: "DM MOI 'HYBRID BLUEPRINT'" },
    dmLinkText: { en: "HYBRID BLUEPRINT", ar: "HYBRID BLUEPRINT", fr: "HYBRID BLUEPRINT" }
  },
  // Product Teaser (Home Page)
  productTeaser: {
    title: { en: "ELITE PROGRAMS", ar: "برامج احترافية", fr: "PROGRAMMES ÉLITE" },
    subtitle: { en: "Accelerate your results with our proven systems.", ar: "سرّع النتائج ديالك بأنظمة مجربة.", fr: "Accélérez vos résultats avec nos systèmes prouvés." },
    cta: { en: "VIEW FULL GUIDE", ar: "شوف الدليل الكامل", fr: "VOIR LE GUIDE COMPLET" },
    blueprintTitle: { en: "Complete Hybrid Guide", ar: "الدليل الشامل", fr: "Guide Hybride Complet" },
    blueprintDesc: { en: "Program + Nutrition + Tracker.", ar: "برنامج + تغذية + تتبع.", fr: "Programme + Nutrition + Suivi." },
    freeTitle: { en: "Free Split Finder", ar: "مكتشف الـ Split", fr: "Trouveur de Split" },
    freeDesc: { en: "Find your frequency.", ar: "لقى الريتم ديالك.", fr: "Trouvez votre rythme." }
  },

  // Welcome gateway (first page — 3 paths)
  gateway: {
    badge: { en: "UNBREAKABLES TEAM", ar: "UNBREAKABLES TEAM", fr: "UNBREAKABLES TEAM" },
    title1: { en: "CHOOSE YOUR", ar: "اختار", fr: "CHOISISSEZ" },
    title2: { en: "PATH", ar: "مسارك", fr: "PARCOURS" },
    subtitle: { en: "", ar: "", fr: "" },
    coaching: {
      title: { en: "1-on-1 Coaching", ar: "تدريب شخصي", fr: "Coaching 1-on-1" },
      coverTag: { en: "1:1 COACHING", ar: "تدريب 1:1", fr: "COACHING 1:1" },
      desc: {
        en: "12 weeks. Fully custom.",
        ar: "12 سيمانة. مخصص بالكامل.",
        fr: "12 semaines. Sur mesure."
      },
      cta: { en: "Start Coaching", ar: "بدا", fr: "Commencer" },
      tag: { en: "01", ar: "01", fr: "01" }
    },
    blueprint: {
      title: { en: "Hybrid Blueprint", ar: "Hybrid Blueprint", fr: "Hybrid Blueprint" },
      coverTag: { en: "HYBRID PROGRAM — 8 WEEKS", ar: "برنامج HYBRID — 8 سيمانات", fr: "PROGRAMME HYBRID — 8 SEM." },
      desc: {
        en: "8-week program. Yours forever.",
        ar: "برنامج 8 سيمانات. ملكك.",
        fr: "8 semaines. À vie."
      },
      cta: { en: "Get Blueprint", ar: "خود الدليل", fr: "Obtenir" },
      tag: { en: "02", ar: "02", fr: "02" }
    },
    freeTool: {
      title: { en: "Free Hybrid Tool", ar: "أداة مجانية", fr: "Outil Gratuit" },
      coverTag: { en: "FREE TOOL", ar: "أداة مجانية", fr: "OUTIL GRATUIT" },
      desc: {
        en: "Free split finder + 1RM.",
        ar: "Split مجاني + 1RM.",
        fr: "Split gratuit + 1RM."
      },
      cta: { en: "Get Access", ar: "خودها", fr: "Accès" },
      tag: { en: "03", ar: "03", fr: "03" }
    },
    explore: { en: "Or explore the full site", ar: "أو استكشف الموقع كامل", fr: "Ou explorer tout le site" }
  },

  freeToolPage: {
    title1: { en: "FREE", ar: "أدوات", fr: "OUTILS" },
    title2: { en: "HYBRID TOOLS", ar: "مجانية", fr: "GRATUITS" },
    subtitle: {
      en: "Enter your email below. We'll send the Hybrid Split Identifier to your inbox automatically.",
      ar: "دخل الإيميل ديالك. غنسيفطو ليك أداة الـ Split أوتوماتيكياً.",
      fr: "Entrez votre email. Nous envoyons l'identificateur de split automatiquement."
    },
    sentTitle: { en: "CHECK YOUR INBOX", ar: "شوف الإيميل ديالك", fr: "VÉRIFIEZ VOTRE BOÎTE" },
    sentDesc: {
      en: "Your free tool is on its way. Use the 1RM calculator below while you wait.",
      ar: "الأداة فالطريق. استعمل حاسبة 1RM لتحت فالانتظار.",
      fr: "Votre outil est en route. Utilisez le calculateur 1RM ci-dessous."
    },
    calculatorTitle: { en: "Bonus: 1RM Calculator", ar: "بونوس: حاسبة 1RM", fr: "Bonus : Calculateur 1RM" }
  }
};

export const getTranslation = (obj: { en: string; ar: string }, lang: Language): string => {
  return obj[lang];
};

