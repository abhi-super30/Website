import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[rgba(10,15,28,0.7)]/90 border-b border-white/10">
      <div className="cc-container px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <Image src="/cc-monogram.svg" alt="The CodeCrush" width={40} height={40} priority />
          <span className="text-base md:text-lg font-semibold tracking-wide">
            The CodeCrush
          </span>
          <span className="block h-0.5 w-0 group-hover:w-24 transition-all duration-300 bg-[var(--cc-violet)] ml-2" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-[var(--cc-cyan)] transition-colors">Home</a>
          <a href="#services" className="hover:text-[var(--cc-cyan)] transition-colors">Services</a>
          <a href="#mentorship" className="hover:text-[var(--cc-cyan)] transition-colors">Mentorship</a>
          <a href="#testimonials" className="hover:text-[var(--cc-cyan)] transition-colors">Testimonials</a>
          <a href="#join" className="hover:text-[var(--cc-cyan)] transition-colors">Join Now</a>
        </nav>
        <div className="flex gap-3">
          <a href="https://wa.me/919719812800?text=Hi%20The%20CodeCrush%20Team%2C%20I%20want%20to%20learn%20more%20about%20mentorship." target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 cc-gradient-cta text-black font-medium rounded-md cc-hover-glow">Let’s CC it!</a>
        </div>
      </div>
    </header>
  );
}


