import { CardGrid, PageTemplate } from "@academy/components/page-template";

export default function ARVRPage() {
  return (
    <PageTemplate
      eyebrow="AR / VR"
      title="Design immersive experiences."
      intro="Exploration in spatial computing, 3D thinking, interactive environments, and virtual spaces helps students prototype compelling digital worlds."
    >
      <CardGrid
        items={[
          { title: "AR", description: "Blend digital layers into the physical world through interactive experiences.", badge: "Augmented" },
          { title: "VR", description: "Build compelling environments designed for presence and immersion.", badge: "Virtual" },
          { title: "3D", description: "Learn scale, perspective, hierarchy, and scene composition.", badge: "Spatial" },
          { title: "Unity", description: "Prototype interactive systems with a creator-friendly workflow.", badge: "Engine" },
          { title: "Interactive Environments", description: "Guide how users move, react, and explore a digital world.", badge: "Interaction" },
          { title: "Project Showcase", description: "Create immersive stories that connect design, interaction, and technical thinking.", badge: "Showcase" },
        ]}
      />
    </PageTemplate>
  );
}

export const metadata = {
  title: "AR / VR — Design Immersive & Spatial Experiences",
  description: "Explore augmented reality, virtual reality, 3D design, and Unity at TEMAHUX Academy. Build compelling digital worlds and interactive environments.",
  alternates: { canonical: "/academy/ar-vr" },
};
