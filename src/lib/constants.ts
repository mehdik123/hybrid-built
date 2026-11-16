/** Instagram DM — single source of truth for primary conversion */
export const IG_HANDLE = "unbreakablesteam";
export const IG_DM_MESSAGE = "Apply for coaching";
export const IG_DM_URL = `https://ig.me/m/${IG_HANDLE}?text=${encodeURIComponent(IG_DM_MESSAGE)}`;
/** Instagram DM for the HYBRID digital program, not online coaching */
export const IG_HYBRID_DM_URL = `https://ig.me/m/${IG_HANDLE}?text=${encodeURIComponent("HYBRID")}`;

/** Gumroad product page */
export const GUMROAD_HYBRID_URL = "https://mehdikamal7.gumroad.com/l/ukamgr";
/** Opens Gumroad checkout overlay immediately (skips long product browse) */
export const GUMROAD_HYBRID_CHECKOUT_URL = `${GUMROAD_HYBRID_URL}?wanted=true`;

/** Free Hybrid Split Finder tool (no email gate) */
export const SPLIT_FINDER_URL = "https://gainz-frequency-finder.lovable.app";

/** Bank transfer: contact first — RIB is sent privately, never shown on site */
export const IG_HYBRID_TRANSFER_DM = `HYBRID — I want to pay by bank transfer`;
export const IG_HYBRID_TRANSFER_DM_URL = `https://ig.me/m/${IG_HANDLE}?text=${encodeURIComponent(IG_HYBRID_TRANSFER_DM)}`;

export const CTA_PRIMARY_EN = "Apply for coaching";
export const CTA_FRICTION_EN = "I review every application myself.";

/**
 * Editorial photography — one distinct Mehdi image per Index surface.
 * Do not reuse the same path on multiple primary sections.
 */
export const ASSETS = {
  logo: "/logo.png",
  /** Offer section — oversized balcony/doorway portrait */
  pathCoaching: "/about-me.jpg",
  offerEditorial: "/about-me.jpg",
  /** Process step 01 — gym lat-spread */
  pathBlueprint: "/hero-placeholder.jpg",
  processApply: "/hero-placeholder.jpg",
  /** Path / free-tool surfaces */
  pathFreeTool: "/testimonial-cover.jpg",
  /** Coaching sales page hero still (also process step 02) */
  heroCoaching: "/hero-placeholder.jpg",
  /** Compressed looping hero background (poster first for LCP) */
  heroVideo: "/hero-bg.mp4",
  heroPoster: "/hero-poster.jpg",
  /** Process step 02 — low-angle doorway pose */
  aboutPortrait: "/hero-placeholder-v2.jpg",
  processCheckin: "/hero-placeholder-v2.jpg",
  /** Products / blueprint hero */
  productsHero: "/testimonial-cover.jpg",
  /** Process step 03 + free tool — gym full-body */
  freeToolHero: "/hero-fallback.jpg",
  processTrain: "/hero-fallback.jpg",
  /** Mehdi's own transformation — Final CTA full-bleed */
  mehdiTransformBefore: "/transformation-11-before.png",
  mehdiTransformAfter: "/transformation-11-after.png",
  finalCtaBg: "/transformation-11-after.png",
  /** Client video testimonial (cover + optional self-hosted clip) */
  testimonialCover: "/testimonial-cover.jpg",
  /** Drop an mp4 here for native in-site playback; otherwise Instagram embed is used */
  testimonialVideo: "/testimonial-video.mp4",
  /** Coaching app screens — phone mockups */
  appHome: "/app-home.jpg",
  appTrain: "/app-train.jpg",
  appNutrition: "/app-nutrition.jpg",
  appProgress: "/app-progress.jpg",
  /** Generic fallbacks */
  heroFallback: "/hero-fallback.jpg",
  heroPlaceholderAlt: "/hero-placeholder-v2.jpg",
} as const;

/** Instagram reel used for the in-page video testimonial */
export const TESTIMONIAL_REEL_URL =
  "https://www.instagram.com/reel/DVTqyzCjHoN/?utm_source=ig_web_copy_link";
export const TESTIMONIAL_REEL_EMBED =
  "https://www.instagram.com/reel/DVTqyzCjHoN/embed";

/** Index of MEHDI in transformations.testimonials */
export const FEATURED_TRANSFORMATION_INDEX = 10;
