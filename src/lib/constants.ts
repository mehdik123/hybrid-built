/** Instagram DM — single source of truth for primary conversion */
export const IG_HANDLE = "unbreakablesteam";
export const IG_DM_MESSAGE = "Coaching";
export const IG_DM_URL = `https://ig.me/m/${IG_HANDLE}?text=${encodeURIComponent(IG_DM_MESSAGE)}`;

export const CTA_PRIMARY_EN = "DM me 'Coaching'";
export const CTA_FRICTION_EN = "I respond personally to every message.";

/**
 * Editorial photography — one distinct Mehdi image per surface.
 * Do not reuse the same path on multiple sections.
 */
export const ASSETS = {
  logo: "/logo.png",
  /** Path page — coaching card 01 (centered full-body portrait) */
  pathCoaching: "/about-me.jpg",
  /** Path page — blueprint card 02 */
  pathBlueprint: "/hero-placeholder-v2.jpg",
  /** Path page — free tool card 03 */
  pathFreeTool: "/hero-fallback.jpg",
  /** Coaching sales page hero (gym pose) */
  heroCoaching: "/hero-placeholder.jpg",
  /** About section — editorial doorway pose */
  aboutPortrait: "/hero-placeholder-v2.jpg",
  /** Products / blueprint hero */
  productsHero: "/testimonial-cover.jpg",
  /** Free tool page */
  freeToolHero: "/hero-fallback.jpg",
  /** Mehdi's own transformation — transformations default */
  mehdiTransformBefore: "/transformation-11-before.png",
  mehdiTransformAfter: "/transformation-11-after.png",
  /** Generic fallbacks */
  heroFallback: "/hero-fallback.jpg",
  heroPlaceholderAlt: "/hero-placeholder-v2.jpg",
} as const;

/** Index of MEHDI in transformations.testimonials */
export const FEATURED_TRANSFORMATION_INDEX = 10;
