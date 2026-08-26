function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["JavaScript (ES6+)", "C", "C++","Python", "Java Basics", "SQL"],
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "React.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "REST API Design",
        "MVC Architecture",
        "Authentication & Authorization",
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        "MongoDB",
        "MongoDB Atlas",
        "MySQL",
        "DBMS",
        "Schema Design",
      ],
    },
    {
      title: "Tools & Deployment",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Render",
        "Cloudinary",
        "Razorpay API",
        "Postman",
        "VS Code",
      ],
    },
    {
      title: "Computer Science",
      icon: "🧠",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "System Design Basics",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-[#fffafb] px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[2px] text-[#e92f72]">
            My Skills
          </p>

          <h2 className="text-3xl font-bold text-[#17203b] md:text-4xl">
            Technologies I Work With
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#4d536b]">
            A combination of programming languages, frontend and backend
            technologies, databases, and development tools that I use to
            build full-stack applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl border border-[#eee8ee] bg-white p-6 shadow-[0_8px_30px_rgba(51,31,64,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(51,31,64,0.13)]"
            >

              {/* Gradient top border */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />

              {/* Category */}
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0ddff] via-[#ffdce9] to-[#ffe5d5] text-lg">
                  {category.icon}
                </div>

                <h3 className="text-lg font-bold text-[#17203b]">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#f2dce6] bg-[#fff7fa] px-3 py-1.5 text-xs font-semibold leading-5 text-[#4d536b] transition-all duration-300 hover:border-[#e92f72] hover:bg-[#fff0f5] hover:text-[#e92f72]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;