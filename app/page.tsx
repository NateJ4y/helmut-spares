import Link from "next/link";
import { ArrowRight, BadgeCheck, CarFront, Disc3, Gauge, Package, ShieldCheck, Truck, Wrench } from "lucide-react";
import { SiteHeader, SiteFooter } from "./components/site-shell";

const categories = [
  ["Rubbers & Seals","Window seals, door rubbers and weatherstrips",ShieldCheck],
  ["Chrome & Trim","Bumpers, handles and exterior details",CarFront],
  ["Brakes & Hydraulics","Brake components and repair parts",Disc3],
  ["Electrical","Starters, alternators and ignition parts",Gauge],
  ["Engine & Mechanical","Engine components, gaskets and kits",Wrench],
  ["Suspension & Steering","Steering and suspension components",Truck],
  ["Interior","Carpets, trim, knobs and fittings",Package],
  ["Accessories","Useful extras for your Volkswagen",CarFront],
] as const;

export default function Home() {
  return <><SiteHeader/><main>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy"><div className="pill"><BadgeCheck/> ESTABLISHED 1975 · VEREENIGING</div>
        <h1>Keeping Beetles<br/>on the road <em>since 1975.</em></h1>
        <p>Specialist parts for classic Volkswagens, modern VW models and Audi platforms. Browse the shop, or let our team help identify the right part for your vehicle.</p>
        <div className="hero-buttons"><Link className="button orange" href="/shop">Explore the Shop <ArrowRight/></Link><Link className="button light" href="/request-a-part"><Wrench/> Request a Part</Link></div>
        <div className="hero-meta"><span><BadgeCheck/> Specialist parts experience</span><span><Truck/> Ask us about delivery options</span></div>
      </div>
      <div className="hero-visual"><div className="hero-photo"><div><b>HELMUT SPARES</b><small>Vereeniging · South Africa</small></div><span>SINCE<br/>1975</span></div><div className="hero-note"><Wrench/><span><b>Looking for a specific part?</b><small>Send us the details and our team can assist.</small></span></div></div>
    </div></section>
    <section className="trust"><div className="container trust-grid">
      {[[BadgeCheck,"Since 1975","Decades of specialist parts experience"],[Package,"VW & Audi","Parts for classic and modern vehicles"],[Truck,"Delivery enquiries","Ask about delivery to your area"],[ShieldCheck,"Fitment guidance","Get help checking the right part"]].map(([Icon,title,desc]:any)=><div className="trust-card" key={title}><i><Icon/></i><span><b>{title}</b><small>{desc}</small></span></div>)}
    </div></section>
    <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">Browse the catalogue</span><h2>Shop By Category</h2></div><p>Explore common parts categories. Product availability and fitment should be confirmed before ordering.</p></div>
      <div className="category-grid">{categories.map(([title,desc,Icon],i)=><Link className="category-card" href="/shop" key={title}><i><Icon/></i><small>0{i+1} / CATEGORY</small><h3>{title}</h3><p>{desc}</p><b>Explore the shop <ArrowRight/></b></Link>)}</div>
    </div></section>
    <section className="parts-banner"><div className="container banner-grid"><div><span className="eyebrow">Parts counter · Special orders</span><h2>Can't Find Your<br/>Exact Part Online?</h2><p>Send us your vehicle details, part description or OEM number. Include a photo if it helps identify what you need.</p></div><div className="banner-actions"><Link className="button white" href="/request-a-part">Request a Part <ArrowRight/></Link><Link className="button whats" href="/contact">Contact the Team</Link></div></div></section>
    <section className="section visit"><div className="container"><div className="section-head"><div><span className="eyebrow">Physical counter & collections</span><h2>Visit Our Vereeniging Store</h2></div><p>Speak to the team or visit the parts counter at Rhodes Avenue.</p></div><div className="visit-grid"><div className="map-panel"><div><b>HELMUT SPARES HQ</b><span>19 Rhodes Avenue, Vereeniging, Gauteng, 1930</span><a href="https://maps.google.com/?q=19+Rhodes+Avenue+Vereeniging" target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight/></a></div></div><div className="contact-panel"><h3>Get in Touch</h3><p>For product enquiries, fitment questions and store information, contact the Helmut Spares team.</p><p><strong>016 421 3559</strong><br/>info@helmutspares.co.za</p><Link className="button orange" href="/contact">Contact Details <ArrowRight/></Link></div></div></div></section>
  </main><SiteFooter/></>;
}
