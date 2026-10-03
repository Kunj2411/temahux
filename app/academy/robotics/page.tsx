import { CardGrid, PageTemplate } from "@academy/components/page-template";

export default function RoboticsPage() {
  return (
    <PageTemplate
      eyebrow="Robotics"
      title="Build intelligent machines."
      intro="Robotics brings together coding, electronics, sensors, movement, and systems thinking in an interactive, challenge-led format."
    >
      <CardGrid
        items={[
          { title: "Arduino", description: "Learn the foundations of programmable hardware and controls.", badge: "Hardware" },
          { title: "Sensors", description: "Read the world through input systems and real-world data.", badge: "Input" },
          { title: "Motors", description: "Understand movement, torque, and how action is expressed.", badge: "Motion" },
          { title: "Automation", description: "Design systems that react and adapt based on conditions.", badge: "Systems" },
          { title: "IoT", description: "Explore connected devices and smart environments.", badge: "Connected" },
          { title: "Robot Projects", description: "Bring a concept to life with hands-on iteration and testing.", badge: "Prototype" },
        ]}
      />
    </PageTemplate>
  );
}

export const metadata = { alternates: { canonical: "/academy/robotics" } };
