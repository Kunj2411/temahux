type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="heading-2">{title}</h2>
      {description ? <p className="lead mt-4">{description}</p> : null}
    </div>
  );
}
