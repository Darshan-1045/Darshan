function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#fffafb] px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[2px] text-[#e92f72]">
            Contact
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#17203b] md:text-4xl">
            Let's Build Something Together
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#4d536b]">
            I'm currently looking for Software Engineer and Full Stack
            Developer opportunities. If you'd like to discuss a role,
            project, or opportunity, feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Email */}
          <div className="group rounded-2xl border border-[#eee8ee] bg-white p-6 shadow-[0_8px_30px_rgba(51,31,64,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(51,31,64,0.13)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe7d8] via-[#ffd9e6] to-[#f0ddff]">
              <span className="text-xl">✉</span>
            </div>

            <span className="mb-2 block text-xs font-extrabold uppercase tracking-[1.5px] text-[#e92f72]">
              Email
            </span>

            <a
              href="mailto:darshandarshanp10@gmail.com"
              className="break-words text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#e92f72]"
            >
              darshandarshanp10@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group rounded-2xl border border-[#eee8ee] bg-white p-6 shadow-[0_8px_30px_rgba(51,31,64,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(51,31,64,0.13)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#e8ddff] via-[#ffdce9] to-[#ffe6d8]">
              <span className="text-xl">in</span>
            </div>

            <span className="mb-2 block text-xs font-extrabold uppercase tracking-[1.5px] text-[#e92f72]">
              LinkedIn
            </span>

            <a
              href="https://www.linkedin.com/in/Darshan-prakasha/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#e92f72]"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="group rounded-2xl border border-[#eee8ee] bg-white p-6 shadow-[0_8px_30px_rgba(51,31,64,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(51,31,64,0.13)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f0ddff] via-[#e4e0ff] to-[#dceeff]">
              <span className="text-xl">⌘</span>
            </div>

            <span className="mb-2 block text-xs font-extrabold uppercase tracking-[1.5px] text-[#7b3fc6]">
              GitHub
            </span>

            <a
              href="https://github.com/Darshan-1045"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[#17203b] transition-colors duration-300 hover:text-[#7b3fc6]"
            >
              GitHub Profile
            </a>
          </div>

          {/* Location */}
          <div className="group rounded-2xl border border-[#eee8ee] bg-white p-6 shadow-[0_8px_30px_rgba(51,31,64,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(51,31,64,0.13)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe5d5] via-[#ffdbe9] to-[#e8ddff]">
              <span className="text-xl">⌖</span>
            </div>

            <span className="mb-2 block text-xs font-extrabold uppercase tracking-[1.5px] text-[#ff725c]">
              Location
            </span>

            <p className="text-sm font-semibold text-[#17203b]">
              Bengaluru, India
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] p-[1px]">
          <div className="rounded-2xl bg-white px-6 py-8 text-center md:px-10">
            <h3 className="text-xl font-bold text-[#17203b] md:text-2xl">
              Have an opportunity in mind?
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#5f6680]">
              I'm open to Software Engineer and Full Stack Developer
              opportunities.
            </p>

            <a
              href="mailto:darshandarshanp10@gmail.com"
              className="mt-5 inline-flex items-center rounded-xl bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;