import { PageTemplate } from "@academy/components/page-template";
import { PublicInquiryForm } from "@academy/components/public-inquiry-form";

export default function ContactPage() {
  return (
    <PageTemplate
      eyebrow="Contact"
      title="Talk with TEMAHUX."
      intro="We're here to help learners, families, educators, and institutions explore the right learning pathway."
    >
      <div className="page-card" style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 18 }}>
          <div>
            <h3>Get in touch</h3>
            <p>Email: <a href="mailto:kunj.joshi@temahux.com">kunj.joshi@temahux.com</a></p>
            <p>Location: Online learning, globally accessible</p>
          </div>
          <PublicInquiryForm kind="contact" />
        </div>
      </div>
    </PageTemplate>
  );
}

export const metadata = {
  title: "Contact TEMAHUX Academy",
  description: "Get in touch with TEMAHUX Academy. We help learners, families, educators, and institutions find the right learning pathway.",
  alternates: { canonical: "/academy/contact" },
};
