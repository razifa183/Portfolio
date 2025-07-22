import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chart from "./components/Chart";
import Projects from "./components/Projects";
import Volunteer from "./components/Volunteer";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0e1628] text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Chart />
      <Projects />
      <Volunteer />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
