import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="text-center py-10">
      <h1 className="text-3xl font-semibold mt-4">Razifa Usman Khatik</h1>
      <p className="text-blue-400 mt-1">AI | ML | Full Stack | Data Science</p>
      <div className="flex justify-center mt-4 gap-4">
        <a href="https://linkedin.com/in/razifa-khatik" target="_blank"><FaLinkedin className="text-xl hover:text-blue-500" /></a>
        <a href="https://github.com/razifa183" target="_blank"><FaGithub className="text-xl hover:text-blue-500" /></a>
        <a href="mailto:razifa721@gmail.com"><FaEnvelope className="text-xl hover:text-blue-500" /></a>
      </div>
    </section>
  );
}