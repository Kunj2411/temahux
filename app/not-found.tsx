import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="nf-shell">
        <nav className="nf-nav">
          <Link href="/" aria-label="TEMAHUX home">
            <img src="/temahux-symbol.png" alt="" width={26} height={26} />
            <span>TEMAHUX</span>
          </Link>
        </nav>
        <div className="nf-body">
          <p className="nf-code">404</p>
          <h1 className="nf-title">Page not found.</h1>
          <p className="nf-lead">
            This page doesn&apos;t exist or may have moved. Here are some useful places to go:
          </p>
          <nav className="nf-links" aria-label="Helpful links">
            <Link href="/">TEMAHUX Home ↗</Link>
            <Link href="/what-is-temahux">What is TEMAHUX? ↗</Link>
            <Link href="/services">TEMAHUX Services ↗</Link>
            <Link href="/services/products">TEMAHUX Products ↗</Link>
            <Link href="/academy">TEMAHUX Academy ↗</Link>
            <Link href="/services/contact">Contact TEMAHUX ↗</Link>
          </nav>
        </div>
      </main>
      <style>{`
        body{margin:0;background:#eee;color:#171411;font-family:"Outfit","Helvetica Neue",Arial,sans-serif}
        .nf-shell{min-height:100svh;display:flex;flex-direction:column;max-width:1100px;margin:0 auto;padding:0 clamp(20px,5vw,60px)}
        .nf-nav{display:flex;align-items:center;gap:9px;padding:18px 0;font-size:14px;font-weight:500;letter-spacing:.1em}
        .nf-nav a{display:flex;align-items:center;gap:9px;text-decoration:none;color:#171411}
        .nf-nav img{width:26px;height:26px;object-fit:contain;filter:grayscale(1) sepia(.5) saturate(1.25)}
        .nf-body{flex:1;display:flex;flex-direction:column;justify-content:center;padding:clamp(40px,8vh,80px) 0}
        .nf-code{margin:0 0 12px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#8e3d29}
        .nf-title{margin:0 0 20px;font-size:clamp(42px,8vw,88px);font-weight:300;line-height:.94;letter-spacing:-.06em}
        .nf-lead{margin:0 0 32px;font-size:16px;line-height:1.5;color:#6d665f;max-width:480px}
        .nf-links{display:flex;flex-direction:column;gap:0;border-top:1px solid rgba(23,20,17,.12);max-width:480px}
        .nf-links a{display:flex;justify-content:space-between;padding:13px 0;border-bottom:1px solid rgba(23,20,17,.1);font-size:14px;text-decoration:none;color:#171411}
        .nf-links a:hover{color:#8e3d29}
        a:focus-visible{outline:2px solid #8e3d29;outline-offset:4px;border-radius:3px}
      `}</style>
    </>
  );
}
