function Education() {
  return (
    <section
      id="education"
      className="w-full bg-[#fffafb] px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[2px] text-[#e92f72]">
            Education
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#17203b] md:text-4xl">
            My Academic Background
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />
        </div>

        {/* Education Card */}
        <div className="relative overflow-hidden rounded-2xl border border-[#eee8ee] bg-white p-7 shadow-[0_8px_30px_rgba(51,31,64,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(51,31,64,0.13)] md:p-9">

          {/* Gradient Top Border */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* University Information */}
            <div className="flex-1">

              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f0ddff] via-[#ffdce9] to-[#ffe5d5]">
                <span className="text-xl">🎓</span>
              </div>

              <h3 className="text-xl font-bold leading-relaxed text-[#17203b] md:text-2xl">
                University Visvesvaraya College of Engineering
              </h3>

              <p className="mt-3 text-base font-semibold text-[#e92f72]">
                B.Tech in Electronics and Communication Engineering
              </p>

              <p className="mt-2 text-sm text-[#5f6680]">
                Bengaluru
                <span className="mx-2 text-[#c5c7d0]">•</span>
                2022 – 2026
              </p>
            </div>

            {/* CGPA */}
            <div className="flex min-w-[170px] flex-col items-center rounded-2xl bg-gradient-to-br from-[#fff1f6] via-[#fff7f2] to-[#f5efff] px-8 py-6 text-center">

              <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-[#7b3fc6]">
                CGPA
              </span>

              <strong className="mt-2 bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] bg-clip-text text-3xl font-extrabold text-transparent">
                8.55 / 10
              </strong>

              <span className="mt-1 text-xs text-[#777d91]">
                Academic Performance
              </span>
            </div>

          </div>

          {/* Bottom Accent */}
          <div className="mt-8 flex items-center gap-2 border-t border-[#eee8ee] pt-6">
            <span className="h-1.5 w-10 rounded-full bg-[#7b3fc6]" />
            <span className="h-1.5 w-10 rounded-full bg-[#e92f72]" />
            <span className="h-1.5 w-10 rounded-full bg-[#ff725c]" />
            <span className="h-1.5 w-10 rounded-full bg-[#ff9b5c]" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;