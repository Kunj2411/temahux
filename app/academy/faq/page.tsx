import { CardGrid, PageTemplate } from "@academy/components/page-template";
import { faqItems } from "@academy/data/site-data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageTemplate
        eyebrow="FAQ"
        title="Questions learners often ask."
        intro="A quick overview of how TEMAHUX approaches learning, projects, and technology education."
      >
        <CardGrid
          items={faqItems.map((item) => ({
            title: item.question,
            description: item.answer,
            badge: "FAQ",
          }))}
        />
      </PageTemplate>
    </>
  );
}

export const metadata = {
  title: "FAQ — Questions About TEMAHUX Academy",
  description: "Answers to common questions about how TEMAHUX approaches learning, projects, and technology education.",
  alternates: { canonical: "/academy/faq" },
};
