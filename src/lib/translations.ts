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
  },

  // Hero Section (Strategic DM Redesign)
  hero: {
    preHeadline: { en: "100% NATURAL ATHLETE // HYBRID PERFORMANCE", ar: "رياضي طبيعي 100% // أداء هجين" },
    headline1: { en: "I BUILT THE HYBRID PHYSIQUE.", ar: "لقد بنيت الجسم الهجين." },
    headline2: { en: "NOW I'LL SHOW YOU HOW.", ar: "والآن سأريك كيف." },
    emotionalHook: { en: "NO STEROIDS. NO MYSTERIES. JUST THE METHOD.", ar: "بدون منشطات. بدون أسرار. فقط النظام." },
    headline3: { en: "DM ME 'HYBRID' TO START.", ar: "راسلني 'HYBRID' للبدء." },
    promise: { en: "THE ONLY WAY TO MASTER SIZE, STRENGTH AND AESTHETICS.", ar: "الطريق الوحيد لإتقان الضخامة والمرونة." },
    coachIntro: { en: "YOUR TRANSFORMATION BEGINS WITH ONE MESSAGE.", ar: "تحولك يبدأ برسالة واحدة." },
    cta: { en: "DM ME 'HYBRID' ON IG", ar: "راسلني 'HYBRID' على انستغرام" },
    ctaSubtext: { en: "I RESPOND PERSONALLY WITHIN 24H.", ar: "أرد شخصياً خلال 24 ساعة." },
    scroll: { en: "EXPLORE THE METHOD", ar: "اكتشف النظام" },
    stats: {
      clients: { en: "400+", ar: "+400" },
      clientsLabel: { en: "TRANSFORMATIONS", ar: "تحول جذري" },
      followers: { en: "600K+", ar: "+600K" },
      followersLabel: { en: "FOLLOWERS", ar: "متابع" },
      years: { en: "10+", ar: "10+" },
      yearsLabel: { en: "YEARS EXP", ar: "سنوات خبرة" },
    },
  },
  // About Section
  about: {
    title1: { en: "WHO I", ar: "من" },
    title2: { en: "AM", ar: "أنا" },
    intro: { en: "I'm", ar: "أنا" },
    name: { en: "Mehdi", ar: "المهدي" },
    followers: { en: "followers", ar: "متابع" },
    description1: {
      en: ". I've built one of the elite natural physiques in Morocco, with a community of over",
      ar: ". لقد بنيت أحد أفضل الأجسام الطبيعية في المغرب، مع مجتمع يضم أكثر من"
    },
    description2: {
      en: "I built my physique naturally by combining calisthenics and bodybuilding—no steroids, no shortcuts, just smart training.",
      ar: "بنيت جسمي بشكل طبيعي من خلال الجمع بين تمارين الجمباز وكمال الأجسام — بدون منشطات، بدون اختصارات، فقط تدريب ذكي."
    },
    description3: {
      en: "I've helped",
      ar: "ساعدت أكثر من"
    },
    clients: { en: "100+ people worldwide", ar: "100+ شخص حول العالم" },
    description4: {
      en: "achieve elite-level transformations using the same unbreakable system.",
      ar: "في تحقيق تحولات بمستوى النخبة باستخدام نفس النظام الذي لا يقهر."
    },
    description5: {
      en: "Now, I want to help",
      ar: "الآن، أريد مساعدتك"
    },
    you: { en: "you", ar: "أنت" },
  },

  // Coaching Section
  coaching: {
    title1: { en: "1-ON-1", ar: "تدريب شخصي" },
    title2: { en: "ONLINE COACHING", ar: "أونلاين" },
    subtitle: { en: "Get a Custom Program Built for YOUR Body & Goals", ar: "احصل على برنامج مخصص لجسمك وأهدافك" },
    whatYouGet: { en: "WHAT YOU GET:", ar: "ماذا ستحصل:" },
    features: {
      training: {
        title: { en: "Custom Training Plan", ar: "برنامج تدريب مخصص" },
        description: {
          en: "Built specifically for your experience level, goals, and equipment access. Updated weekly based on your progress.",
          ar: "مصمم خصيصاً لمستوى خبرتك وأهدافك والمعدات المتاحة لديك. يتم تحديثه أسبوعياً بناءً على تقدمك."
        }
      },
      nutrition: {
        title: { en: "Personalized Nutrition System", ar: "نظام غذائي مخصص" },
        description: {
          en: "Your exact macros, meal plans (Moroccan & international options), and how to adjust based on results.",
          ar: "الماكروز الخاصة بك، خطط وجبات (خيارات مغربية ودولية)، وكيفية التعديل بناءً على النتائج."
        }
      },
      checkIns: {
        title: { en: "Weekly Check-Ins", ar: "متابعة أسبوعية" },
        description: {
          en: "Form reviews, progress analysis, and program adjustments. I keep you on track.",
          ar: "مراجعة الأداء، تحليل التقدم، وتعديل البرنامج. سأبقيك على المسار الصحيح."
        }
      },
      messaging: {
        title: { en: "24/7 Messaging Access", ar: "تواصل على مدار الساعة" },
        description: {
          en: "Questions answered within 24 hours. You're never stuck or confused.",
          ar: "الإجابة على أسئلتك خلال 24 ساعة. لن تشعر أبداً بالحيرة."
        }
      },
      accountability: {
        title: { en: "Accountability & Support", ar: "المتابعة والدعم" },
        description: {
          en: "I hold you accountable for 12 weeks. No excuses, just results.",
          ar: "سأتابعك لمدة 12 أسبوع. لا أعذار، فقط نتائج."
        }
      }
    },
    whoIsFor: { en: "WHO THIS IS FOR:", ar: "لمن هذا البرنامج:" },
    whoIsForItems: [
      { en: "You're serious (no tire-kickers)", ar: "أنت جاد (لا مضيعة للوقت)" },
      { en: "You want expert guidance (not YouTube advice)", ar: "تريد توجيه خبير (ليس نصائح يوتيوب)" },
      { en: "You're ready to invest in yourself", ar: "مستعد للاستثمار في نفسك" },
      { en: "You'll commit for 12 weeks minimum", ar: "ستلتزم لمدة 12 أسبوع على الأقل" }
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
  },

  // Transformations Section
  transformations: {
    title1: { en: "CLIENT", ar: "تحولات" },
    title2: { en: "TRANSFORMATIONS", ar: "العملاء" },
    subtitle: { en: "Real People. Real Results.", ar: "أشخاص حقيقيون. نتائج حقيقية." },
    before: { en: "BEFORE", ar: "قبل" },
    after: { en: "AFTER", ar: "بعد" },
    cta: { en: "I Want Results Like This", ar: "أريد نتائج مثل هذه" },
    testimonials: [
      {
        quote: {
          en: "Incredible progress in record time. The hybrid method completely changed my approach to training.",
          ar: "تقدم مذهل في وقت قياسي. النظام الهجين غير طريقة تدريبي تماماً."
        },
        name: { en: "Client, 28", ar: "عميل، 28" }
      },
      {
        quote: {
          en: "Lost 15 lbs and built visible abs in 12 weeks. Best investment I've made.",
          ar: "خسرت 15 رطل وبنيت عضلات بطن واضحة في 12 أسبوع. أفضل استثمار قمت به."
        },
        name: { en: "Youssef, 28", ar: "يوسف، 28" }
      },
      {
        quote: {
          en: "Added 50 lbs to my bench and 30 lbs to my squat. My back is finally thick.",
          ar: "أضفت 50 رطل لتمرين الصدر و30 رطل للسكوات. ظهري أخيراً أصبح ضخم."
        },
        name: { en: "Amine, 24", ar: "أمين، 24" }
      },
      {
        quote: {
          en: "Learned how to train hybrid. Now I'm strong AND aesthetic.",
          ar: "تعلمت كيف أتدرب بشكل هجين. الآن أنا قوي وجمالي."
        },
        name: { en: "Mehdi, 31", ar: "مهدي، 31" }
      },
      {
        quote: {
          en: "Complete body recomposition. Lost body fat while gaining serious strength.",
          ar: "إعادة تكوين كاملة للجسم. فقدت دهون الجسم مع اكتساب قوة مذهلة."
        },
        name: { en: "Omar, 26", ar: "عمر، 26" }
      },
      {
        quote: {
          en: "Transformed my physique and mindset. The Unbreakable Team system really works.",
          ar: "حولت جسمي وعقليتي. نظام فريق Unbreakable يعمل حقاً."
        },
        name: { en: "Saad, 29", ar: "سعد، 29" }
      },
      {
        quote: {
          en: "Achieved the perfect balance of size and definition. The program is a game changer.",
          ar: "حققت التوازن المثالي بين الضخامة والتحديد. البرنامج مغير للعبة."
        },
        name: { en: "Client, 27", ar: "عميل، 27" }
      },
      {
        quote: {
          en: "The results speak for themselves. Stronger, leaner, and more confident.",
          ar: "النتائج تتحدث عن نفسها. أقوى، أنحف، وأكثر ثقة."
        },
        name: { en: "Client, 30", ar: "عميل، 30" }
      },
      {
        quote: {
          en: "Another amazing transformation. Hard work pays off.",
          ar: "تحول مذهل آخر. العمل الجاد يؤتي ثماره."
        },
        name: { en: "Client, 26", ar: "عميل، 26" }
      },
      {
        quote: {
          en: "Consistency is key. 12 weeks of dedication.",
          ar: "الاستمرارية هي المفتاح. 12 أسبوعاً من الالتزام."
        },
        name: { en: "Client, 29", ar: "عميل، 29" }
      }
    ]
  },

  // FAQ Section
  faq: {
    title1: { en: "FREQUENTLY ASKED", ar: "الأسئلة" },
    title2: { en: "QUESTIONS", ar: "الشائعة" },
    cta: { en: "DM ME 'HYBRID'", ar: "راسلني 'HYBRID'" },
    items: [
      {
        question: { en: "How does online coaching work?", ar: "كيف يعمل التدريب أونلاين؟" },
        answer: {
          en: "We communicate through Instagram or WhatsApp. You get a custom plan, check in weekly with progress updates, and I adjust everything based on your results. It's like having me in your pocket 24/7.",
          ar: "نتواصل عبر انستغرام أو واتساب. تحصل على برنامج مخصص، متابعة أسبوعية مع تحديثات التقدم، وأعدل كل شيء بناءً على نتائجك. كأنني معك في جيبك 24/7."
        }
      },
      {
        question: { en: "Do I need a gym?", ar: "هل أحتاج صالة رياضية؟" },
        answer: {
          en: "Ideally yes, but I can work with home setups (pull-up bar, dip station, minimal equipment). Tell me what you have and I'll build around it.",
          ar: "مثالياً نعم، لكن يمكنني العمل مع إعدادات المنزل (بار العقلة، ديب ستيشن، معدات بسيطة). أخبرني بما لديك وسأبني برنامجك حوله."
        }
      },
      {
        question: { en: "What if I'm a beginner?", ar: "ماذا لو كنت مبتدئ؟" },
        answer: {
          en: "Perfect. I work with all levels—beginners to advanced. Your program will be tailored to YOUR experience.",
          ar: "ممتاز. أعمل مع جميع المستويات — من المبتدئين إلى المتقدمين. برنامجك سيكون مخصص لمستوى خبرتك."
        }
      },
      {
        question: { en: "Can I see results in 12 weeks?", ar: "هل يمكنني رؤية نتائج في 12 أسبوع؟" },
        answer: {
          en: "Yes, if you follow the plan. Most clients see significant changes in 8-12 weeks (visible muscle, fat loss, strength gains).",
          ar: "نعم، إذا اتبعت الخطة. معظم العملاء يرون تغييرات ملحوظة في 8-12 أسبوع (عضلات واضحة، خسارة دهون، زيادة قوة)."
        }
      },
      {
        question: { en: "What if I travel or miss workouts?", ar: "ماذا لو سافرت أو فاتتني تمارين؟" },
        answer: {
          en: "Life happens. I adjust your plan when needed. The goal is consistency over perfection.",
          ar: "الحياة تحدث. أعدل خطتك عند الحاجة. الهدف هو الاستمرارية وليس الكمال."
        }
      },
      {
        question: { en: "Payment plans?", ar: "خطط الدفع؟" },
        answer: {
          en: "Yes, message me and we'll work it out.",
          ar: "نعم، راسلني وسنتفق على ذلك."
        }
      },
      {
        question: { en: "How many clients do you take?", ar: "كم عميل تقبل؟" },
        answer: {
          en: "Limited spots (5-10 per month) to give everyone quality attention. If spots are full, I'll add you to the waitlist.",
          ar: "أماكن محدودة (5-10 شهرياً) لإعطاء الجميع اهتمام عالي الجودة. إذا امتلأت الأماكن، سأضيفك لقائمة الانتظار."
        }
      }
    ]
  },

  // Products Section (Lead Magnet & Blueprint)
  products: {
    title1: { en: "START THE", ar: "ابدأ" },
    title2: { en: "JOURNEY", ar: "الرحلة" },
    subtitle: { en: "High-value tools for the serious hybrid athlete.", ar: "أدوات عالية القيمة للرياضي الهجين الجاد." },
    free: { en: "STRATEGIC LEAD MAGNET", ar: "دليل استراتيجي" },
    freeTitle: { en: "THE HYBRID STARTER GUIDE", ar: "دليل البداية الهجين" },
    freeDescription: { en: "The exact blueprint to start combining bodybuilding and calisthenics today. Instant access.", ar: "المخطط الدقيق لبدء الجمع بين كمال الأجسام والجمباز اليوم. وصول فوري." },
    freeButton: { en: "Get Free Access", ar: "احصل على وصول مجاني" },
    joinWaitlist: { en: "JOIN WAITLIST", ar: "انضم لقائمة الانتظار" },
    comingSoon: { en: "COMING SOON", ar: "قريباً" },
    paidTitle: { en: "THE 8-WEEK HYBRID BLUEPRINT", ar: "مخطط الـ 8 أسابيع الهجين" },
    paidDescription: { en: "Complete system for those who want to start solo. Every workout, every meal, no guessing.", ar: "نظام كامل لمن يريد البدء بمفرده. كل تمرين، كل وجبة، بدون تخمين." },
    includes: { en: "What's Inside:", ar: "ماذا يوجد بالداخل:" },
    features: [
      { en: "Progressive Hybrid Training Program", ar: "برنامج تدريب هجين تصاعدي" },
      { en: "Full Nutrition & Macro System", ar: "نظام غذائي كامل وتتبع الماكروز" },
      { en: "4 Meal Plan Options", ar: "4 خيارات لخطط الوجبات" },
      { en: "Exercise Library Access", ar: "الوصول لمكتبة التمارين" }
    ],
    paidButton: { en: "Start Solo - $15", ar: "ابدأ بمفردك - $15" },
    originalPrice: { en: "$25", ar: "25$" },
    limitedTime: { en: "LIMITED TIME PRICE", ar: "سعر لفترة محدودة" },
    discountText: { en: "INSTANT DOWNLOAD", ar: "تحميل فوري" },
  },

  // Final CTA Section
  finalCta: {
    title1: { en: "READY TO", ar: "مستعد" },
    title2: { en: "TRANSFORM", ar: "للتحول" },
    line1: { en: "You've seen the results.", ar: "رأيت النتائج." },
    line2: { en: "You know what you'll get.", ar: "تعرف ماذا ستحصل." },
    line3: { en: "Now it's time to decide.", ar: "الآن حان وقت القرار." },
    weeksFrom: { en: "12 weeks from now, you could be:", ar: "بعد 12 أسبوع، يمكنك أن تكون:" },
    benefits: [
      { en: "10-20 lbs leaner or heavier (depending on goal)", ar: "10-20 رطل أخف أو أثقل (حسب الهدف)" },
      { en: "Significantly stronger (PRs on all lifts)", ar: "أقوى بشكل ملحوظ (أرقام قياسية في جميع التمارين)" },
      { en: "Confident in your training and nutrition", ar: "واثق في تدريبك وتغذيتك" },
      { en: "Looking in the mirror and loving what you see", ar: "تنظر في المرآة وتحب ما تراه" }
    ],
    alternative: { en: "Or you could still be guessing, wasting time on random programs.", ar: "أو يمكنك الاستمرار في التخمين، وإضاعة الوقت على برامج عشوائية." },
    choice: { en: "The choice is yours.", ar: "الخيار لك." },
    cta: { en: "DM ME 'HYBRID'", ar: "راسلني 'HYBRID'" },
    dmText: { en: "DM me", ar: "راسلني" },
    coaching: { en: "'HYBRID'", ar: "'HYBRID'" },
    onInstagram: { en: "on Instagram.", ar: "على انستغرام." },
    letsGo: { en: "Let's build something great.", ar: "لنبني شيئاً عظيماً." },
  },

  // Footer
  footer: {
    title1: { en: "FOLLOW FOR", ar: "تابعني للحصول على" },
    title2: { en: "FREE CONTENT", ar: "محتوى مجاني" },
    questions: { en: "Questions? DM me anytime.", ar: "أسئلة؟ راسلني في أي وقت." },
    rights: { en: "All Rights Reserved", ar: "جميع الحقوق محفوظة" },
  },

  // Free Tools Section
  tools: {
    title1: { en: "FREE", ar: "أدوات" },
    title2: { en: "RESOURCES", ar: "مجانية" },
    subtitle: { en: "Professional tools to optimize your performance. No charge.", ar: "أدوات احترافية لتحسين أدائك. مجاناً." },
    orm: {
      title: { en: "1RM Calculator", ar: "حاسبة أقصى وزن (1RM)" },
      purpose: {
        en: "Calculate the maximum weight you can lift for one rep to determine your true strength standard.",
        ar: "احسب أقصى وزن يمكنك رفعه لمرة واحدة لمعرفة مستوى قوتك الحقيقي."
      },
      desc: { en: "Enter your 10 rep max to estimate your one-rep max.", ar: "أدخل أقصى وزن لـ10 تكرارات لتقدير أقصى وزن لمرة واحدة." },
      exerciseLabel: { en: "Exercise", ar: "التمرين" },
      exercises: {
        benchPress: { en: "Barbell Bench Press", ar: "ضغط بار صدر" },
        weightedDips: { en: "Weighted Dips", ar: "متوازي بوزن إضافي" },
        weightedPullups: { en: "Weighted Pull-ups", ar: "عقلة بوزن إضافي" },
        squat: { en: "Squat", ar: "سكوات" },
        deadlift: { en: "Deadlift", ar: "ديدلفت" },
        zBarCurls: { en: "Z-Bar Curls", ar: "باي زد بار" },
      },
      weightLabel: { en: "10 Rep Max Weight", ar: "أقصى وزن لـ10 تكرارات" },
      bodyweightLabel: { en: "Bodyweight", ar: "وزن الجسم" },
      calculate: { en: "Calculate 1RM", ar: "احسب الأقصى" },
      resultLabel: { en: "Your Estimated 1RM:", ar: "أقصى وزن تقديري:" },
      trainingZones: { en: "Training Zones", ar: "مناطق التدريب" },
      zoneStrength: { en: "Pure Strength (90%)", ar: "قوة قصوى (90%)" },
      zoneHypertrophy: { en: "Hypertrophy (75-85%)", ar: "بناء عضلي (75-85%)" },
      zoneEndurance: { en: "Endurance (60%)", ar: "تحمل (60%)" },
    },
    splitFinder: {
      title: { en: "Split Finder", ar: "مكتشف نظام التدريب" },
      desc: { en: "Find the perfect workout split based on your weekly frequency.", ar: "جد نظام التدريب المثالي بناءً على عدد أيام تمرينك في الأسبوع." },
      button: { en: "Launch Finder", ar: "ابدأ البحث" },
    }
  },

  // Sticky Button (DM Focus)
  sticky: {
    apply: { en: "DM ME 'HYBRID'", ar: "راسلني 'HYBRID'" },
  },

  // Email Capture Modal
  modal: {
    title: { en: "JOIN THE 1%", ar: "انضم إلى الـ 1%" },
    subtitle: { en: "Get the free guide and exclusive tips delivered to your inbox.", ar: "احصل على الدليل المجاني ونصائح حصرية مباشرة في بريدك." },
    nameLabel: { en: "First Name", ar: "الاسم الأول" },
    emailLabel: { en: "Email Address", ar: "البريد الإلكتروني" },
    submit: { en: "JOIN WAITLIST", ar: "انضم للقائمة" },
    submitting: { en: "JOINING...", ar: "جاري الانضمام..." },
    successTitle: { en: "YOU'RE ON THE LIST!", ar: "تم تسجيلك!" },
    successDesc: { en: "We'll email you as soon as it's ready.", ar: "سنرسل لك بريداً إلكترونياً فور جاهزيته." },
    privacy: { en: "No spam. Unsubscribe anytime.", ar: "لا رسائل مزعجة. إلغاء الاشتراك في أي وقت." },
  },

  // Paid Product Info Modal
  paidProductModal: {
    title: { en: "8-WEEK HYBRID BLUEPRINT", ar: "مخطط الـ 8 أسابيع الهجين" },
    subtitle: { en: "Everything you need to build muscle, strength, and aesthetics.", ar: "كل ما تحتاجه لبناء العضلات والقوة والجمال." },
    oneTimePayment: { en: "ONE-TIME PAYMENT", ar: "دفعة واحدة" },
    whatYouGet: { en: "WHAT YOU GET:", ar: "ماذا ستحصل:" },
    features: [
      { en: "8-Week Progressive Hybrid Training Program", ar: "برنامج تدريب هجين تصاعدي لمدة 8 أسابيع" },
      { en: "Complete Nutrition & Macro Tracking System", ar: "نظام غذائي كامل وتتبع الماكروز" },
      { en: "4 Customizable Meal Plan Options", ar: "4 خيارات لخطط وجبات قابلة للتخصيص" },
      { en: "Exercise Library with Video Demonstrations", ar: "مكتبة تمارين مع فيديوهات توضيحية" },
      { en: "Recovery & Mobility Protocols", ar: "بروتوكولات التعافي والمرونة" },
      { en: "Lifetime Access - No Subscription", ar: "وصول مدى الحياة - بدون اشتراك" }
    ],
    howToUse: { en: "HOW TO USE:", ar: "كيفية الاستخدام:" },
    howToUseDesc: { en: "This is a complete 8-week program delivered as a PDF. Follow the workouts, track your macros, and watch your body transform. Perfect for those who want to train independently with a proven system.", ar: "هذا برنامج كامل لمدة 8 أسابيع يتم تسليمه كملف PDF. اتبع التمارين، تتبع الماكروز الخاصة بك، وشاهد جسمك يتحول. مثالي لمن يريد التدريب بشكل مستقل مع نظام مثبت." },
    howToBuy: { en: "HOW TO GET IT:", ar: "كيفية الحصول عليه:" },
    step1: { en: "Click the button below to DM me 'HYBRID PROGRAM' on Instagram", ar: "انقر على الزر أدناه لمراسلتي 'HYBRID PROGRAM' على انستغرام" },
    step2: { en: "I'll send you payment details ($15 USD or 150 MAD)", ar: "سأرسل لك تفاصيل الدفع (15$ أو 150 درهم)" },
    step3: { en: "Once paid, you'll receive the complete program instantly", ar: "بمجرد الدفع، ستحصل على البرنامج الكامل فوراً" },
    dmButton: { en: "DM ME 'HYBRID PROGRAM'", ar: "راسلني 'HYBRID PROGRAM'" }
  }
};

export const getTranslation = (obj: { en: string; ar: string }, lang: Language): string => {
  return obj[lang];
};

