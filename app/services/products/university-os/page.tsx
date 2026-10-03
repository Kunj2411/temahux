import type { Metadata } from "next";
import ProductPage from "@services/components/products/ProductPage";
import { products } from "@services/lib/products";
export const metadata: Metadata = { title: "University OS | Temahux", description: "A Temahux product exploration for connected university workflows.", alternates: { canonical: "/services/products/university-os" } };
export default function UniversityOSPage(){const product=products.find(({slug})=>slug==="university-os")!;return <ProductPage product={product}/>}
