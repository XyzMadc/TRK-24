import { DaySchedule } from "@/components/features/schedule/daySchedule";
import { WeeklyScheduleTable } from "@/components/features/schedule/weeklyScheduleTable";

const scheduleData = [
  {
    day: "Senin",
    courses: [
      {
        course: "Mathematics",
        time: "08:00 - 10:00",
        lecturer: "Dr. John Doe",
      },
      {
        course: "Physics",
        time: "10:30 - 12:00",
        lecturer: "Dr. Jane Smith",
      },
    ],
  },
  {
    day: "Selasa",
    courses: [
      {
        course: "Mathematics",
        time: "08:00 - 10:00",
        lecturer: "Dr. John Doe",
      },
      {
        course: "Physics",
        time: "10:30 - 12:00",
        lecturer: "Dr. Jane Smith",
      },
    ],
  },
  {
    day: "Rabu",
    courses: [
      {
        course: "Mathematics",
        time: "08:00 - 10:00",
        lecturer: "Dr. John Doe",
      },
      {
        course: "Physics",
        time: "10:30 - 12:00",
        lecturer: "Dr. Jane Smith",
      },
    ],
  },
  {
    day: "Kamis",
    courses: [
      {
        course: "Mathematics",
        time: "08:00 - 10:00",
        lecturer: "Dr. John Doe",
      },
      {
        course: "Physics",
        time: "10:30 - 12:00",
        lecturer: "Dr. Jane Smith",
      },
    ],
  },
  {
    day: "Jum'at",
    courses: [
      {
        course: "Mathematics",
        time: "08:00 - 10:00",
        lecturer: "Dr. John Doe",
      },
      {
        course: "Physics",
        time: "10:30 - 12:00",
        lecturer: "Dr. Jane Smith",
      },
    ],
  },
];
export default function ScheduleViewPage() {
  return (
    <main className="p-6 space-y-10 w-4/5 h-screen overflow-y-scroll text-white pb-20">
      <h1 className="text-4xl font-extrabold text-center">
        Jadwal Mata Kuliah
      </h1>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Jadwal Hari Ini</h2>
        <DaySchedule {...scheduleData[0]} />
      </section>

      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Jadwal Semester</h2>
        <span className="text-zinc-500">*bisa berganti setiap minggu</span>
        <WeeklyScheduleTable scheduleData={scheduleData} />
      </section>
    </main>
  );
}
