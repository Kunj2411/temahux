import { PageTemplate } from "@/components/page-template";
import { PublicInquiryForm } from "@/components/public-inquiry-form";

export default function SignupPage() {
  return (
    <PageTemplate eyebrow="Create account" title="Start your learning journey." intro="Set up an account to explore pathways, track progress, and build your portfolio.">
      <div className="page-card" style={{ maxWidth: 560, margin: "0 auto" }}>
        <PublicInquiryForm kind="signup" />
      </div>
    </PageTemplate>
  );
}
