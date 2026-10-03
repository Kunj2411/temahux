import { PageTemplate } from "@academy/components/page-template";

export default function TermsPage() {
  return (
    <PageTemplate
      eyebrow="Terms"
      title="A clear learning agreement."
      intro="This page outlines the general expectations for educational interaction, access, and platform use."
    >
      <div className="page-card">
        <h3>Use of platform</h3>
        <p>Users are expected to engage respectfully, pursue learning honestly, and use the platform for educational purposes.</p>
        <p>TEMAHUX may update policies, structure, and access as the academy expands and evolves.</p>
      </div>
    </PageTemplate>
  );
}

export const metadata = {
  title: "Terms of Use — TEMAHUX Academy",
  description: "Terms and expectations for educational interaction, access, and platform use at TEMAHUX Academy.",
  alternates: { canonical: "/academy/terms" },
};
