const certificates = [
    { title: "Google IT Automation with Python (Coursera)", file: "c.png" },
    { title: "Google Generative AI (Eduskills)", file: "gen.png" },
    { title: "Data Science Training", file: "int1.jpeg" },
    { title: "Data Science (Indian Society of Technical Education)", file: "t.jpeg" },
    { title: "IOT Workshop (Cognifront)", file: "iot.png" },
  ];
  
  export default function Certificates() {
    return (
      <section id="certs" className="bg-[#0e1628] px-6 py-10 text-center text-white">
        <h2 className="text-2xl mb-6">Certificates</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="bg-[#1a2f52] p-3 rounded shadow hover:shadow-lg flex flex-col items-center"
            >
              <img
                src={`/certificates/${cert.file}`}
                alt={cert.title}
                className="w-full h-40 object-contain rounded mb-2 border border-blue-500 bg-white"
              />
              <p className="text-sm text-blue-200 mb-2">{cert.title}</p>
              <a
                href={`/certificates/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  