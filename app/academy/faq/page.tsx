import { CardGrid, PageTemplate } from "@academy/components/page-template";
import { faqItems } from "@academy/data/site-data";

export default function FAQPage() {
  return (
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
  );
}

export const metadata = {
  title: "FAQ — Questions About TEMAHUX Academy",
  description: "Answers to common questions about how TEMAHUX approaches learning, projects, and technology education.",
  alternates: { canonical: "/academy/faq" },
};
