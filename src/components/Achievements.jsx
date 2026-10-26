function Achievements() {
  const achievements = [
    {
      title: "75+ DSA Problems Solved",
      description:
        "Practiced Data Structures and Algorithms across arrays, strings, linked lists, stacks, queues, trees, hashing, sliding window, sorting, and searching.",
    },
    {
      title: "Quant Masters & Campus Champ",
      description:
        "Completed the 2024 internship programs focused on analytical thinking and problem-solving skills.",
    },
  ];

  return (
    <section
      id="achievements"
      className="w-full bg-[#fffafb] px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[2px] text-[#e92f72]">
            Achievements
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#17203b] md:text-4xl">
            Continuous Learning & Problem Solving
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="group relative overflow-hidden rounded-2xl border border-[#eee8ee] bg-white p-7 shadow-[0_8px_24px_rgba(51,31,64,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(51,31,64,0.1)]"
            >
              {/* Gradient Top Border */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />

              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f3e8ff] via-[#ffe4ef] to-[#fff0e5]">
                <span className="text-xl">🏆</span>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-[#17203b] transition-colors duration-300 group-hover:text-[#e92f72]">
                {achievement.title}
              </h3>

              <p className="text-sm leading-7 text-[#4d536b]">
                {achievement.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 flex items-center gap-2">
                <span className="h-1.5 w-8 rounded-full bg-[#7b3fc6]" />
                <span className="h-1.5 w-8 rounded-full bg-[#e92f72]" />
                <span className="h-1.5 w-8 rounded-full bg-[#ff725c]" />
                <span className="h-1.5 w-8 rounded-full bg-[#ff9b5c]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;