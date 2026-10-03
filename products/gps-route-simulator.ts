import type { Product } from "./types";
import { PRODUCTS_URL } from "./types";

const product: Product = {
  id: "gps-route-simulator",
  index: "04",
  name: "GPS Route Simulator",
  category: "Logistics",
  status: "Shipped",
  description:
    "Route planning and simulation for logistics fleets, optimising cost and time.",
  href: PRODUCTS_URL,
  form: "route",
};

export default product;