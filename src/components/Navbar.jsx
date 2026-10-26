import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"],
  ];

  return (
    <nav
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsMenuOpen(false);
      }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-[#eee8ee] bg-white/95 shadow-[0_8px_30px_rgba(51,31,64,0.08)] backdrop-blur-xl"
    >
      <div className="flex min-h-[64px] items-center justify-between gap-4 px-5 md:px-7">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="shrink-0 bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] bg-clip-text text-xl font-extrabold text-transparent md:text-2xl"
        >
          Darshan P
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap text-xs font-semibold text-[#17203b] transition-colors duration-200 hover:text-[#e92f72] xl:text-sm"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CV Button */}
        <a
          href="#contact"
          className="hidden shrink-0 rounded-xl bg-gradient-to-r from-[#7b3fc6] to-[#e92f72] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:inline-flex"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#eee8ee] bg-white text-[#17203b] transition-colors hover:bg-[#fff5f8] lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>

      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="grid gap-1 border-t border-[#eee8ee] px-4 py-3 lg:hidden"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[#17203b] transition-colors hover:bg-[#fff5f8] hover:text-[#e92f72]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-1 rounded-lg bg-gradient-to-r from-[#7b3fc6] to-[#e92f72] px-3 py-2.5 text-center text-sm font-bold text-white"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;