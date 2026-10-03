import type { Metadata } from "next";
import ProductPage from "@services/components/products/ProductPage";
import { products } from "@services/lib/products";
export const metadata: Metadata = { title: "Paper Checking AI | Temahux", description: "An AI-assisted assessment product exploration that keeps educators involved in review.", alternates: { canonical: "/services/products/paper-checking-ai" } };
export default function PaperCheckingAIPage(){const product=products.find(({slug})=>slug==="paper-checking-ai")!;return <ProductPage product={product}/>}
