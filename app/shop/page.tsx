import Link from "next/link";
import { ArrowRight, Search, CarFront, Wrench, Disc3, ShieldCheck, Gauge, Package } from "lucide-react";
import { SiteHeader, SiteFooter } from "../components/site-shell";

const categories = [
  ["Rubbers & Seals","Window seals, door rubbers and weatherstrips",ShieldCheck],
  ["Chrome & Trim","Bumpers, handles and exterior details",CarFront],
  ["Brakes & Hydraulics","Brake components and repair parts",Disc3],
  ["Electrical","Starters, alternators and ignition parts",Gauge],
  ["Engine & Mechanical","Engine components, gaskets and kits",Wrench],
  ["Suspension & Steering","Steering and suspension components",Wrench],
  ["Interior & Carpets","Interior trim, carpets and fittings",Package],
  ["Accessories","Accessories and useful extras",CarFront],
] as const;

export default function ShopPage() {
 return <><SiteHeader/><main className="inner-page"><div className="container">
   <div className="page-intro"><span className="eyebrow">Helmut Spares catalogue</span><h1>Shop VW & Audi Parts</h1><p>Browse by category or send us a parts enquiry if you need help identifying the correct component.</p></div>
   <form className="shop-search" action="/request-a-part"><label htmlFor="part-search"><Search/> What part are you looking for?</label><input id="part-search" name="part" placeholder="e.g. Beetle door rubber, Golf alternator..." /><button className="button orange">Can't find it? Enquire <ArrowRight/></button></form>
   <div className="shop-notice"><strong>Catalogue update in progress</strong><p>We are organising product listings and confirming current pricing, availability and vehicle fitment. Contact us before placing an order so the team can verify the part.</p><Link href="/request-a-part">Request help with a part <ArrowRight/></Link></div>
   <div className="section-head shop-heading"><div><span className="eyebrow">Explore by system</span><h2>Parts Categories</h2></div><p>Choose a category to start your enquiry. Online stock and checkout will be enabled as verified catalogue data is added.</p></div>
   <div className="category-grid">{categories.map(([title,desc,Icon],i)=><Link className="category-card" href={"/request-a-part?category="+encodeURIComponent(title)} key={title}><i><Icon/></i><small>0{i+1} / CATEGORY</small><h3>{title}</h3><p>{desc}</p><b>Enquire about parts <ArrowRight/></b></Link>)}</div>
   <div className="shop-bottom"><h2>Looking for something specific?</h2><p>Share the vehicle model, year and part details. A photo or OEM number can help us identify it.</p><Link className="button orange" href="/request-a-part">Request a Part <ArrowRight/></Link></div>
 </div></main><SiteFooter/></>;
}
