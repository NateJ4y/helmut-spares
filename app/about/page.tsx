import Link from "next/link";
import { ArrowRight, BadgeCheck, CarFront, Wrench } from "lucide-react";
import { SiteHeader, SiteFooter } from "../components/site-shell";

export default function AboutPage() {
 return <><SiteHeader/><main className="inner-page"><div className="container">
   <section className="about-hero"><div><span className="eyebrow">Our story · Vereeniging, South Africa</span><h1>Built Around a Passion for Volkswagen.</h1><p>Helmut Spares has been serving the VW parts market since 1975. From classic Beetles to later Volkswagen models and Audi platforms, the focus is helping customers find the parts they need.</p><Link className="button orange" href="/shop">Explore the Shop <ArrowRight/></Link></div><div className="about-mark"><span>HELMUT</span><b>1975</b><small>VEREENIGING · SOUTH AFRICA</small></div></section>
   <section className="about-story"><div><span className="eyebrow">More than a parts counter</span><h2>Experience that starts with the right question.</h2></div><div><p>Finding the right automotive part is about more than matching a name. Vehicle model, year, engine and exact specification can all matter. If you are unsure, our parts enquiry route gives you a way to share those details before you buy.</p><p>We continue to build the online catalogue around the needs of VW and Audi owners, while keeping personal parts assistance at the centre of the experience.</p></div></section>
   <div className="about-values"><article><BadgeCheck/><h3>Since 1975</h3><p>A long-standing presence in the VW parts market.</p></article><article><CarFront/><h3>VW & Audi Focus</h3><p>Parts enquiries for classic and modern vehicles.</p></article><article><Wrench/><h3>Parts Assistance</h3><p>Help checking details when fitment is uncertain.</p></article></div>
   <section className="shop-bottom"><h2>Need help finding a part?</h2><p>Send the vehicle details and the part you are looking for.</p><Link className="button orange" href="/request-a-part">Request a Part <ArrowRight/></Link></section>
 </div></main><SiteFooter/></>;
}
