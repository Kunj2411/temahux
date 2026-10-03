import Link from "next/link";

export function PageTemplate({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container page-template">
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {intro ? <p className="lead">{intro}</p> : null}
        </div>
      </div>
      {children}
    </div>
  );
}

export function CardGrid({ items }: { items: Array<{ title: string; description: string; href?: string; badge?: string }> }) {
  return (
    <div className="card-list">
      {items.map((item) => {
        const body = (
          <div key={item.title} className="page-card">
            {item.badge ? <span className="badge">{item.badge}</span> : null}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );

        return item.href ? <Link key={item.title} href={item.href}>{body}</Link> : body;
      })}
    </div>
  );
}
