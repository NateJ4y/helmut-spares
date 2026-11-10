import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader, SiteFooter } from "../components/site-shell";

export default function ContactPage() {
 return <><SiteHeader/><main className="inner-page"><div className="container">
   <div className="page-intro"><span className="eyebrow">We're here to help</span><h1>Contact Helmut Spares</h1><p>Get in touch about parts, vehicle compatibility, store visits or general enquiries.</p></div>
   <div className="contact-page-grid">
    <section className="contact-details"><h2>Speak to the Team</h2><div className="contact-detail"><Phone/><span><small>Telephone</small><a href="tel:+27164213559">016 421 3559</a><a href="tel:+27164551520">016 455 1520</a></span></div><div className="contact-detail"><Mail/><span><small>Email</small><a href="mailto:info@helmutspares.co.za">info@helmutspares.co.za</a></span></div><div className="contact-detail"><MapPin/><span><small>Visit the store</small><b>19 Rhodes Avenue, Vereeniging, 1930, South Africa</b><a href="https://maps.google.com/?q=19+Rhodes+Avenue+Vereeniging" target="_blank" rel="noreferrer">Get directions <ArrowRight/></a></span></div><div className="hours contact-hours"><h3><Clock/> Trading Hours</h3><div><span>Monday – Thursday</span><b>09:00 – 17:00</b></div><div><span>Friday</span><b>09:00–12:00 · 14:00–17:00</b></div><div><span>Saturday</span><b>09:00 – 13:00</b></div><div><span>Sunday</span><b>Closed</b></div><small>Confirm public holiday hours before travelling.</small></div></section>
    <section className="contact-map"><div><MapPin/><b>HELMUT SPARES</b><span>19 Rhodes Avenue<br/>Vereeniging, Gauteng</span><a className="button orange" href="https://maps.google.com/?q=19+Rhodes+Avenue+Vereeniging" target="_blank" rel="noreferrer">Open Google Maps <ArrowRight/></a></div></section>
   </div>
   <div className="shop-bottom"><h2>Looking for a specific part?</h2><p>Send us your vehicle details and the part you need.</p><Link className="button orange" href="/request-a-part">Request a Part <ArrowRight/></Link></div>
 </div></main><SiteFooter/></>;
}
