import { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "Haver App",
      description:
        "C# app developed in a team; I was mainly in charge of the front-end but also helped build the back-end logic.",
      mainImage: "/images/haver_bocker_niagara/landing_page.png",
      sideImage: "/images/haver_bocker_niagara/graphs_page.png",
      thirdImage: "/images/haver_bocker_niagara/tool_panel_page.png",
      tech: ["C#", ".NET"],
      role: "Front-end Developer, Back-End Developer, LogIn Manager",
      github: "https://github.com/Ahripyx/Haver-Boecker-Niagara",
      status: "Finished",
    },
    {
      title: "IncluJob",
      description:
        "Job platform for people with disabilities. Built with TypeScript, MongoDB, SQL, Tailwind, and JavaScript.",
      mainImage: "/images/other/none_background.webp",
      sideImage: "N/A",
      thirdImage: "N/A",
      tech: [
        "TypeScript",
        "HTML",
        "JavaScript",
        "MongoDB",
        "SQL",
        "TailwindCSS",
      ],
      role: "Team Leader, Database Administrator, Back-End Developer",
      github: "https://github.com/GamalielRom/IncluJob",
      status: "In Progress",
    },
    {
      title: "GameSphere",
      description:
        "Video game database app integrating SQL, TypeScript and a clean UI that organizes games by genre and platform.",
      mainImage: "/images/game_sphere/landing_page.png",
      sideImage: "/images/game_sphere/games_page.png",
      thirdImage: "/images/game_sphere/game_details_page.png",
      tech: ["TypeScript", "SQL", "JavaScript", "HTML", "CSS"],
      role: "Team Leader, Database Administrator, Back-End Developer",
      github: "https://github.com/GamalielRom/GameSphere",
      status: "Finished",
    },
    {
      title: "WeatherApp",
      description:
        "Weather app using React + TypeScript. Displays weather by city and integrates Google Maps for location visualization.",
      mainImage: "/images/weather_app/landing_page.png",
      sideImage: "/images/weather_app/search_page.png",
      thirdImage: "N/A",
      tech: ["React", "TypeScript", "API", "Google Maps"],
      role: "Full Stack Developer",
      github: "https://github.com/GamalielRom/WeatherApp",
      status: "Finished",
    },
    { 
        title: "JavaChat",
        description: "Simple chat server and client built in Java. Supports multiple windows and logs all messages in a .txt file.",
        mainImage: "/images/java_chat/chat_page.png",
        sideImage: "N/A",
        thirdImage:"N/A",
        tech: "Java, Sockets, File I/O",
        role: "Back-End Developer",
        github: "https://github.com/GamalielRom/JavaChat-",
        status: "Finished" 
    },
    {
        title: "Crossfire",
        description: "An application that I developed with my work group for a class simulates a business application where CRUD can be used for specific processes and these details can also be exported to PDF.",
        mainImage: "/images/crossfire/login_page.png",
        sideImage: "/images/crossfire/landing_page.png",
        thirdImage:"/images/crossfire/details_page.png", 
        tech: "Java, Sockets, File I/O", 
        role: "Back-End Developer", 
        github: "https://github.com/blackBoxx2/prototype-4", 
        status: "Finished" 
    },
    {
        title: "FocusDo",
        description: "Task manager with Pomodoro timer built in Java. Allows adding, deleting, and tracking tasks efficiently.",
        mainImage: "/images/focus_do/landing_page.png",
        sideImage: "N/A", 
        thirdImage:"N/A",
        tech: "Java, Swing, Timer", 
        role: "Back-End Developer, Front-End Developer", 
        github: "https://github.com/GamalielRom/FocusDo-", 
        status: "Finished" },
    {
        title: "Contoso Retail Dashboard", 
        description: "Business intelligence dashboard built in Power BI connected to SQL Server database.",
        mainImage: "/images/contoso_retail_dashboard/dashboard_page.png",
        sideImage: "N/A",
        thirdImage:"N/A",
        tech: "SQL Server, Power BI",
        role: "Database Managment", 
        github: "https://github.com/GamalielRom/Contoso-Retail-Dashboard", 
        status: "Finished" 
    },
    { 
        title: "GamaGame", 
        description: "2D platformer made in C#, with animated enemies, levels of difficulty, and a high-score system.", 
        mainImage: "/images/gama_game/main_menu.png", 
        sideImage: "/images/gama_game/game_page.png", 
        thirdImage:"N/A", tech: "C#, Game Design, Animation", 
        role: "Back-End Developer, Videogame Developer", 
        github: "https://github.com/GamalielRom/GamaGame", 
        status: "Finished" 
    },
    { 
        title: "King of Dice", 
        description: "Python simulation game analyzing probabilities and outcomes using bar charts and data visualization.", 
        mainImage: "/images/king_of_dice/console_page.png", 
        sideImage: "/images/king_of_dice/probabilities_page.png", 
        thirdImage:"N/A", 
        tech: "Python, Matplotlib, NumPy", 
        role: "Back-End Developer", 
        github: "https://github.com/GamalielRom/KingOfDice",
        status: "Finished"
     },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white w-full">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        {/*grid for proyects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelected(project)}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300 cursor-pointer"
            >
              {/* if the main image exists */}
              {project.mainImage !== "N/A" && (
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>
                <span
                    className={`px-2 py-1 text-xs rounded-sm ${
                    project.status === "Finished"
                        ? "bg-green-600 text-white"
                        : project.status === "In Progress"
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-500 text-white"
                    }`}
                >
                    {project.status}
                </span>
              <p className="text-gray-300 mb-3 line-clamp-3 mt-3">
                {project.description}
              </p>
              <p className="text-sm text-gray-400 italic">
                {Array.isArray(project.tech)
                  ? project.tech.join(", ")
                  : project.tech}
              </p>
            </div>
          ))}
        </div>
         <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
                href="#about"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
            About Me
            </a>
            <a
                href="#contact"
                className="px-6 py-3 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition"
            >
            Contact Me
            </a>
            </div>

        {/*DETAILS*/}
        {selected && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
          <div
          className="relative bg-gray-800 p-6 rounded-xl shadow-xl max-w-3xl w-[90%] overflow-y-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
          >

              {/* Close Button*/}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-6 text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>

              {/*Images */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {selected.mainImage !== "N/A" && (
                  <img
                    src={selected.mainImage}
                    alt={selected.title}
                    className="rounded-lg object-cover"
                  />
                )}
                {selected.sideImage !== "N/A" && (
                  <img
                    src={selected.sideImage}
                    alt={selected.title}
                    className="rounded-lg object-cover"
                  />
                )}
                {selected.thirdImage !== "N/A" && (
                  <img
                    src={selected.thirdImage}
                    alt={selected.title}
                    className="rounded-lg object-cover"
                  />
                )}
              </div>

              {/* Info */}
              <h3 className="text-3xl font-bold text-blue-400 mb-2">
                {selected.title}
              </h3>
              <p className="text-gray-300 mb-4">{selected.description}</p>
              <p className="text-sm text-gray-400 mb-4 italic">
                <strong>Role:</strong> {selected.role}
              </p>
              <p className="text-sm text-gray-400 mb-4 italic">
                <strong>Technologies:</strong>{" "}
                {Array.isArray(selected.tech)
                  ? selected.tech.join(", ")
                  : selected.tech}
              </p>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
              >
                View on GitHub
              </a>
              
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
