// ✅ Folder: src/components/Chart.jsx
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function Chart() {
  const data = {
    labels: [
      "Data Science Intern (Bosch)",
      "Data Science Intern (Acmegrade)",
      "Data Analyst Virtual Intern (British Airways)",
      "Software Engineer Virtual Intern (JPMorgan & Chase co.)"
    ],
    datasets: [
      {
        label: "Duration (Months)",
        data: [2, 2, 1, 1],
        backgroundColor: [
          "#3b82f6", // Blue
          "#f9a8d4", // Light pink
          "#3b82f6",
          "#f9a8d4"
        ]
      }
    ]
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Role Distribution (Months)",
        color: "#fff"
      }
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "#2f3e64" }
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "#2f3e64" }
      }
    }
  };

  return (
    <section className="px-4 py-10 bg-[#101d3e]">
      <h2 className="text-2xl text-center text-white mb-4">Role Distribution by Duration</h2>
      <div className="max-w-4xl mx-auto">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}
