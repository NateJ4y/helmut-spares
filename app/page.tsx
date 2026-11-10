import { ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, Box, CarFront, Clock3, MapPin, Search, ShieldCheck, Wrench } from "lucide-react";

const categories = [
  { number: "01", title: "Engine & Mechanical", detail: "The components that keep you moving.", icon: Wrench },
  { number: "02", title: "Braking & Suspension", detail: "Control, stability and stopping power.", icon: ShieldCheck },
  { number: "03", title: "Body & Exterior", detail: "From restoration details to replacements.", icon: CarFront },
  { number: "04", title: "Electrical & Ignition", detail: "The parts behind every reliable start.", icon: Box },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="bg-helmut-ink px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[.18em] text-white/75">
        Volkswagen & Audi parts specialists <span className="mx-2 text-helmut-orange">/</span> Serving drivers since 1975
      </div>

      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
        <a href="#" className="flex items-center gap-3" aria-label="Helmut Spares home">
          <div className="flex h-11 w-11 items-center justify-center bg-helmut-orange text-xl font-black text-white">H</div>
          <div className="leading-none">
            <div className="display text-[25px] font-black uppercase tracking-[-.06em]">Helmut<span className="text-helmut-orange">.</span></div>
            <div className="mt-1 text-[9px] font-bold uppercase tracking-[.23em] text-helmut-muted">Motor Spares</div>
          </div>
        </a>
        <nav className="hidden items-center gap-9 text-[11px] font-bold uppercase tracking-[.12em] lg:flex">
          <a className="transition hover:text-helmut-orange" href="#shop">Shop parts</a>
          <a className="transition hover:text-helmut-orange" href="#specialists">Why Helmut</a>
          <a className="transition hover:text-helmut-orange" href="#request">Request a part</a>
          <a className="transition hover:text-helmut-orange" href="#contact">Contact</a>
        </nav>
        <a href="#request" className="hidden items-center gap-3 bg-helmut-green px-5 py-3 text-[10px] font-extrabold uppercase tracking-[.12em] text-white transition hover:bg-helmut-orange sm:flex">
          Need a part? <ArrowUpRight size={15} />
        </a>
        <a href="#request" className="text-helmut-ink lg:hidden"><ArrowUpRight /></a>
      </header>

      <section className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:pb-28 lg:pt-16">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-helmut-orange" />
            <span className="eyebrow text-helmut-green">Vereeniging · South Africa · Est. 1975</span>
          </div>
          <h1 className="display max-w-[780px] text-[clamp(4rem,8.5vw,8.5rem)] font-black uppercase leading-[.82]">
            The right<br />part. <span className="text-helmut-orange">The</span><br />right people.
          </h1>
          <p className="mt-9 max-w-[490px] text-[15px] leading-7 text-helmut-muted">
            Keeping Volkswagens on the road and Audis running right. Find the part you need, or let our specialists help you track it down.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#shop" className="inline-flex items-center gap-5 bg-helmut-orange px-6 py-4 text-[11px] font-extrabold uppercase tracking-[.12em] text-white transition hover:bg-helmut-ink">Explore parts <ArrowRight size={16} /></a>
            <a href="#request" className="inline-flex items-center gap-5 border border-helmut-ink/20 px-6 py-4 text-[11px] font-extrabold uppercase tracking-[.12em] transition hover:border-helmut-green hover:text-helmut-green">Request a part <ArrowUpRight size={16} /></a>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-helmut-ink/15 pt-6">
            <div><div className="display text-3xl font-black">1975</div><div className="eyebrow mt-1 text-helmut-muted">Established</div></div>
            <div className="h-12 w-px bg-helmut-ink/15" />
            <div><div className="display text-3xl font-black">VW <span className="text-helmut-orange">&</span> Audi</div><div className="eyebrow mt-1 text-helmut-muted">Our speciality</div></div>
            <div className="h-12 w-px bg-helmut-ink/15" />
            <div><div className="display text-3xl font-black">SA-wide</div><div className="eyebrow mt-1 text-helmut-muted">Delivery available*</div></div>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[610px]">
          <div className="absolute right-0 top-0 h-[88%] w-[88%] bg-helmut-green" />
          <div className="grid-paper absolute bottom-0 left-0 h-[42%] w-[48%] opacity-70" />
          <div className="absolute right-[7%] top-[8%] flex h-[75%] w-[82%] items-center justify-center border border-white/20 bg-[#263b36]">
            <div className="absolute inset-5 border border-white/10" />
            <div className="relative px-8 text-center text-white">
              <div className="eyebrow text-white/55">A legacy built on parts</div>
              <div className="display mt-5 text-[clamp(5rem,11vw,10rem)] font-black uppercase leading-[.78] tracking-[-.08em]">Built<br /><span className="text-helmut-orange">to</span><br />last.</div>
              <div className="mt-7 text-[10px] font-bold uppercase tracking-[.24em] text-white/55">Volkswagen · Audi · Since 1975</div>
            </div>
          </div>
          <div className="absolute bottom-[3%] left-[2%] max-w-[230px] bg-helmut-paper p-5 shadow-soft">
            <div className="flex items-center gap-2 text-helmut-orange"><BadgeCheck size={16} /><span className="eyebrow">Specialist knowledge</span></div>
            <p className="mt-3 text-sm leading-6 text-helmut-ink">Not sure what fits? Talk to people who know their parts.</p>
          </div>
          <div className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center bg-helmut-orange text-white"><ArrowDownRight /></div>
        </div>
      </section>

      <section id="shop" className="bg-helmut-paper px-6 py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1296px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><div className="eyebrow text-helmut-orange">Find what you need</div><h2 className="display mt-3 text-5xl font-black uppercase leading-none md:text-6xl">Parts for the<br />road ahead.</h2></div>
            <p className="max-w-[390px] text-sm leading-6 text-helmut-muted">From classic Beetle restoration to everyday VW and Audi maintenance. Start with a category or tell us what you're looking for.</p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => {
              const Icon = item.icon;
              return <a key={item.number} href="#request" className="group border border-helmut-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-helmut-orange hover:shadow-soft">
                <div className="flex items-center justify-between"><span className="eyebrow text-helmut-orange">{item.number} / CATEGORY</span><Icon size={21} strokeWidth={1.5} className="text-helmut-green" /></div>
                <h3 className="display mt-12 text-2xl font-black uppercase">{item.title}</h3>
                <p className="mt-2 min-h-10 text-xs leading-5 text-helmut-muted">{item.detail}</p>
                <div className="mt-6 flex items-center justify-between border-t border-helmut-ink/10 pt-4 text-[10px] font-extrabold uppercase tracking-[.13em]"><span>Explore category</span><ArrowUpRight size={15} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              </a>;
            })}
          </div>
        </div>
      </section>

      <section id="specialists" className="grid bg-helmut-green text-white lg:grid-cols-2">
        <div className="grid-paper flex min-h-[360px] items-center justify-center p-10 lg:min-h-[500px]">
          <div className="max-w-sm">
            <div className="eyebrow text-white/55">Almost five decades of know-how</div>
            <div className="display mt-5 text-7xl font-black uppercase leading-[.83]">Driven<br />by <span className="text-helmut-orange">detail.</span></div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-8 py-16 lg:px-20">
          <div className="eyebrow text-[#F28A5C]">Why Helmut Spares</div>
          <h2 className="display mt-4 max-w-lg text-5xl font-black uppercase leading-[.95]">Good parts matter. Good advice does too.</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">Finding the correct part can be the difference between a quick fix and a long weekend in the garage. Our team helps you find your way through the details.</p>
          <div className="mt-9 space-y-4 text-sm">
            <div className="flex items-center gap-3"><BadgeCheck className="text-[#F28A5C]" size={18} /> Specialist VW & Audi parts knowledge</div>
            <div className="flex items-center gap-3"><Box className="text-[#F28A5C]" size={18} /> Parts for classic and modern vehicles</div>
            <div className="flex items-center gap-3"><MapPin className="text-[#F28A5C]" size={18} /> Based in Vereeniging, serving South Africa</div>
          </div>
        </div>
      </section>

      <section id="request" className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1296px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><div className="eyebrow text-helmut-orange">Can't find it online?</div><h2 className="display mt-4 text-6xl font-black uppercase leading-[.88] md:text-7xl">Let's track<br />that part<br /><span className="text-helmut-orange">down.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-helmut-muted">Send us your vehicle details and tell us what you're after. If you have a part number or a photo, even better.</p></div>
          <div className="bg-helmut-paper p-8 shadow-soft md:p-12">
            <div className="eyebrow text-helmut-green">Parts enquiry</div>
            <h3 className="display mt-3 text-3xl font-black uppercase">Need something specific?</h3>
            <p className="mt-3 text-sm leading-6 text-helmut-muted">Our assisted parts request service is being set up. In the meantime, contact the team directly and we'll help you take it from there.</p>
            <a href="mailto:info@helmutspares.co.za?subject=Helmut%20Spares%20-%20Parts%20Enquiry" className="mt-7 inline-flex items-center gap-5 bg-helmut-orange px-6 py-4 text-[10px] font-extrabold uppercase tracking-[.13em] text-white transition hover:bg-helmut-ink">Email a parts enquiry <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-helmut-ink px-6 py-14 text-white lg:px-12">
        <div className="mx-auto grid max-w-[1296px] gap-10 md:grid-cols-3">
          <div><div className="display text-3xl font-black uppercase">Helmut<span className="text-helmut-orange">.</span></div><p className="mt-3 max-w-xs text-xs leading-6 text-white/50">Volkswagen & Audi parts specialists. Keeping drivers and their cars moving since 1975.</p></div>
          <div><div className="eyebrow text-white/45">Find us</div><p className="mt-4 text-sm leading-6">19 Rhodes Avenue<br />Vereeniging, 1930<br />South Africa</p><a className="mt-3 inline-flex items-center gap-2 text-sm text-[#F28A5C]" href="https://maps.google.com/?q=19+Rhodes+Avenue+Vereeniging">Get directions <ArrowUpRight size={14} /></a></div>
          <div><div className="eyebrow text-white/45">Get in touch</div><a className="mt-4 block text-sm hover:text-[#F28A5C]" href="tel:+27164213559">016 421 3559</a><a className="mt-2 block text-sm hover:text-[#F28A5C]" href="tel:+27164551520">016 455 1520</a><a className="mt-2 block text-sm hover:text-[#F28A5C]" href="mailto:info@helmutspares.co.za">info@helmutspares.co.za</a><div className="mt-5 flex items-center gap-2 text-xs text-white/45"><Clock3 size={14} /> Hours to be confirmed</div></div>
        </div>
        <div className="mx-auto mt-12 max-w-[1296px] border-t border-white/10 pt-5 text-[10px] uppercase tracking-[.12em] text-white/35">© {new Date().getFullYear()} Helmut Spares. All rights reserved. <span className="float-right">Built for the long run.</span></div>
      </footer>
    </main>
  );
}