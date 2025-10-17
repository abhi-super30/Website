import HomeClient from "./page.client";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main className="min-h-screen" id="home">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(closest-side, var(--cc-violet), transparent)" }} />
          <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(closest-side, var(--cc-cyan), transparent)" }} />
        </div>
        <div className="cc-container px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Crack FAANG Interviews with Real Mentorship 🚀
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/80 leading-relaxed mb-8">
            Learn DSA, System Design, and Mock Interviews from engineers at Google, Amazon, and D.E. Shaw. Learn to Love Logic.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://wa.me/919719812800?text=Let%E2%80%99s%20CC%20it!%20I%20want%20to%20learn%20more%20about%20mentorship." target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md cc-gradient-cta text-black font-medium cc-hover-glow">Let’s CC it!</a>
            <a href="#join" className="px-6 py-3 rounded-md border border-white/20 hover:border-white/40 transition">View Curriculum</a>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
            <div className="cc-glass cc-outline-gradient py-4 rounded-lg">
              <div className="text-2xl font-semibold"><Counter target={500} suffix="+" /></div>
              <div className="text-sm text-white/70">Students Impacted</div>
            </div>
            <div className="cc-glass cc-outline-gradient py-4 rounded-lg">
              <div className="text-2xl font-semibold"><Counter target={8} suffix="+" /></div>
              <div className="text-sm text-white/70">Years of Experience</div>
            </div>
            <div className="cc-glass cc-outline-gradient py-4 rounded-lg">
              <div className="text-2xl font-semibold"><Counter target={200} suffix="+" /></div>
              <div className="text-sm text-white/70">Interviews Taken</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES TABS */}
      <section id="features" className="cc-container px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Code It", desc: "Build your logic foundation through structured DSA sessions guided by FAANG mentors.", icon: "{}" },
            { title: "Crush It", desc: "Learn real-world problem solving, optimize your thought process, and ace technical rounds.", icon: "<>" },
            { title: "Conquer It", desc: "Go beyond theory — prepare for mock interviews, referrals, and real product challenges.", icon: ";)" },
          ].map((f) => (
            <div key={f.title} className="cc-glass cc-outline-gradient p-6 rounded-xl transition-transform hover:scale-[1.02] cc-hover-glow">
              <div className="text-xl mb-2 flex items-center gap-2"><span className="text-[var(--cc-cyan)]/90">{f.icon}</span> {f.title}</div>
              <p className="text-white/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="cc-container px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Premium mentorship that goes beyond just classes.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Live DSA Classes", d: "Learn 1:1 and in small batches with 8+ years of curated teaching experience.", cta: "https://wa.me/919719812800?text=I%E2%80%99m%20interested%20in%20Live%20DSA%20Classes." },
            { t: "Live System Design Classes", d: "Real-world scalable design patterns taught interactively.", cta: "#join" },
            { t: "Mock Interviews by FAANG Mentors", d: "Real interview patterns, real feedback.", cta: "https://wa.me/919719812800?text=I%E2%80%99m%20interested%20in%20Mock%20Interviews." },
            { t: "Referrals to Top Tech Companies", d: "Network-driven recommendations for top performers.", cta: "#join" },
            { t: "Resume & LinkedIn Makeover", d: "Professionally reviewed for FAANG standards.", cta: "https://wa.me/919719812800?text=I%E2%80%99m%20interested%20in%20Resume%20%26%20LinkedIn%20Makeover." },
          ].map((s) => (
            <div key={s.t} className="cc-glass cc-outline-gradient p-6 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="text-lg font-medium mb-2">{s.t}</div>
              <p className="text-white/80 text-sm mb-4">{s.d}</p>
              <a href={s.cta} target={s.cta.startsWith("http") ? "_blank" : undefined} rel={s.cta.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm px-4 py-2 cc-gradient-cta inline-block rounded-md text-black font-medium cc-hover-glow">Let’s CC it!</a>
            </div>
          ))}
        </div>
      </section>

      {/* BATCH */}
      <section id="join" className="cc-container px-6 py-16">
        <div className="cc-glass cc-outline-gradient p-8 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Next Super 30 Batch — Now Open!</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>Duration: <span className="text-white/80">4 months</span></div>
            <div>Classes: <span className="text-white/80">8 per month (32 total)</span></div>
            <div>Format: <span className="text-white/80">Live, interactive sessions</span></div>
            <div>Fee: <span className="text-white/80">₹5,000/month</span></div>
            <div>Includes: <span className="text-white/80">Notes, Recordings, 2 Mocks, Mentorship</span></div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <a href="https://forms.gle/qBt4GBhaFp1ARUuEA" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md cc-gradient-cta text-black font-medium cc-hover-glow">Join Now</a>
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[var(--cc-violet)]" style={{ width: "60%" }} />
            </div>
            <div className="text-sm text-white/80">18/30 seats</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="cc-container px-6 py-16">
        <div className="cc-terminal">
          <div className="cc-terminal-bar flex items-center gap-2 px-4">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-xs text-white/60">the-code-console</span>
          </div>
          <div className="p-6 text-sm cc-marquee">
            <div className="cc-marquee-track">
              {[
                { q: '"Switched from Infosys to PayPal in 3 months — mocks were game changers."', l: "https://www.linkedin.com/in/abhishekbansal13/" },
                { q: '"Finally understood DSA intuitively — classes are next level."', l: "https://www.linkedin.com/in/abhishekbansal13/" },
                { q: '"Got a referral to a dream company — mentorship was practical and honest."', l: "https://www.linkedin.com/in/abhishekbansal13/" },
                { q: '"Mock interviews felt like the real thing — boosted my confidence massively."', l: "https://www.linkedin.com/in/abhishekbansal13/" },
                { q: '"Clear explanations. Structured learning. Finally, DSA makes sense."', l: "https://www.linkedin.com/in/abhishekbansal13/" },
              ].flatMap((arr) => [arr, arr]) /* duplicate for seamless loop */.map((t, idx) => (
                <a key={idx} href={t.l} target="_blank" rel="noopener noreferrer" className="cc-marquee-card min-w-[320px] max-w-[360px] p-4 rounded-md border border-white/10 hover:border-[var(--cc-cyan)]/60 bg-[rgba(10,15,28,0.9)]">
                  <span className="text-[var(--cc-mint)]">$</span> echo <span className="text-white/90">{t.q}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & COMMUNITY */}
      <section id="mentorship" className="cc-container px-6 py-16">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { t: "Contact Us", a: "https://wa.me/919719812800?text=Hi%20The%20CodeCrush%20Team%2C%20I%20have%20a%20question." },
            { t: "Join Community", a: "https://chat.whatsapp.com/LOm4Ezplsc1JpIYYE9i1tf" },
            { t: "Register", a: "https://forms.gle/qBt4GBhaFp1ARUuEA" },
            { t: "Demo Video", a: "https://drive.google.com/file/d/1s9Sbmt0KKKM2J_KGXB1p8t0P7wIHnkzt/view" },
          ].map((c) => (
            <a key={c.t} href={c.a} target={c.a.startsWith("http") ? "_blank" : undefined} rel={c.a.startsWith("http") ? "noopener noreferrer" : undefined} className="cc-glass cc-outline-gradient p-6 rounded-xl text-center hover:scale-[1.02] transition-transform">
              <div className="text-base font-medium mb-1">{c.t}</div>
              <div className="text-xs text-white/70">Let’s CC it!</div>
            </a>
          ))}
        </div>
      </section>
      {/* Client-side interactivity blocks */}
      <HomeClient />
    </main>
  );
}
