import airbnbImage from "../assets/Airbnb.png";
import dashboardImage from "../assets/Dashboard.png";
import foreverImage from "../assets/Forever.png";
import smartTaskImage from "../assets/Smarttask.png";

function Projects() {
  const projects = [
    {
      title: "MERN E-Commerce Platform",
      image: foreverImage,
      description:
        "A full-stack e-commerce platform built during my internship, featuring authentication, product search and filtering, cart management, orders, payments, and an admin dashboard.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay",
        "Cloudinary",
      ],
      features: [
        "Authentication & Authorization",
        "Product Search & Filtering",
        "Cart & Order Management",
        "Razorpay & COD Payments",
        "Admin Dashboard",
      ],
      github: "https://github.com/Darshan-1045/FOREVER",
      live: "https://forever-frontend-rose-seven.vercel.app/",
    },

    {
      title: "Airbnb Clone Web Application",
      image: airbnbImage,
      description:
        "A full-stack property listing platform with CRUD functionality, favorites, session-based authentication, and server-rendered responsive views.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "JavaScript",
      ],
      features: [
        "Property Listings",
        "Full CRUD Operations",
        "Favorites",
        "Session-Based Authentication",
        "MVC Architecture",
      ],
      github: "https://github.com/Darshan-1045/AIRBNB",
      live: "https://airbnb-1f5g.onrender.com",
    },

    {
      title: "Real-Time Weather & Crypto Dashboard",
      image: dashboardImage,
      description:
        "A responsive dashboard that tracks Bitcoin prices and provides searchable weather information for cities using live APIs.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Chart.js",
        "APIs",
        "Bootstrap",
      ],
      features: [
        "Live Bitcoin Price Tracking",
        "City Weather Search",
        "Chart.js Visualizations",
        "Automatic Data Refresh",
        "Dynamic DOM Updates",
      ],
      github: "https://github.com/Darshan-1045/Dashboard",
      live: "https://darshan-1045.github.io/Dashboard/",
    },

    {
      title: "Smart Task Manager",
      image: smartTaskImage,
      description:
        "A task management application with priority categorization, overdue highlighting, filtering, and persistent storage using LocalStorage.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "LocalStorage",
      ],
      features: [
        "Task Creation",
        "Priority Categorization",
        "Overdue Highlighting",
        "Task Filtering",
        "Persistent Storage",
      ],
      github: "https://github.com/Darshan-1045/TaskManager",
      live: "https://darshan-1045.github.io/TaskManager",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#fffafb] px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[2px] text-[#e92f72]">
            Projects
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#17203b] md:text-4xl">
            Things I've Built
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff9b5c]" />

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#4d536b]">
            A selection of applications I've built while developing my
            frontend, backend, database, and full-stack development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 lg:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-[#eee8ee] bg-white shadow-[0_8px_30px_rgba(51,31,64,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(51,31,64,0.13)]"
            >

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-[#f5edff]">

                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17203b]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              </div>

              {/* Project Content */}
              <div className="p-7">

                <h3 className="text-xl font-bold leading-snug text-[#17203b] transition-colors duration-300 group-hover:text-[#e92f72]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#4d536b]">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="mb-3 text-xs font-extrabold uppercase tracking-[1.5px] text-[#17203b]">
                    Key Features
                  </h4>

                  <ul className="space-y-2.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-[#5f6680]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#7b3fc6] to-[#e92f72]" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-6 border-t border-[#eee8ee] pt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#f3dce6] bg-[#fff5f8] px-3 py-1.5 text-xs font-semibold text-[#e92f72]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap gap-3 border-t border-[#eee8ee] pt-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg bg-[#17203b] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#252e4c]"
                  >
                    GitHub →
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#7b3fc6] via-[#e92f72] to-[#ff725c] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Live Demo →
                  </a>

                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;