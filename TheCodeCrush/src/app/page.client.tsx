"use client";

import { useEffect, useRef, useState } from "react";

export default function HomeClient() {
  const [seatPercent, setSeatPercent] = useState(60);
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("cc-inview");
        });
      },
      { threshold: 0.2 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setSeatPercent(p => (p < 90 ? p + 1 : 65));
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <section className="cc-container px-6 py-20 cc-reveal" ref={(el) => { if (el) { revealRefs.current.push(el as HTMLElement); } }}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Register</h2>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://forms.gle/qBt4GBhaFp1ARUuEA" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md cc-gradient-cta text-black font-medium cc-hover-glow">Register</a>
          <a href="https://drive.google.com/file/d/1s9Sbmt0KKKM2J_KGXB1p8t0P7wIHnkzt/view" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md border border-white/20 hover:border-white/40">Demo Video</a>
        </div>
      </section>

      <section className="cc-container px-6 pb-20 cc-reveal" ref={(el) => { if (el) { revealRefs.current.push(el as HTMLElement); } }}>
        <div className="cc-glass cc-outline-gradient p-6 rounded-2xl">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm">Seats filling fast</div>
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[var(--cc-cyan)] transition-all" style={{ width: `${seatPercent}%` }} />
            </div>
            <div className="text-sm text-white/80">{Math.round((seatPercent/100)*30)}/30</div>
          </div>
        </div>
      </section>

      {/* Modals replaced with direct links as per requirement */}
    </div>
  );
}


