import dynamic from "next/dynamic";
import "chart.js/auto";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const data = {
  labels: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
  datasets: [
    {
      label: "Website Visitors",
      data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80, 81, 56],
      borderColor: "#fff",
    },
  ],
};

export default function ChartVisitors() {
  return (
    <main className="bg-zinc-800 p-4 rounded-lg shadow-md mb-6">
      <Line data={data} />
    </main>
  );
}
