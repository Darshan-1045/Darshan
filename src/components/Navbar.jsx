function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/80 bg-white/90 shadow-[0_8px_30px_rgba(51,31,64,0.08)] backdrop-blur-xl">
      <div className="flex min-h-[64px] items-center justify-between px-5 md:px-7">

        {/* Logo */}
        <a
          href="#home"
          className="bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] bg-clip-text text-xl font-extrabold text-transparent md:text-2xl"
        >
          Darshan P
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#e92f72]"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#e92f72]"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#e92f72]"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#e92f72]"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#e92f72]"
          >
            Projects
          </a>

          <a
            href="#education"
            className="text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#e92f72]"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#e92f72]"
          >
            Contact
          </a>
        </div>

        {/* CV Button */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#e92f72]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#eee8ee] bg-white text-[#17203b] lg:hidden"
          aria-label="Open navigation menu"
        >
          <span className="text-xl">☰</span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;