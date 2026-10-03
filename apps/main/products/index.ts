import type { Product } from "./types";
import aiPaperChecking from "./ai-paper-checking";
import conductExamOnline from "./conduct-exam-online";
import gpsRouteSimulator from "./gps-route-simulator";
import universityOs from "./university-os";
import voiceDiary from "./voice-diary";
import voiceSetu from "./voicesetu";

/**
 * Ordered registry of shipped TEMAHUX products.
 * This array is the single source of truth for the Products scene and the
 * Products chapter. Adding a product is: create a file, add one line here.
 */
const registry: Product[] = [
  universityOs,
  aiPaperChecking,
  conductExamOnline,
  gpsRouteSimulator,
  voiceSetu,
  voiceDiary,
];

export const products: readonly Product[] = registry.map((product, position) => ({
  ...product,
  index: String(position + 1).padStart(2, "0"),
}));

export { PRODUCTS_URL } from "./types";
export type { Product, ProductForm, ProductStatus } from "./types";