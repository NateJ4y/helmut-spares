import Link from "next/link";
import { MapPin, Phone, Mail, Menu } from "lucide-react";

export function SiteHeader() {
  return <header className="site-header">
    <div className="topbar"><div className="container topbar-inner">
      <div><a href="tel:+27164213559"><Phone/>016 421 3559</a><span>·</span><span><MapPin/>19 Rhodes Avenue, Vereeniging</span></div>
      <div><span>Mon–Thu 09:00–17:00 · Fri split hours · Sat 09:00–13:00</span><a href="mailto:info@helmutspares.co.za"><Mail/>Contact the team</a></div>
    </div></div>
    <div className="nav-wrap"><div className="container nav-inner">
      <Link href="/" className="brand"><b>H</b><span><strong>HELMUT SPARES</strong><small>EST. 1975 · VEREENIGING</small></span></Link>
      <nav><Link href="/shop">Shop</Link><Link href="/request-a-part">Request a Part</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
      <div className="nav-actions"><Link className="search-link" href="/shop">Find a part</Link><Link className="button green" href="/request-a-part">Request a Part</Link><Link className="mobile-menu" href="/shop" aria-label="Menu"><Menu/></Link></div>
    </div></div>
  </header>;
}

export function SiteFooter() {
  return <footer className="footer"><div className="container footer-grid">
    <div><b className="footer-logo">HELMUT SPARES<span>.</span></b><p>Volkswagen and Audi parts specialists in Vereeniging. Established in 1975.</p></div>
    <div><h4>Explore</h4><Link href="/shop">Shop</Link><Link href="/request-a-part">Request a part</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></div>
    <div><h4>Contact</h4><p>19 Rhodes Avenue<br/>Vereeniging, 1930<br/>South Africa</p><a href="tel:+27164213559">016 421 3559</a><a href="tel:+27164551520">016 455 1520</a><a href="mailto:info@helmutspares.co.za">info@helmutspares.co.za</a></div>
    <div><h4>Store Hours</h4><p>Mon–Thu: 09:00–17:00<br/>Fri: 09:00–12:00 & 14:00–17:00<br/>Sat: 09:00–13:00<br/>Sun: Closed</p></div>
  </div><div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Helmut Spares. All rights reserved.</span><span>Vereeniging · South Africa · Est. 1975</span></div></div></footer>;
}
