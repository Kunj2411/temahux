import type { Product } from "./types";
import { PRODUCTS_URL } from "./types";

const product: Product = {
  id: "university-os",
  index: "01",
  name: "University OS",
  category: "Education infrastructure",
  status: "Shipped",
  description:
    "An institutional operating system for admissions, academic workflows, faculty, examinations and analytics.",
  href: PRODUCTS_URL,
  form: "stack",
};

export default product;