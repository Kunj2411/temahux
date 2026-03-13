import type { Metadata } from "next";
import ServicesPageClient from "@/components/services/ServicesPageClient";

export const metadata: Metadata = {
    title: "Digital Growth Services | Web Development, Marketing & AI Automation - Temahux",
    description: "Temahux offers professional web development, branding, digital marketing, social media management, and AI automation services. Transform your business with our expert solutions. Starting from ₹3,000.",
    keywords: "web development services, digital marketing, AI automation, branding design, social media management, business website, e-commerce development",
    openGraph: {
        title: "Digital Growth Services for Modern Businesses - Temahux",
        description: "Professional web development, branding, marketing, and AI automation services to grow your business.",
        type: "website",
    },
};

export default function ServicesPage() {
    return <ServicesPageClient />;
}
