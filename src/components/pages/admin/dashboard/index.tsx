import Breadcrumbs from "@/components/layout/breadcrumbs";
import ChartVisitors from "@/components/features/dashboard/chartVisitors";
import DashboardInfo from "@/components/features/dashboard/dashboardInfo";
import TableMading from "@/components/features/table/tableMading";
import { Eye, Newspaper, Plus, Users } from "@phosphor-icons/react";
import Link from "next/link";

const madingData = [
  {
    id: 1,
    title: "Important",
    description: "Important Announcement",
    image: "image 1",
    file: "",
    author: "Admin TI-1A",
  },
  {
    id: 2,
    title: "Competition",
    description: "National Competition",
    image: "",
    file: "Hackathon.pdf",
    author: "Admin TI-1B",
  },
  {
    id: 3,
    title: "Event",
    description: "Upcoming Event",
    image: "image 3",
    file: "event.pdf",
    author: "Admin TI-1C",
  },
];

export default function AdminDashboardViewPage() {
  return (
    <section className="p-6 text-white w-4/5 h-screen overflow-y-scroll">
      <Breadcrumbs />
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold">Dashboard</h1>
        <Link
          href={"/admin/mading/create"}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center transition duration-300"
        >
          <Plus className="mr-2" /> Create Mading
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardInfo
          icon={Newspaper}
          className="bg-blue-600"
          title="Total Mading"
          content={madingData.length}
        />
        <DashboardInfo
          icon={Users}
          className="bg-purple-600"
          title="Total Users"
          content={78}
        />
        <DashboardInfo
          icon={Eye}
          className="bg-orange-600"
          title="Total Views"
          content={1099}
        />
      </div>

      <ChartVisitors />

      <TableMading madingData={madingData} />
    </section>
  );
}
