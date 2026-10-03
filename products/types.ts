/**
 * Product registry contracts.
 *
 * To add a product: create a file in this folder that default-exports a `Product`,
 * then list it in ./index.ts. The Products scene reads the registry and lays out
 * itself automatically — no page component needs to change.
 */

/** Procedural representation used by the 3D scene. */
export type ProductForm = "stack" | "lattice" | "route" | "voice" | "pulse";

export type ProductStatus = "Shipped" | "In development" | "Research";

export interface Product {
  /** Stable identifier. Used as the React key and the DOM id. */
  id: string;
  /** Two digit index, assigned by the registry. */
  index: string;
  name: string;
  category: string;
  status: ProductStatus;
  /** One sentence. Never more. */
  description: string;
  /** Optional internal destination. */
  href?: string;
  /** Procedural 3D representation. */
  form: ProductForm;
}

export const PRODUCTS_URL = "/services/products/";