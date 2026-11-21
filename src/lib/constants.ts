/** Instagram — personal brand */
export const IG_HANDLE = "mehdikamal___";
export const IG_PROFILE_URL = `https://instagram.com/${IG_HANDLE}`;
export const IG_DM_MESSAGE = "Apply for coaching";
export const IG_DM_URL = `https://ig.me/m/${IG_HANDLE}?text=${encodeURIComponent(IG_DM_MESSAGE)}`;
/** Instagram DM for the HYBRID digital program, not online coaching */
export const IG_HYBRID_DM_URL = `https://ig.me/m/${IG_HANDLE}?text=${encodeURIComponent("HYBRID")}`;

/** Gumroad product page — Hybrid Build */
export const GUMROAD_HYBRID_URL = "https://mehdikamal7.gumroad.com/l/ukamgr";
/** Opens Gumroad checkout overlay immediately (skips long product browse) */
export const GUMROAD_HYBRID_CHECKOUT_URL = `${GUMROAD_HYBRID_URL}?wanted=true`;

/** Free Hybrid Split Finder tool (no email gate) */
export const SPLIT_FINDER_URL = "https://gainz-frequency-finder.lovable.app";

/** Bank transfer: contact first — RIB is sent privately, never shown on site */
export const IG_HYBRID_TRANSFER_DM = `HYBRID: I want to pay by bank transfer`;
export const IG_HYBRID_TRANSFER_DM_URL = `https://ig.me/m/${IG_HANDLE}?text=${encodeURIComponent(IG_HYBRID_TRANSFER_DM)}`;

export const CTA_PRIMARY_EN = "Apply for coaching";
export const CTA_FRICTION_EN = "I review every application myself.";

export const BRAND_NAME = "EL MEHDI KAMAL";
export const SITE_URL = "https://mehdikamel.com";

/**
 * Editorial photography — one distinct Mehdi image per surface.
 * Do not reuse the same path on multiple primary sections.
 */
export const ASSETS = {
  logo: "/logo.png",
  pathCoaching: "/about-me.jpg",
  pathBlueprint: "/hero-placeholder.jpg",
  pathFreeTool: "/testimonial-cover.jpg",
  heroCoaching: "/hero-placeholder.jpg",
  heroVideo: "/hero-bg.mp4",
  heroPoster: "/hero-poster.jpg",
  aboutPortrait: "/hero-placeholder-v2.jpg",
  identityPortrait: "/about-me.jpg",
  productsHero: "/testimonial-cover.jpg",
  freeToolHero: "/hero-fallback.jpg",
  gymPortrait: "/hero-placeholder.jpg",
  doorwayPortrait: "/hero-placeholder-v2.jpg",
  hybridCover: "/hybrid-training-cover.jpg",
  hybridCoverEn: "/hybrid-cover-en.jpg",
  hybridCoverDarija: "/hybrid-cover-darija.jpg",
  mehdiTransformBefore: "/transformation-11-before.png",
  mehdiTransformAfter: "/transformation-11-after.png",
  finalCtaPortrait: "/about-me.jpg",
  testimonialCover: "/testimonial-cover.jpg",
  testimonialVideo: "/testimonial-video.mp4",
  appHome: "/app-home.jpg",
  appTrain: "/app-train.jpg",
  appCardio: "/app-cardio.jpg",
  appNutrition: "/app-nutrition.jpg",
  appProgress: "/app-progress.jpg",
  appWeight: "/app-weight.jpg",
  appPhotos: "/app-photos.jpg",
  heroFallback: "/hero-fallback.jpg",
  heroPlaceholderAlt: "/hero-placeholder-v2.jpg",
} as const;

/** Instagram reel used for the in-page video testimonial */
export const TESTIMONIAL_REEL_URL =
  "https://www.instagram.com/reel/DVTqyzCjHoN/?utm_source=ig_web_copy_link";
export const TESTIMONIAL_REEL_EMBED =
  "https://www.instagram.com/reel/DVTqyzCjHoN/embed";

/** Index of MEHDI in transformations.testimonials */
export const FEATURED_TRANSFORM_INDEX = 10;
