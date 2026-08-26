function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#fffafb] px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#ff9b5c]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#7b3fc6]/8 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="max-w-4xl">

          <p className="mb-3 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#e92f72]">
            <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#7b3fc6] to-[#e92f72]" />
            About Me
          </p>

          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#17203b] sm:text-4xl lg:text-5xl">
            Building with code, learning every day.
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[#4d536b] sm:text-lg">

            <p>
              I'm Darshan P, a Software Engineer and Full Stack Developer
              based in Bengaluru. I recently graduated from University
              Visvesvaraya College of Engineering with a B.Tech in
              Electronics and Communication Engineering.
            </p>

            <p>
              I enjoy building web applications and working across both
              frontend and backend development. I have hands-on experience
              with React.js, Node.js, Express.js, MongoDB, REST APIs,
              authentication, payments, and deployment.
            </p>

            <p>
              My goal is to start my career as a Software Engineer or
              Full Stack Developer where I can contribute to real-world
              products while continuing to strengthen my technical skills.
            </p>

          </div>

          {/* Statistics */}
          <div className="mt-12 grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-[#eee8ee] bg-white shadow-[0_8px_30px_rgba(51,31,64,0.07)] sm:grid-cols-3">

            {/* CGPA */}
            <div className="relative p-6 sm:p-7">

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#7b3fc6] to-[#e92f72]" />

              <strong className="block bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] bg-clip-text text-3xl font-extrabold text-transparent">
                8.55/10
              </strong>

              <span className="mt-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#777d91]">
                UVCE CGPA
              </span>

            </div>

            {/* Experience */}
            <div className="relative border-t border-[#eee8ee] p-6 sm:border-l sm:border-t-0 sm:p-7">

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#e92f72] to-[#ff725c]" />

              <strong className="block bg-gradient-to-r from-[#e92f72] to-[#ff725c] bg-clip-text text-3xl font-extrabold text-transparent">
                2 Months
              </strong>

              <span className="mt-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#777d91]">
                Full Stack Experience
              </span>

            </div>

            {/* DSA */}
            <div className="relative border-t border-[#eee8ee] p-6 sm:border-l sm:border-t-0 sm:p-7">

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#ff725c] to-[#ff9b5c]" />

              <strong className="block bg-gradient-to-r from-[#ff725c] to-[#ff9b5c] bg-clip-text text-3xl font-extrabold text-transparent">
                75+
              </strong>

              <span className="mt-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#777d91]">
                DSA Problems
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;