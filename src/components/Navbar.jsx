import { useState } from "react";
import ContactModal from "./ContactModal";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#121c34] px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow">
        <div className="text-xl font-bold text-blue-400">Razifa Khatik</div>
        <ul className="flex gap-4 text-sm">
          <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
          <li><a href="#volunteer" className="hover:text-blue-300">Volunteer</a></li>
          <li><a href="#certs" className="hover:text-blue-300">Certificates</a></li>
          <li>
            <button
              onClick={() => setIsContactOpen(true)}
              className="hover:text-blue-300"
            >
              Contact
            </button>
          </li>
          <li>
            <a
              href="/Razifa Usman Khatik - Resume-2.pdf"
              download
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </>
  );
}
