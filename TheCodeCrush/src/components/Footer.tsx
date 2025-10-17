export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="h-px w-full bg-[var(--cc-cyan)]/60 shadow-[0_-1px_0_0_rgba(34,211,238,0.8)]" />
      <div className="cc-container px-6 py-10 grid md:grid-cols-3 gap-10 text-sm text-white/80">
        <div>
          <h3 className="font-semibold text-white mb-3">The CodeCrush</h3>
          <p>Learn to Love Logic.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Links</h4>
          <ul className="space-y-2">
            <li><a href="https://wa.me/919719812800?text=Hi%20The%20CodeCrush%20Team%2C%20I%27d%20like%20to%20join%20the%20batch." target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cc-cyan)]">WhatsApp</a></li>
            <li><a href="https://www.linkedin.com/in/abhishekbansal13/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cc-cyan)]">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cc-cyan)]">Instagram</a></li>
            <li><a href="mailto:contact@thecodecrush.in" className="hover:text-[var(--cc-cyan)]">contact@thecodecrush.in</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">CTA</h4>
          <a href="https://wa.me/919719812800?text=Let%E2%80%99s%20CC%20it!%20I%E2%80%99m%20interested%20in%20mentorship." target="_blank" rel="noopener noreferrer" className="inline-block text-sm px-4 py-2 cc-gradient-cta text-black font-medium rounded-md cc-hover-glow">Let’s CC it!</a>
        </div>
      </div>
      <div className="text-center py-4 text-xs text-white/60">
        The CodeCrush — Learn to Love Logic. © {new Date().getFullYear()} The CodeCrush. All rights reserved.
      </div>
    </footer>
  );
}


