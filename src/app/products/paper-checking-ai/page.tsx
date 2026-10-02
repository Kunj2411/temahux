import type { Metadata } from "next";
import ProductPage from "@/components/products/ProductPage";
import { products } from "@/lib/products";
export const metadata: Metadata = { title: "Paper Checking AI | Temahux", description: "An AI-assisted assessment product exploration that keeps educators involved in review.", alternates: { canonical: "https://services.temahux.com/products/paper-checking-ai" } };
export default function PaperCheckingAIPage(){const product=products.find(({slug})=>slug==="paper-checking-ai")!;return <ProductPage product={product}/>}
