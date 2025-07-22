import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projectDetails = [
  {
    title: "C-Coating Management System",
    summary: "Tracking, managing, and updating multiple stages of coating processes with user-friendly interfaces.",
    description: "Developed a Django system to manage multiple coating stages. Updated status like “Unprocessed,” “Cleaned,” “Loaded,” etc., based on form submissions.",
    images: ["c1.png", "c2.png", "c3.png", "c4.png"]
  },
  {
    title: "GeoInsight",
    summary: "An AI powered retail location recommender system",
    description: "A Geospatial intelligence system that helps retailers identify optimal business locations using spatial and demographic data. The system analyzes factors such as population density, competitors, foot traffic patterns and market potential to recommend high-potential retail zones "
  },
  {
    title: "Brain Tumor Detection",
    summary: "Deep learning diagnosis tool",
    description: "Implemented a CNN model that classifies brain tumors into 4 types with 96% accuracy. Deployed using Django. Integrated one-hot encoded output into styled user interface.",
    images: ["b1.png", "b2.png"]
  },
  {
    title: "Satellite Image Analysis",
    summary: "Analyzing Vegetation, Water,Bare Soil and Iron Oxide around the Godavari River in Nashik ",
    description: "Worked on a satellite image analysis project focused on the Godavari River region in Nashik, using Rasterio and Sentinel-2 imagery to monitor environmental changes. Applied spectral indices like NDVI, NDWI,NDBI,IOI to classify terrain and monitor teh chnages over time ",
    images: ["sa1.png", "sa.png"]
  },
  {
    title: "Schutte Monitoring System",
    summary: "AI-powered product decision platform",
    description: "It analyses Schutte machine data shift-wise and hourly, reducing downtime by 20% and improving production analytics. Built backend system to monitor machine performance by shift and hour.",
    images: ["s1.png", "s2.png"]
  },
  {
    title: "Xysecurity",
    summary: "AI-powered Network Traffic Analyzer",
    description: "Designed a network analyzer application to monitor real-time network packets, detect unusual traffic patterns, and identify potential cybersecurity threats. Featured packet inspection, port scanning, and protocol filtering.",
    images: ["n1.png", "n2.png", "n.png"]
  }
];

export default function Projects() {
  const [openIndices, setOpenIndices] = useState([]);
  const [modalImages, setModalImages] = useState(null);

  const toggleProject = (i) => {
    setOpenIndices((prev) =>
      prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]
    );
  };

  return (
    <>
      <section id="projects" className="bg-[#0e1628] px-6 py-10 text-white relative z-10">
        <h2 className="text-2xl text-center mb-6">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectDetails.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a2f52] p-2 rounded-lg shadow-sm hover:shadow-md border border-blue-800"
              onClick={() => toggleProject(i)}
            >
              {proj.images && (
                <div className="mb-4 relative">
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={3500}
                    showIndicators={false}
                  >
                    {proj.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={`/projects/${img}`}
                        alt={`${proj.title} ${idx + 1}`}
                        className="h-48 w-full object-cover rounded-lg border border-blue-400"
                      />
                    ))}
                  </Carousel>

                  {/* Eye Icon */}
                  <div
                    className="absolute top-2 right-2 bg-white bg-opacity-90 p-1 rounded-full shadow cursor-pointer hover:bg-opacity-100 transition"
                    title="View all images fullscreen"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImages(proj.images);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 hover:text-blue-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold text-blue-200 mb-1">{proj.title}</h3>
              <p className="text-sm text-blue-100 mb-2">{proj.summary}</p>

              <AnimatePresence>
                {openIndices.includes(i) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-200 border-t border-blue-500 pt-2"
                  >
                    {proj.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fullscreen Modal with Carousel */}
      {modalImages && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          onClick={() => setModalImages(null)}
        >
          <div
            className="relative w-full max-w-4xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              emulateTouch
              showIndicators
              useKeyboardArrows
            >
              {modalImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img.startsWith("/projects/") ? img : `/projects/${img}`}
                  alt={`Full view ${idx}`}
                  className="max-h-[90vh] w-full object-contain rounded-lg"
                />
              ))}
            </Carousel>

            <button
              onClick={() => setModalImages(null)}
              className="absolute top-2 right-2 text-white text-3xl bg-[#0e1628] hover:bg-red-600 px-3 py-1 rounded-full"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}