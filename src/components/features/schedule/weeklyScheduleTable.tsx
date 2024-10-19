import { WeeklyScheduleTableProps } from "@/type";

export const WeeklyScheduleTable = ({
  scheduleData,
}: WeeklyScheduleTableProps) => (
  <section className="overflow-x-auto rounded-lg">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-zinc-700 text-zinc-300">
          <th className="p-3">Hari</th>
          <th className="p-3">Matkul</th>
          <th className="p-3">Waktu</th>
          <th className="p-3">Dosen</th>
        </tr>
      </thead>
      <tbody>
        {scheduleData.map(({ day, courses }, index) => (
          <tr
            key={index}
            className="bg-zinc-800 text-white border-b border-zinc-700"
          >
            <td className="p-3">{day}</td>
            <td className="p-3">
              {courses.map((c) => (
                <div key={c.course}>{c.course}</div>
              ))}
            </td>
            <td className="p-3">
              {courses.map((c) => (
                <div key={c.time}>{c.time}</div>
              ))}
            </td>
            <td className="p-3">
              {courses.map((c) => (
                <div key={c.lecturer}>{c.lecturer}</div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
