import { PageTemplate } from "@academy/components/page-template";
import { PublicInquiryForm } from "@academy/components/public-inquiry-form";

export default function SignupPage() {
  return (
    <PageTemplate eyebrow="Create account" title="Start your learning journey." intro="Set up an account to explore pathways, track progress, and build your portfolio.">
      <div className="page-card" style={{ maxWidth: 560, margin: "0 auto" }}>
        <PublicInquiryForm kind="signup" />
      </div>
    </PageTemplate>
  );
}

export const metadata = {
  title: "Sign Up — Start Learning at TEMAHUX Academy",
  description: "Create your TEMAHUX Academy account to explore learning pathways, track your progress, and build a portfolio of real projects.",
  alternates: { canonical: "/academy/signup" },
  robots: { index: false, follow: true },
};
