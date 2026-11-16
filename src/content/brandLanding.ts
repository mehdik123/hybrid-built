import type { Language } from "@/lib/translations";

export type Localized = Record<Language, string>;

/** Personal brand homepage — El Mehdi Kamal */
export const brand = {
  name: "EL MEHDI KAMAL",
  hero: {
    roles: { en: "ATHLETE. CREATOR. COACH.", ar: "ATHLETE. CREATOR. COACH.", fr: "ATHLETE. CRÉATEUR. COACH." } as Localized,
    support: {
      en: "Natural hybrid athlete. Building stronger, more capable people through intelligent training and discipline.",
      ar: "Natural hybrid athlete. كنينيو ناس أقوى وأكثر قدرة عبر تدريب ذكي و discipline.",
      fr: "Athlète hybride naturel. Je construis des corps plus forts et plus capables grâce à un training intelligent et la discipline.",
    } as Localized,
    ctaWork: { en: "Explore my work", ar: "اكتشف خدمتي", fr: "Découvrir mon travail" } as Localized,
  },
  identity: {
    eyebrow: { en: "Identity", ar: "الهوية", fr: "Identité" } as Localized,
    title: {
      en: "Strong. Capable. Complete.",
      ar: "قوي. قادر. كامل.",
      fr: "Fort. Capable. Complet.",
    } as Localized,
    body: [
      {
        en: "I'm El Mehdi Kamal, a natural hybrid athlete, fitness coach and content creator from Morocco.",
        ar: "أنا المهدي كمال، natural hybrid athlete، كوتش فـ fitness وصانع محتوى من المغرب.",
        fr: "Je suis El Mehdi Kamal, athlète hybride naturel, coach fitness et créateur de contenu depuis le Maroc.",
      },
      {
        en: "My approach combines strength, calisthenics, bodybuilding and athletic conditioning. An impressive physique shouldn't come at the expense of performance, health or enjoying life.",
        ar: "منهجي كيجمع بين القوة، calisthenics، bodybuilding والـ conditioning. الجسم القوي ما خاصوش يجي على حساب الأداء، الصحة ولا متعة الحياة.",
        fr: "Mon approche combine force, calisthenics, musculation et conditioning. Un physique impressionnant ne doit pas se faire au détriment de la performance, de la santé ou du plaisir.",
      },
      {
        en: "I believe in consistency, intelligent training and sustainable habits — making fitness more accessible while showing what's possible through natural training and discipline.",
        ar: "كنآمن بالاستمرارية، التدريب الذكي والعادات المستدامة — باش نخلّي الـ fitness أقرب للناس، ونورّي شنو ممكن بالـ natural training والـ discipline.",
        fr: "Je crois en la régularité, un training intelligent et des habitudes durables — rendre le fitness plus accessible, et montrer ce que permettent l’entraînement naturel et la discipline.",
      },
    ] as Localized[],
  },
  work: {
    eyebrow: { en: "Explore my work", ar: "اكتشف العمل ديالي", fr: "Explorer mon travail" } as Localized,
    title: {
      en: "Two paths. One standard.",
      ar: "جوج مسارات. نفس المستوى.",
      fr: "Deux chemins. Un seul standard.",
    } as Localized,
    lead: {
      en: "Choose the experience that fits how you want to train — both built with the same attention to quality.",
      ar: "اختار التجربة اللي كتناسبك — بجوجهم بنفس الاهتمام بالجودة.",
      fr: "Choisis l’expérience qui te convient — les deux avec le même niveau d’exigence.",
    } as Localized,
    coaching: {
      tag: { en: "01", ar: "01", fr: "01" } as Localized,
      title: { en: "Online Coaching With Mehdi", ar: "Online Coaching مع المهدي", fr: "Coaching en ligne avec Mehdi" } as Localized,
      body: {
        en: "Personalized coaching, individual guidance, accountability and continuous progress — with me in your corner.",
        ar: "تدريب شخصي، توجيه فردي، متابعة مستمرة وتقدم واضح — وأنا معاك فكل خطوة.",
        fr: "Coaching personnalisé, guidance individuelle, accountability et progrès continu — avec moi à tes côtés.",
      } as Localized,
      cta: { en: "Explore online coaching", ar: "اكتشف الـ online coaching", fr: "Explorer le coaching en ligne" } as Localized,
    },
    hybrid: {
      tag: { en: "02", ar: "02", fr: "02" } as Localized,
      title: { en: "Hybrid Build", ar: "Hybrid Build", fr: "Hybrid Build" } as Localized,
      subtitle: {
        en: "The 8-Week Hybrid Athlete Program",
        ar: "برنامج Hybrid Athlete لمدة 8 سيمانات",
        fr: "Le programme Hybrid Athlete 8 semaines",
      } as Localized,
      body: {
        en: "A structured, self-guided system combining calisthenics and bodybuilding — built to follow on your own schedule.",
        ar: "نظام منظم self-guided كيجمع calisthenics و bodybuilding — تقدر تتبعو بإيقاعك.",
        fr: "Un système structuré en autonomie: calisthenics + musculation — conçu pour ton rythme.",
      } as Localized,
      cta: { en: "Discover Hybrid Build", ar: "اكتشف Hybrid Build", fr: "Découvrir Hybrid Build" } as Localized,
    },
  },
  presence: {
    eyebrow: { en: "Presence", ar: "الحضور", fr: "Présence" } as Localized,
    title: {
      en: "Built in public.",
      ar: "كنبني فـ العلن.",
      fr: "Construit au grand jour.",
    } as Localized,
    lead: {
      en: "Hundreds of thousands follow the work across Instagram and TikTok.",
      ar: "مئات الآلاف كيتبعو العمل عبر Instagram و TikTok.",
      fr: "Des centaines de milliers suivent le travail sur Instagram et TikTok.",
    } as Localized,
    stats: [
      {
        end: 534,
        decimals: 0,
        suffix: "K+",
        label: { en: "Instagram", ar: "Instagram", fr: "Instagram" },
      },
      {
        end: 267,
        decimals: 0,
        suffix: "K+",
        label: { en: "TikTok", ar: "TikTok", fr: "TikTok" },
      },
      {
        end: 3.6,
        decimals: 1,
        suffix: "K",
        label: { en: "Coaching clients", ar: "Coaching clients", fr: "Clients coaching" },
      },
    ],
    collabLabel: {
      en: "Selected collaborations",
      ar: "تعاونات مختارة",
      fr: "Collaborations sélectionnées",
    } as Localized,
    collabs: [{ name: "WHOOP" }, { name: "Oraimo" }] as { name: string }[],
    collabNote: {
      en: "Past brand work includes collaborations with WHOOP and Oraimo.",
      ar: "تعاونات سابقة مع WHOOP و Oraimo.",
      fr: "Collaborations passées notamment avec WHOOP et Oraimo.",
    } as Localized,
  },
  closing: {
    line: {
      en: "BUILT THROUGH DISCIPLINE. NOT SHORTCUTS.",
      ar: "كيتبنى بالـ discipline. ماشي بالاختصارات.",
      fr: "CONSTRUIT PAR LA DISCIPLINE. PAS PAR LES RACCOURCIS.",
    } as Localized,
    alt: {
      en: "BUILD A BODY THAT CAN DO MORE.",
      ar: "بني جسم يقدر يدير أكثر.",
      fr: "CONSTRUIS UN CORPS QUI PEUT FAIRE PLUS.",
    } as Localized,
    ctaCoaching: { en: "Online coaching", ar: "Online coaching", fr: "Coaching en ligne" } as Localized,
    ctaHybrid: { en: "Hybrid Build", ar: "Hybrid Build", fr: "Hybrid Build" } as Localized,
  },
} as const;
