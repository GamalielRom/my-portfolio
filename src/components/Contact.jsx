import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload  } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-20 px-6 flex justify-center"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Contact Me</h2>
        <p className="text-gray-300 mb-10 text-lg">
          I'm always open to new opportunities, collaborations, or just a friendly chat.
          Let's connect!
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8 text-3xl">
          <a
            href="mailto:gameva.rom@gmail.com"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
          >
            <FaEnvelope /> <span className="text-lg">gameva.rom@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gamaliel-romualdo-6a2567307/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin /> <span className="text-lg">LinkedIn</span>
          </a>

          <a
            href="https://github.com/GamalielRom"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
          >
            <FaGithub /> <span className="text-lg">GitHub</span>
          </a>
          <a
            href="/files/Gamaliel_Romualdo_Resumme.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
          >
            <FaFileDownload /> <span className="text-lg">View Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
