// src/components/ContactModal.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#0e1628] text-white rounded-lg p-8 w-[90%] max-w-md shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-red-500"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-blue-300 mb-4 text-center underline underline-offset-4">
          Contact Me
        </h2>

        <p className="text-blue-100 mb-6 text-center text-sm">
          Feel free to reach out via any of the platforms below.
        </p>

        <div className="flex justify-center gap-6 mb-4 text-2xl">
          <a
            href="mailto:razifa721@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/razifa-khatik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/razifa183"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
        </div>

        <p className="text-center text-xs text-gray-400">
          📍 Nashik, Maharashtra, India
        </p>
      </div>
    </div>
  );
}
