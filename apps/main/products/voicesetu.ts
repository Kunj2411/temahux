import type { Product } from "./types";
import { PRODUCTS_URL } from "./types";

const product: Product = {
  id: "voicesetu",
  index: "05",
  name: "VoiceSetu",
  category: "Voice AI",
  status: "Shipped",
  description:
    "A voice-first assistant that bridges language barriers for citizens and institutions.",
  href: PRODUCTS_URL,
  form: "voice",
};

export default product;