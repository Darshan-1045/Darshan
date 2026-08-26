import profileImage from "../assets/Profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#fffafb] px-6 pb-16 pt-32 md:px-10 lg:pt-36"
    >
      {/* Background Gradient Blurs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#ff9b5c]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-[#e92f72]/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

        {/* Hero Content */}
        <div className="text-center lg:text-left">

          <p className="mb-3 text-sm font-extrabold uppercase tracking-[2px] text-[#e92f72]">
            Hi, I'm
          </p>

          <h1 className="bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] bg-clip-text text-5xl font-extrabold leading-[1.05] text-transparent sm:text-6xl lg:text-7xl">
            Darshan P
          </h1>

          <h2 className="mt-5 text-2xl font-bold leading-tight text-[#17203b] sm:text-3xl lg:text-4xl">
            Software Engineer
            <span className="text-[#e92f72]"> | </span>
            Full Stack Developer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#4d536b] lg:mx-0">
            I build full-stack web applications using React, Node.js,
            Express.js, and MongoDB, with a focus on creating reliable
            and user-friendly solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            {/* View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#e92f72]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              View Projects
            </a>

            {/* Download Resume */}
            <a
              href="/DarshanP_Resume_SDE.pdf"
              download="DarshanP_Resume_SDE.pdf"
              className="inline-flex items-center justify-center rounded-xl border border-[#f0b7ca] bg-white px-7 py-3.5 text-sm font-bold text-[#e92f72] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff5f8] hover:shadow-lg"
            >
              Download Resume
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#f0b7ca] bg-white px-7 py-3.5 text-sm font-bold text-[#e92f72] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff5f8] hover:shadow-lg"
            >
              Contact Me
            </a>

          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">

            <div>
              <p className="text-2xl font-extrabold text-[#17203b]">
                75+
              </p>
              <p className="text-xs font-medium text-[#777d91]">
                DSA Problems
              </p>
            </div>

            <div className="h-10 w-px bg-[#e7dfe7]" />

            <div>
              <p className="text-2xl font-extrabold text-[#17203b]">
                MERN
              </p>
              <p className="text-xs font-medium text-[#777d91]">
                Full Stack
              </p>
            </div>

            <div className="h-10 w-px bg-[#e7dfe7]" />

            <div>
              <p className="text-2xl font-extrabold text-[#17203b]">
                8.55
              </p>
              <p className="text-xs font-medium text-[#777d91]">
                CGPA
              </p>
            </div>

          </div>
        </div>

        {/* Profile Photo */}
        <div className="relative mx-auto w-full max-w-md">

          {/* Gradient Glow */}
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#7b3fc6]/20 via-[#e92f72]/15 to-[#ff9b5c]/20 blur-2xl" />

          {/* Photo Container */}
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-[0_15px_45px_rgba(51,31,64,0.12)]">

            <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#f0ddff] via-[#ffdce9] to-[#ffe5d5]">

              <img
                src={profileImage}
                alt="Darshan P"
                className="h-full w-full object-cover object-center"
              />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;