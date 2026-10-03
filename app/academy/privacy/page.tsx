import { PageTemplate } from "@academy/components/page-template";

export default function PrivacyPage() {
  return (
    <PageTemplate
      eyebrow="Privacy"
      title="Your learning data is handled with care."
      intro="This page is a placeholder for the final privacy policy and the operational details that govern data use and learner information."
    >
      <div className="page-card">
        <h3>Overview</h3>
        <p>TEMAHUX values learner trust, personal privacy, and responsible data practices.</p>
        <p>We use data to support learning progress, improve educational experiences, and maintain secure access to our platform.</p>
        <p>Final details will be published in the official policy as the academy expands its product offerings.</p>
      </div>
    </PageTemplate>
  );
}

export const metadata = {
  title: "Privacy Policy — TEMAHUX Academy",
  description: "How TEMAHUX Academy handles learner data, personal privacy, and responsible data practices.",
  alternates: { canonical: "/academy/privacy" },
};
