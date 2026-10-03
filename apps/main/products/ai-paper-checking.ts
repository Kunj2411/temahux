import type { Product } from "./types";
import { PRODUCTS_URL } from "./types";

const product: Product = {
  id: "ai-paper-checking",
  index: "02",
  name: "AI Paper Checking",
  category: "Assessment",
  status: "Shipped",
  description:
    "An AI evaluation engine that grades answer sheets with consistency and speed.",
  href: PRODUCTS_URL,
  form: "lattice",
};

export default product;