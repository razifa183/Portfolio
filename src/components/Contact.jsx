import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0e1628] px-6 py-10 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-300 underline underline-offset-4">
        Contact Me
      </h2>

      <p className="text-blue-100 mb-6 text-sm">
        Let’s connect! Reach out via any of the platforms below:
      </p>

      <div className="flex justify-center gap-6 mb-6 text-3xl">
        {/* Email */}
        <a
          href="mailto:razifa721@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="Email"
        >
          <FaEnvelope />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/razifa-khatik"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/razifa183"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <p className="text-sm text-gray-400">📍 Nashik, Maharashtra, India</p>
    </section>
  );
}
