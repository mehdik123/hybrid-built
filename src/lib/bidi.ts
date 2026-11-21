/**
 * Bidi helpers for mixed Arabic / English copy.
 *
 * Arabic (Darija) copy often embeds Latin terms (PDF, WhatsApp, Training,
 * Nutrition, App, ...). Left alone, the bidi algorithm can let those Latin
 * runs pull neighbouring punctuation / numbers to the wrong side. We wrap
 * every Latin run in a Left-to-Right Isolate (LRI ... PDI), the Unicode
 * equivalent of <bdi dir="ltr"> / `unicode-bidi: isolate`, so:
 *   - the English term always reads left-to-right,
 *   - the surrounding Arabic keeps its right-to-left order,
 *   - commas, periods, colons and spacing stay on the Arabic side.
 *
 * Pure markup-free, so layout / design / DOM structure are unchanged.
 */

const LRI = "\u2066";
const PDI = "\u2069";

// One Latin "token": letters/digits, optionally joined by - + ' ’ . / &
// (so "check-ins", "1-on-1", "Q&A" stay whole). It never ends on punctuation,
// so a sentence-ending "." stays outside the isolate, on the Arabic side.
const TOKEN = "[A-Za-z0-9]+(?:[-+'\u2019./&][A-Za-z0-9]+)*";
// A run = consecutive tokens separated by plain spaces ("Hybrid Athlete").
const LATIN_RUN = new RegExp(`${TOKEN}(?:[ \\t]+${TOKEN})*`, "g");

const HAS_ARABIC = /[\u0600-\u06FF]/;
const HAS_LATIN_LETTER = /[A-Za-z]/;

/** Wrap each Latin run of an Arabic string in an LTR isolate. Idempotent. */
export function isolateLatin(text: string): string {
  if (!text || !HAS_ARABIC.test(text) || text.includes(LRI)) return text;
  return text.replace(LATIN_RUN, (run) =>
    HAS_LATIN_LETTER.test(run) ? `${LRI}${run}${PDI}` : run
  );
}

/**
 * Deep-copy a content tree, applying `isolateLatin` to every string stored
 * under an `ar` key. Everything else (en / fr / urls / ids / numbers) is
 * returned untouched. Types are preserved.
 */
export function withBidi<T>(tree: T): T {
  const walk = (node: unknown): unknown => {
    if (Array.isArray(node)) return node.map(walk);
    if (node && typeof node === "object") {
      const out: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
        out[key] =
          key === "ar" && typeof value === "string" ? isolateLatin(value) : walk(value);
      }
      return out;
    }
    return node;
  };
  return walk(tree) as T;
}
