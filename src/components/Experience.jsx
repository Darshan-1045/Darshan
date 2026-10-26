function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-[#faf7fb] px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[2px] text-[#e92f72]">
            Experience
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#17203b] md:text-4xl">
            Where I've Worked
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />
        </div>

        {/* Experience Card */}
        <div className="relative overflow-hidden rounded-2xl border border-[#eee8ee] bg-white p-7 shadow-[0_8px_24px_rgba(51,31,64,0.06)] transition-shadow duration-200 hover:shadow-[0_14px_34px_rgba(51,31,64,0.1)] md:p-9">

          {/* Gradient Top Border */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />

          {/* Header */}
          <div className="flex flex-col gap-5 border-b border-[#eee8ee] pb-7 md:flex-row md:items-start md:justify-between">

            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f0ddff] via-[#ffdce9] to-[#ffe5d5]">
                <span className="text-xl">💻</span>
              </div>

              <h3 className="text-xl font-bold text-[#17203b] md:text-2xl">
                Full Stack Development Intern
              </h3>

              <p className="mt-2 text-base font-semibold text-[#e92f72]">
                Pratinik Info Tech
              </p>

              <p className="mt-1 text-sm text-[#777d91]">
                2 Months
                <span className="mx-2 text-[#c5c7d0]">•</span>
                2026
              </p>
            </div>

            <div className="w-fit rounded-full bg-gradient-to-r from-[#f4e9ff] via-[#ffe8f0] to-[#fff0e6] px-4 py-2">
              <span className="text-xs font-bold text-[#7b3fc6]">
                Full Stack Development
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="pt-7">
            <p className="max-w-4xl text-sm leading-7 text-[#4d536b] md:text-base">
              Worked on a full-stack MERN e-commerce platform, taking
              features from database design through backend APIs and
              React.js interfaces.
            </p>

            {/* Responsibilities */}
            <div className="mt-7">
              <h4 className="mb-4 text-sm font-extrabold uppercase tracking-[1.5px] text-[#17203b]">
                Key Contributions
              </h4>

              <ul className="space-y-4">
                <li className="flex gap-3 text-sm leading-7 text-[#4d536b]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#7b3fc6] to-[#e92f72]" />
                  <span>
                    Designed MongoDB schemas and built 10+ REST API
                    endpoints using Node.js and Express.js.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-[#4d536b]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#e92f72] to-[#ff725c]" />
                  <span>
                    Implemented authentication, product search and
                    filtering, cart functionality, and order management
                    for 30+ product listings.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-[#4d536b]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#ff725c] to-[#ff9b5c]" />
                  <span>
                    Built a payment flow using Razorpay and Cash on
                    Delivery logic, connecting the database, backend,
                    and checkout UI.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-[#4d536b]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#7b3fc6] to-[#e92f72]" />
                  <span>
                    Designed and developed an admin dashboard for
                    product, inventory, and order management.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-[#4d536b]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#e92f72] to-[#ff9b5c]" />
                  <span>
                    Integrated Cloudinary for image storage and deployed
                    the frontend on Vercel and backend on Render.
                  </span>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-8 border-t border-[#eee8ee] pt-7">
              <h4 className="mb-4 text-sm font-extrabold uppercase tracking-[1.5px] text-[#17203b]">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Razorpay",
                  "Cloudinary",
                  "Vercel",
                  "Render",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#f3dce6] bg-[#fff5f8] px-3 py-1.5 text-xs font-semibold text-[#e92f72]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;