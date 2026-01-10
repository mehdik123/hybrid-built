export type Language = 'en' | 'ar';

export const translations = {
  // Header & Navigation
  nav: {
    about: { en: "About", ar: "من أنا" },
    coaching: { en: "Coaching", ar: "التدريب" },
    results: { en: "Results", ar: "النتائج" },
    faq: { en: "FAQ", ar: "الأسئلة" },
    products: { en: "Products", ar: "المنتجات" },
    applyNow: { en: "DM ME 'HYBRID'", ar: "راسلني 'HYBRID'" },
    backToHome: { en: "BACK TO HOME", ar: "الرجوع للرئيسية" },
  },

  // Hero Section (Refined Digestible Design)
  hero: {
    headline1: { en: "BUILD THE", ar: "ابني الـ" },
    headline2: { en: "HYBRID PHYSIQUE", ar: "Hybrid Physique" },
    emotionalHook: { en: "SIZE • STRENGTH • FAT LOSS • TOTAL VITALITY", ar: "الحجم • القوة • حرق الدهون • حيوية تامة" },
    headline3: { en: "BECOME A COMPLETE ATHLETE", ar: "ولي رياضي متكامل" },
    promise: { en: "Master size and strength, shed body fat, and elevate your overall health with the Hybrid Method.", ar: "تحكم فـ الحجم والقوة، حيد الدهون، وحسن صحتك كاملة بنظام الـ Hybrid." },
    cta: { en: "DM ME 'HYBRID' TO START", ar: "صيفط ليا 'HYBRID' باش تبدا" },
    ctaSubtext: { en: "I RESPOND PERSONALLY WITHIN 24H.", ar: "كنجاوب راسي قل من 24 ساعة." },
    scroll: { en: "EXPLORE THE METHOD", ar: "اكتشف النظام" },
    browsePrograms: { en: "EXPLORE PROGRAMS", ar: "اكتشف البرامج" },
    stats: {
      clients: { en: "100+", ar: "100+" },
      clientsLabel: { en: "TRANSFORMATIONS", ar: "تحول جذري" },
      followers: { en: "600K+", ar: "+600K" },
      followersLabel: { en: "FOLLOWERS", ar: "متابع" },
      years: { en: "10+", ar: "10+" },
      yearsLabel: { en: "YEARS EXP", ar: "سنوات خبرة" },
    },
  },
  // About Section
  about: {
    title1: { en: "WHO I", ar: "شكون" },
    title2: { en: "AM", ar: "أنا" },
    intro: { en: "I'm", ar: "أنا" },
    name: { en: "Mehdi", ar: "المهدي" },
    followers: { en: "followers", ar: "متابع" },
    description1: {
      en: ". I've built one of the elite natural physiques in Morocco, with a community of over",
      ar: ". بنيت وحدة من أحسن الفورمات الطبيعية فالمغرب، مع مجتمع فيه كتر من"
    },
    description2: {
      en: "I built my physique naturally by combining calisthenics and bodybuilding—no steroids, no shortcuts, just smart training.",
      ar: "بنيت الفورمة ديالي طبيعي بـالجمع بين الكاليستينيكس والبوديبيلدينغ — بلا منشطات، بلا تخربيق، غي ترينمان ذكي."
    },
    description3: {
      en: "I've helped",
      ar: "عاونت كتر من"
    },
    clients: { en: "200+ people worldwide", ar: "200 واحد فالعالم كامل" },
    description4: {
      en: "achieve elite-level transformations using the same unbreakable system.",
      ar: "باش يوصلو لهاد التحولات الناضية باستعمال نفس النظام."
    },
    description5: {
      en: "Now, I want to help",
      ar: "ودابا باغيك نعاونك"
    },
    you: { en: "you", ar: "نتا" },
  },

  // Coaching Section
  coaching: {
    title1: { en: "1-ON-1", ar: "تدريب شخصي" },
    title2: { en: "ONLINE COACHING", ar: "أونلاين" },
    subtitle: { en: "If you're truly serious and interested in transforming your body 180°, you're in the right place.", ar: "إلا كنتي فعلاً جاد ومهتم باش تبدل الجسم ديالك 180°، راك فالبلاصة الصحيحة." },
    whatYouGet: { en: "WHAT YOU GET:", ar: "ماذا ستحصل:" },
    features: {
      training: {
        title: { en: "🔹 Training", ar: "🔹 التدريب" },
        points: [
          { en: "Personalized program based on: weak points, timing, goal, and your level", ar: "برنامج مخصص على حساب: نقط الضعف، التوقيت، الهدف، والمستوى ديالك" },
          { en: "Everything with my exercise videos", ar: "كولشي بالفيديوهات ديالي د التمارين" },
          { en: "Track sets, reps, weights, and training volume", ar: "متابعة الـ sets، reps، الأوزان، والـ volume training" },
          { en: "Weekly updates with new goals to achieve", ar: "تحديث كل سيمانة، كانوجدو فيه أهداف جداد خاصك توصل ليهم" }
        ]
      },
      nutrition: {
        title: { en: "🔹 Nutrition", ar: "🔹 التغذية" },
        points: [
          { en: "Multiple meal versions so you don't get bored", ar: "بزاف د الإصدارات د الوجبات باش ما يجيكش الملل" },
          { en: "Calories & macros calculated based on your goal", ar: "السعرات والماكروز محسوبين على حساب الهدف ديالك" },
          { en: "Photos and instructions on how to prepare each meal", ar: "تصاور وتعليمات كيفاش توجد كل وجبة" },
          { en: "Choose how many meals you want per day, and what you don't eat", ar: "تقدر تختار شحال من وجبة بغيتي فالنهار، وحتى شنو ما كاتاكلش" },
          { en: "Weekly adaptation based on your progress", ar: "تكييف كل سيمانة على حساب التطور ديالك" }
        ]
      },
      support: {
        title: { en: "🔹 WhatsApp Support", ar: "🔹 متابعة واتساب" },
        points: [
          { en: "Daily check-ins, motivation and accountability", ar: "متابعة يومية، تحفيز ومسؤولية" },
          { en: "Message me anytime, we stay together as one team", ar: "تقدر تصيفط ليا فأي وقت، وكانبقاو أنا ونتا فريق واحد" },
          { en: "Direct 1-on-1 support throughout your journey", ar: "دعم مباشر معايا طوال الرحلة ديالك" }
        ]
      }
    },
    whoIsFor: { en: "WHO THIS IS FOR:", ar: "لمن هذا البرنامج:" },
    whoIsForItems: [
      { en: "You're serious (no tire-kickers)", ar: "أنت جاد (لا مضيعة للوقت)" },
      { en: "You want expert guidance (not YouTube advice)", ar: "تريد توجيه خبير (ليس نصائح يوتيوب)" },
      { en: "You're ready to invest in yourself", ar: "مستعد للاستثمار في نفسك" }
    ],
    investment: { en: "INVESTMENT:", ar: "الاستثمار:" },
    perMonth: { en: "/month", ar: "/شهر" },
    commitment: { en: "(12-week minimum commitment = $600 total)", ar: "(التزام 12 أسبوع = 600$ إجمالي)" },
    paymentPlans: { en: "Payment plans available. Limited spots to ensure quality.", ar: "خطط دفع متاحة. أماكن محدودة لضمان الجودة." },
    messageMe: { en: "DM ME 'COACHING'", ar: "راسلني 'COACHING'" },
    dmInstructions: { en: "DM me on Instagram to see if you qualify:", ar: "راسلني على انستغرام لنرى إذا كنت مؤهلاً:" },
    dmItem1: { en: "Tell me your goal (Muscle, Fat Loss, Strength)", ar: "أخبرني بهدفك (عضلات، دهون، قوة)" },
    dmItem2: { en: "Tell me your experience level", ar: "أخبرني بمستوى خبرتك" },
    dmItem3: { en: "Tell me when you are ready to start", ar: "أخبرني متى ستكون مستعداً للبدء" },
    dmResponse: { en: "I respond personally to every message.", ar: "أرد شخصياً على كل رسالة بنفسي." },
    affordabilityMessage: { en: "Can't afford online coaching right now?", ar: "ما قادرش على التدريب أونلاين دابا؟" },
    checkProducts: { en: "Check out our products", ar: "شوف المنتجات ديالنا" },
    affordabilityDesc: { en: "for a more budget-friendly option to get started.", ar: "باش تلقى خيار أرخص وتبدا." },
  },

  // Transformations Section
  transformations: {
    title1: { en: "REAL", ar: "نتائج" },
    title2: { en: "RESULTS", ar: "حقيقية" },
    subtitle: { en: "Join the ranks of the Unbreakables.", ar: "نضم لصفوف الـ Unbreakables." },
    before: { en: "BEFORE", ar: "قبل" },
    after: { en: "AFTER", ar: "بعد" },
    testimonials: [
      {
        name: { en: "ALEX", ar: "يوسف" },
        quote: { en: "I gained 10lbs of muscle while learning to muscle-up. The hybrid approach is a game changer.", ar: "زدت 5 كيلو ديال العضلات وتعلمت الماصل-أب. هاد المنهجية دـ Hybrid بدلات ليا كلشي." },
      },
      {
        name: { en: "SARAH", ar: "سارة" },
        quote: { en: "Finally a program that balances strength and aesthetics. Best shape of my life.", ar: "أخيراً لقيت برنامج كيجمع بين القوة والشكل. أحسن فورمة وصلت ليها فحياتي." },
      },
      {
        name: { en: "MOHAMED", ar: "محمد" },
        quote: { en: "From skinny to shredded power. The nutrition guide made it simple.", ar: "من ضعيف لواحد صحيح ومفصل. دليل التغذية سهل عليا كلشي." },
      },
      {
        name: { en: "KARIM", ar: "كريم" },
        quote: { en: "My squat went up 40kg and I got my first front lever. Unbelievable.", ar: "السكوات ديالي زادت بـ 40 كيلو وجبت أول فرونت ليفر. شي حاجة خيالية." },
      },
      {
        name: { en: "OMAR", ar: "عمر" },
        quote: { en: "Training used to be boring. Now I look forward to every session.", ar: "لانترينمان كان ممل. دابا كنستنى كل حصة بفارغ الصبر." },
      },
      {
        name: { en: "ADAM", ar: "أدم" },
        quote: { en: "The hybrid blueprint literally changed my life. Strength and aesthetics at the same time.", ar: "هاد السيستيم بدل ليا حياتي. القوة والشكل فنفس الوقت." }
      },
      {
        name: { en: "HAJAR", ar: "هاجر" },
        quote: { en: "Lost 8kg and got stronger than ever. The meal plans are delicious.", ar: "نقصت 8 كيلو وكبرت القوة ديالي. لبلانات دـ الماكلة بنان." }
      },
      {
        name: { en: "YASSINE", ar: "ياسين" },
        quote: { en: "Increased my bench by 20kg. Unbeatable results.", ar: "زدت 20 كيلو فالبنش برس. نتائج خيالية." }
      },
      {
        name: { en: "LEILA", ar: "ليلى" },
        quote: { en: "The community and support are amazing. I finally feel confident.", ar: "المجتمع والدعم ناضيين. أخيراً وليت كتحس بالثقة." }
      },
      {
        name: { en: "DRISS", ar: "إدريس" },
        quote: { en: "From Zero to Hero. Best investment in myself.", ar: "من الزيرو للقمة. أحسن حاجة درتها لراسي." }
      }
    ],
    cta: { en: "BECOME THE NEXT SUCCESS STORY", ar: "كون نتا قصة النجاح الجاية" }
  },

  // FAQ Section
  faq: {
    title1: { en: "FREQUENTLY ASKED", ar: "الأسئلة" },
    title2: { en: "QUESTIONS", ar: "الشائعة" },
    cta: { en: "DM ME 'HYBRID'", ar: "راسلني 'HYBRID'" },
    items: [
      {
        question: { en: "How does online coaching work?", ar: "كيفاش كيخدم هاد التدريب أونلاين؟" },
        answer: {
          en: "We communicate through Instagram or WhatsApp. You get a custom plan, check in weekly with progress updates, and I adjust everything based on your results. It's like having me in your pocket 24/7.",
          ar: "كنتواصلو فـ انستغرام ولا واتساب. كاتاخد برنامج مخصص، متابعة أسبوعية، وكنبدل كاع لبلان على حساب النتائج ديالك. بحال إلا أنا معاك 24/7."
        }
      },
      {
        question: { en: "Do I need a gym?", ar: "واش غيخصني ضروري لاصال؟" },
        answer: {
          en: "Ideally yes, but I can work with home setups (pull-up bar, dip station, minimal equipment). Tell me what you have and I'll build around it.",
          ar: "من الأحسن أه، ولكن نقدر نخدمو حتى فـ الدار إلا عندك شوية دـ الماترييل (بار فيكس، ديب ستيشن). كولي ليا شنو عندك ونقدو عليه لبلان."
        }
      },
      {
        question: { en: "What if I'm a beginner?", ar: "شنو إلا كنت يلاه بادئ (مبتدئ)؟" },
        answer: {
          en: "Perfect. I work with all levels—beginners to advanced. Your program will be tailored to YOUR experience.",
          ar: "هادي هي أحسن وقتاش تبدا. كنخدم مع كاع المستويات. لبلان غايكون على قدك ونتا كتعلم."
        }
      },
      {
        question: { en: "Can I see results in 12 weeks?", ar: "واش نقدر نشوف نتائج فـ 12 سيمانة؟" },
        answer: {
          en: "Yes, if you follow the plan. Most clients see significant changes in 8-12 weeks (visible muscle, fat loss, strength gains).",
          ar: "أه، إلا تبعتي لبلان كيفما هو. أغلبية كيشوفو فرق كبير فـ 8 لـ 12 سيمانة (عضلات باينة، نقص فالشحمة، وقوة كتر)."
        }
      },
      {
        question: { en: "What if I travel or miss workouts?", ar: "إلا سافرت ولا فتوني حصص شنو غاندير؟" },
        answer: {
          en: "Life happens. I adjust your plan when needed. The goal is consistency over perfection.",
          ar: "هانية، حنا للي كنتحكمو فـ لبلان. المهم هو الاستمرارية ماشي الكمال."
        }
      },
      {
        question: { en: "Payment plans?", ar: "ليبلانات دـ الخلاص؟" },
        answer: {
          en: "Yes, message me and we'll work it out.",
          ar: "أه، صيفط ليا ميساج ونتفاهمو."
        }
      },
      {
        question: { en: "How many clients do you take?", ar: "شحال د الناس كاتقبل؟" },
        answer: {
          en: "Limited spots (5-10 per month) to give everyone quality attention. If spots are full, I'll add you to the waitlist.",
          ar: "بلايص محدودين (5-10 فالشهر) باش نعطي لكل واحد وقتو. إلا كانت الدنيا عامرة، كانديرك فـ قائمة الانتظار."
        }
      }
    ]
  },

  // Products Section (Lead Magnet & Blueprint)
  products: {
    title1: { en: "START THE", ar: "ابدأ" },
    title2: { en: "JOURNEY", ar: "الرحلة" },
    subtitle: { en: "High-value tools for the serious hybrid athlete.", ar: "أدوات ناضية للرياضي الـ Hybrid." },
    free: { en: "STRATEGIC LEAD MAGNET", ar: "فابور" },
    freeTitle: { en: "THE HYBRID SPLIT IDENTIFIER", ar: "أداة تحديد الـ Split المناسب ليك" },
    freeDescription: { en: "A tool that helps you find the best split based on your schedule and goals etc.", ar: "أداة كاتعاونك تلقى أحسن Split على حساب وقتك وأهدافك." },
    freeButton: { en: "Get Free Access", ar: "خودها فابور" },
    joinWaitlist: { en: "GET FREE ACCESS", ar: "صيفط ليا الأداة" },
    comingSoon: { en: "COMING SOON", ar: "قريباً" },
    paidTitle: { en: "THE 8-WEEK HYBRID BLUEPRINT", ar: "الـ Blueprint ديال 8 سيمانات" },
    paidDescription: { en: "Complete system for those who want to start solo. Every workout, every meal, no guessing.", ar: "نظام متكامل للي باغي يبدا بوحدو. كل تمرين، كل وجبة، بلا كثرة التفكير." },
    includes: { en: "What's Inside:", ar: "شنو كاين لداخل:" },
    features: [
      { en: "Progressive Hybrid Training Program", ar: "برنامج تدريبي Hybrid غادي وكيصعاب" },
      { en: "Full Nutrition & Macro System", ar: "نظام غذائي كامل وحساب الماكروز" },
      { en: "4 Meal Plan Options", ar: "4  ديال لبلانات دـ الماكلة" },
      { en: "Exercise Library Access", ar: "مكتبة الفيديوهات ديال التمارين" }
    ],
    paidButton: { en: "Start Solo - $20", ar: "ابدأ بوحدك - 20$" },
    originalPrice: { en: "$25", ar: "25$" },
    limitedTime: { en: "LIMITED TIME PRICE", ar: "تمن لفترة محدودة" },
    discountText: { en: "INSTANT DOWNLOAD", ar: "تيليشارجي دابا" },
  },

  // Final CTA Section
  finalCta: {
    title1: { en: "READY TO", ar: "مستعد" },
    title2: { en: "TRANSFORM", ar: "للتحول" },
    line1: { en: "You've seen the results.", ar: "ديجا شفتي النتائج." },
    line2: { en: "You know what you'll get.", ar: "وعارف دابا شنو غاتاخد." },
    line3: { en: "Now it's time to decide.", ar: "دابا جا وقت القرار." },
    weeksFrom: { en: "12 weeks from now, you could be:", ar: "من هنا لـ 12 سيمانة، تقدر تكون:" },
    benefits: [
      { en: "10-20 lbs leaner or heavier (depending on goal)", ar: "ديجا نقصتي أو زدتي 5-10 كيلو (على حساب هدفك)" },
      { en: "Significantly stronger (PRs on all lifts)", ar: "وليتي صحيح كتر (أرقام خيالية فكل التمارين)" },
      { en: "Confident in your training and nutrition", ar: "واثق فـ ترينمان والماكلة ديالك" },
      { en: "Looking in the mirror and loving what you see", ar: "كتشوف فالمرايا وعاجبك الحال" }
    ],
    alternative: { en: "Or you could still be guessing, wasting time on random programs.", ar: "أو تقدر تبقى غي كتجرب وتضيع الوقت فـ برامج عشوائية." },
    choice: { en: "The choice is yours.", ar: "القرار بين يديك." },
    cta: { en: "DM ME 'HYBRID'", ar: "صيفط ليا 'HYBRID'" },
    dmText: { en: "DM me", ar: "صيفط ليا" },
    coaching: { en: "'HYBRID'", ar: "'HYBRID'" },
    onInstagram: { en: "on Instagram.", ar: "فـ انستغرام." },
    letsGo: { en: "Let's build something great.", ar: "يلاه نبنيو شي حاجة ناضية." },
  },

  // Footer
  footer: {
    title1: { en: "FOLLOW FOR", ar: "تابعني على" },
    title2: { en: "FREE CONTENT", ar: "محتوى فابور" },
    questions: { en: "Questions? DM me anytime.", ar: "أسئلة؟ صيفط ليا فـ أي وقت." },
    rights: { en: "All Rights Reserved", ar: "جميع الحقوق محفوظة" },
  },

  // Free Tools Section
  tools: {
    title1: { en: "FREE", ar: "أدوات" },
    title2: { en: "RESOURCES", ar: "مجانية" },
    subtitle: { en: "Professional tools to optimize your performance. No charge.", ar: "أدوات احترافية لتحسين الأداء ديالك. فابور." },
    orm: {
      title: { en: "1RM Calculator", ar: "حاسبة الـ 1RM" },
      purpose: {
        en: "Calculate the maximum weight you can lift for one rep to determine your true strength standard.",
        ar: "احسب أقصى وزن تقدر تهزو لمرة وحدة باش تعرف القوة الحقيقية ديالك."
      },
      desc: { en: "Enter your 10 rep max to estimate your one-rep max.", ar: "دخل أقصى وزن كدير بيه 10 التكرارات." },
      exerciseLabel: { en: "Exercise", ar: "التمرين" },
      exercises: {
        benchPress: { en: "Barbell Bench Press", ar: "ضغط بار صدر" },
        weightedDips: { en: "Weighted Dips", ar: "متوازي بوزن" },
        weightedPullups: { en: "Weighted Pull-ups", ar: "عقلة بوزن" },
        squat: { en: "Squat", ar: "سكوات" },
        deadlift: { en: "Deadlift", ar: "ديدلفت" },
        zBarCurls: { en: "Z-Bar Curls", ar: "باي زد بار" },
      },
      weightLabel: { en: "10 Rep Max Weight", ar: "وزن 10 تكرارات" },
      bodyweightLabel: { en: "Bodyweight", ar: "وزن الجسم" },
      calculate: { en: "Calculate 1RM", ar: "احسب الأقصى" },
      resultLabel: { en: "Your Estimated 1RM:", ar: "الـ 1RM التقديري:" },
      trainingZones: { en: "Training Zones", ar: "مناطق التدريب" },
      zoneStrength: { en: "Pure Strength (90%)", ar: "قوة قصوى (90%)" },
      zoneHypertrophy: { en: "Hypertrophy (75-85%)", ar: "بناء عضلي (75-85%)" },
      zoneEndurance: { en: "Endurance (60%)", ar: "تحمل (60%)" },
    },
    splitFinder: {
      title: { en: "Split Finder", ar: "مكتشف الـ Split" },
      desc: { en: "Find the perfect workout split based on your weekly frequency.", ar: "لقى نظام التدريب المثالي على حساب شحال من نهار غاتترينى." },
      button: { en: "Launch Finder", ar: "بدا البحث" },
    }
  },

  // Sticky Button (DM Focus)
  sticky: {
    apply: { en: "DM ME 'HYBRID'", ar: "صيفط ليا 'HYBRID'" },
  },

  // Email Capture Modal
  modal: {
    title: { en: "JOIN THE 1%", ar: "انضم للـ 1%" },
    subtitle: { en: "Get the free guide and exclusive tips delivered to your inbox.", ar: "خود الدليل الفابور ونصائح حصرية فـ إيميل ديالك." },
    nameLabel: { en: "First Name", ar: "الاسم الأول" },
    emailLabel: { en: "Email Address", ar: "البريد الإلكتروني" },
    submit: { en: "JOIN WAITLIST", ar: "انضم للقائمة" },
    submitting: { en: "JOINING...", ar: "جاري الانضمام..." },
    successTitle: { en: "YOU'RE ON THE LIST!", ar: "تم التسجيل!" },
    successDesc: { en: "We'll email you as soon as it's ready.", ar: "غيفطو ليك إيميل غير يكون واجد." },
    privacy: { en: "No spam. Unsubscribe anytime.", ar: "بلا بريد مزعج. تقدر تلغي فـ أي وقت." },
  },

  // Paid Product Info Modal
  paidProductModal: {
    title: { en: "8-WEEK HYBRID BLUEPRINT", ar: "الـ 8-WEEK HYBRID BLUEPRINT" },
    subtitle: { en: "Everything you need to build muscle, strength, and aesthetics.", ar: "كل ما خصك باش تبني العضلات، القوة، والفورمة الناضية." },
    oneTimePayment: { en: "ONE-TIME PAYMENT", ar: "خلص مرة وحدة وتهنا" },
    whatYouGet: { en: "WHAT YOU GET:", ar: "شنو غاتستافد:" },
    features: [
      { en: "8-Week Progressive Hybrid Training Program", ar: "برنامج تدريبي هجين متكامل لمدة 8 سيمانات" },
      { en: "Complete Nutrition & Macro Tracking System", ar: "نظام غذائي شامل مع حساب الماكروز" },
      { en: "4 Customizable Meal Plan Options", ar: "4 اختيارات ديال الوجبات تقدر تبدل بينهم" },
      { en: "Exercise Library with Video Demonstrations", ar: "مكتبة فيها فيديوهات كتشرح كل تمرين" },
      { en: "Recovery & Mobility Protocols", ar: "نصائح وتمارين للريكوفري والمرونة" },
      { en: "Lifetime Access - No Subscription", ar: "البرنامج ديالك مدى الحياة، بلا اشتراك شهري" }
    ],
    howToUse: { en: "HOW TO USE:", ar: "كيفاش تخدم بيه:" },
    howToUseDesc: { en: "This is a complete 8-week program delivered as a PDF. Follow the workouts, track your macros, and watch your body transform. Perfect for those who want to train independently with a proven system.", ar: "هذا برنامج كامل لمدة 8 سيمانات كيوصلك على شكل PDF. تبع التمارين، حسب الماكروز ديالك، وشوف جسمك كيفاش غيتبدل. مثالي للناس اللي باغين يترينيو بوحدهم بنظام مجرب وفعال." },
    howToBuy: { en: "HOW TO GET IT:", ar: "كيفاش تاخدو:" },
    step1: { en: "Click the button below to DM me 'HYBRID PROGRAM' on Instagram", ar: "كليكي على البوطونة لتحت وصيفط ليا 'HYBRID PROGRAM' ف انستغرام" },
    step2: { en: "I'll send you payment details ($20 USD or 199 DH)", ar: "غانسيفط ليك كيفاش تخلص (20$ أو 199 درهم)" },
    step3: { en: "Once paid, you'll receive the complete program instantly", ar: "غير تخلص، كيوصلك البرنامج كامل فالحين" },
    dmButton: { en: "DM ME 'HYBRID PROGRAM'", ar: "صيفط ليا 'HYBRID PROGRAM'" }
  },
  // Product Teaser (Home Page)
  productTeaser: {
    title: { en: "ELITE PROGRAMS", ar: "برامج احترافية" },
    subtitle: { en: "Accelerate your results with our proven systems.", ar: "سرّع النتائج ديالك بأنظمة مجربة." },
    cta: { en: "VIEW ALL PROGRAMS", ar: "شوف كاع البرامج" },
    blueprintTitle: { en: "8-Week Blueprint", ar: "الـ Blueprint" },
    blueprintDesc: { en: "Complete solo system.", ar: "سيستيم بوحدك." },
    freeTitle: { en: "Free Split Finder", ar: "مكتشف الـ Split" },
    freeDesc: { en: "Find your frequency.", ar: "لقى الريتم ديالك." }
  }
};

export const getTranslation = (obj: { en: string; ar: string }, lang: Language): string => {
  return obj[lang];
};

