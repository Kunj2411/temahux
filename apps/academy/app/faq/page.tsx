import { CardGrid, PageTemplate } from "@/components/page-template";
import { faqItems } from "@/data/site-data";

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
