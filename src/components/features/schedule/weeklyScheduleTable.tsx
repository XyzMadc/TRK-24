import { WeeklyScheduleTableProps } from "@/types/type";

const TableHeader: React.FC<{ title: string }> = ({ title }) => (
  <th className="py-3 px-4 font-semibold border border-zinc-600">{title}</th>
);

const TableCell: React.FC<{ content: string | string[] }> = ({ content }) => (
  <td className="py-3 px-4 border border-zinc-600">
    {Array.isArray(content)
      ? content.map((item, idx) => (
          <p key={idx} className="mb-1 last:mb-0">
            {item}
          </p>
        ))
      : content}
  </td>
);

export const WeeklyScheduleTable: React.FC<WeeklyScheduleTableProps> = ({
  scheduleData,
}) => (
  <div className="overflow-x-auto bg-white rounded-lg shadow-md">
    <table className="w-full">
      <thead>
        <tr className="bg-zinc-800 text-sm uppercase text-white">
          {["Hari", "Mata Kuliah", "Waktu", "Dosen"].map((header) => (
            <TableHeader key={header} title={header} />
          ))}
        </tr>
      </thead>
      <tbody>
        {scheduleData.map(({ day, courses }, index) => (
          <tr
            key={index}
            className="bg-zinc-700 hover:bg-gray-500 text-zinc-300 cursor-pointer"
          >
            <TableCell content={day} />
            <TableCell content={courses.map((c) => c.course)} />
            <TableCell content={courses.map((c) => c.time)} />
            <TableCell content={courses.map((c) => c.lecturer)} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
