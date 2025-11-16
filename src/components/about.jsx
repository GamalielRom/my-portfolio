import {
  SiC,
  SiTypescript,
  SiReact,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiNodedotjs,
  SiJavascript,
  SiDotnet
} from "react-icons/si";


export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 px-6 flex justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image */}
        <div className="flex-shrink-0 md:w-1/3 flex justify-center md:justify-start">
          <img
            src="/images/other/gamaliel_outside.jpg"
            alt="Gamaliel"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-blue-500"
          />
        </div>

        {/* Text*/}
        <div className="md:w-2/3 text-left">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm <span className="text-white font-semibold">Gamaliel Romualdo</span>, 
            a passionate software developer based in Canada. I enjoy building practical and 
            creative digital solutions that make a difference.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I have experience working with technologies like{" "}
            <span className="text-blue-400">
              C#, Java, TypeScript, SQL, Python, React, MongoDB, Node, .Net, and JavaScript
            </span>.
            My focus is on clean architecture, efficient databases, and data-driven development.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            I have collaborated on several academic and professional projects, including 
          web applications, games, and analytical panels. I believe in teamwork, learning quickly, and 
          always writing code that I can be proud of, but more than that, with my experience working with people, I have learned that there is no better way
          to make people successful than by encouraging them.
          </p>

          {/* Icons */}
          <div className="flex flex-wrap justify-start gap-6 text-4xl text-blue-400">
            <SiTypescript title="TypeScript" />
            <SiJavascript title="JavaScript" />
            <SiReact title="React" />
            <SiPython title="Python" />
            <SiMongodb title="MongoDB" />
            <SiTailwindcss title="TailwindCSS" />
            <SiMysql title="SQL" />
            <SiNodedotjs title="NodeJS"/>
            <SiDotnet title=".NetFramework" />
          </div>
        </div>
      </div>
    </section>
  );
}
