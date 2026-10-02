import type { Metadata } from "next";
import ProductPage from "@/components/products/ProductPage";
import { products } from "@/lib/products";
export const metadata: Metadata = { title: "T-Learn | Temahux Learning Systems", description: "A Temahux product exploration for structured programmes and guided learning.", alternates: { canonical: "https://services.temahux.com/products/lms" } };
export default function LMSPage(){const product=products.find(({slug})=>slug==="lms")!;return <ProductPage product={product}/>}
