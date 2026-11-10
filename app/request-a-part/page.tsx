import { ArrowRight, Camera, Mail, Phone, Wrench } from "lucide-react";
import { SiteHeader, SiteFooter } from "../components/site-shell";

export default function RequestPartPage() {
 return <><SiteHeader/><main className="inner-page"><div className="container request-layout">
   <div className="page-intro"><span className="eyebrow">Parts identification & enquiries</span><h1>Request a Part</h1><p>Can't find the part online? Tell us what you're working on and give us as much detail as possible. Our team can use the information to help check the correct component.</p>
    <div className="request-help"><div><Wrench/><span><b>Vehicle details</b><small>Make, model, year and engine/variant if known.</small></span></div><div><Camera/><span><b>Part information</b><small>Part name, OEM number or a clear photo.</small></span></div><div><Phone/><span><b>Contact details</b><small>Include a number or email where we can reach you.</small></span></div></div>
   </div>
   <form className="request-form" action="mailto:info@helmutspares.co.za" method="post" encType="text/plain">
    <h2>Tell us what you need</h2><p>Complete the details below. Your email application will open with your enquiry.</p>
    <div className="form-grid"><label>Your name<input name="Name" required placeholder="Full name"/></label><label>Phone number<input name="Phone" required type="tel" placeholder="Your contact number"/></label><label>Email address<input name="Email" type="email" placeholder="you@example.com"/></label><label>Vehicle make<select name="Vehicle make" defaultValue="Volkswagen"><option>Volkswagen</option><option>Audi</option><option>Other</option></select></label><label>Model<input name="Vehicle model" required placeholder="e.g. Beetle, Golf, Polo, A3"/></label><label>Year / variant<input name="Year and variant" placeholder="e.g. 1972, 1.6, 2.0 TDI"/></label><label className="form-wide">Part required<input name="Part required" required placeholder="Describe the part you are looking for"/></label><label className="form-wide">OEM / part number (if known)<input name="OEM or part number" placeholder="Optional"/></label><label className="form-wide">Additional information<textarea name="Additional information" rows={4} placeholder="Anything else that may help identify the correct part?"/></label></div>
    <button className="button orange" type="submit">Prepare Parts Enquiry <ArrowRight/></button><small className="form-note">This opens your email application; it does not upload files or submit to a website database. To send photos, attach them to the email before sending.</small>
   </form>
 </div></main><SiteFooter/></>;
}
