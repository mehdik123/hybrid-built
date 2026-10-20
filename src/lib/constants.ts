/** Instagram DM — single source of truth for primary conversion */
export const IG_HANDLE = "unbreakablesteam";
export const IG_DM_MESSAGE = "Apply for coaching";
export const IG_DM_URL = `https://ig.me/m/${IG_HANDLE}?text=${encodeURIComponent(IG_DM_MESSAGE)}`;

/** Gumroad product page */
export const GUMROAD_HYBRID_URL = "https://mehdikamal7.gumroad.com/l/ukamgr";
/** Opens Gumroad checkout overlay immediately (skips long product browse) */
export const GUMROAD_HYBRID_CHECKOUT_URL = `${GUMROAD_HYBRID_URL}?wanted=true`;

export const CTA_PRIMARY_EN = "Apply for coaching";
export const CTA_FRICTION_EN = "I review every application myself.";

/**
 * Editorial photography — one distinct Mehdi image per surface.
 * Do not reuse the same path on multiple sections.
 */
export const ASSETS = {
  logo: "/logo.png",
  /** Path page — coaching card 01 (centered full-body portrait) */
  pathCoaching: "/about-me.jpg",
  /** Path page — blueprint card 02 (gym pose — crops well) */
  pathBlueprint: "/hero-placeholder.jpg",
  /** Path page — free tool card 03 */
  pathFreeTool: "/testimonial-cover.jpg",
  /** Coaching sales page hero (gym pose / poster) */
  heroCoaching: "/hero-placeholder.jpg",
  /** Compressed looping hero background (poster first for LCP) */
  heroVideo: "/hero-bg.mp4",
  heroPoster: "/hero-poster.jpg",
  /** About section — editorial doorway pose */
  aboutPortrait: "/hero-placeholder-v2.jpg",
  /** Products / blueprint hero */
  productsHero: "/testimonial-cover.jpg",
  /** Free tool page */
  freeToolHero: "/hero-fallback.jpg",
  /** Mehdi's own transformation — transformations default */
  mehdiTransformBefore: "/transformation-11-before.png",
  mehdiTransformAfter: "/transformation-11-after.png",
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
