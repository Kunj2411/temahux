import { PageTemplate } from "@/components/page-template";
import { PublicInquiryForm } from "@/components/public-inquiry-form";

export default function ContactPage() {
  return (
    <PageTemplate
      eyebrow="Contact"
      title="Talk with TEMAHUX."
      intro="We’re here to help learners, families, educators, and institutions explore the right learning pathway."
    >
      <div className="page-card" style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 18 }}>
          <div>
            <h3>Get in touch</h3>
            <p>Email: hello@temahux.academy</p>
            <p>Location: Online learning, globally accessible</p>
          </div>
          <PublicInquiryForm kind="contact" />
        </div>
      </div>
    </PageTemplate>
  );
}
