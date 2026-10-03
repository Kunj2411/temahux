import type { Product } from "./types";
import { PRODUCTS_URL } from "./types";

const product: Product = {
  id: "voice-diary",
  index: "06",
  name: "Voice Diary",
  category: "Health technology",
  status: "Shipped",
  description:
    "Voice-to-text personal and clinical journaling with AI summarisation.",
  href: PRODUCTS_URL,
  form: "pulse",
};

export default product;