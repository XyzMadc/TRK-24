import { DayScheduleProps } from "@/types/type";

export const DaySchedule = ({ day, courses }: DayScheduleProps) => (
  <section className="bg-zinc-800 p-4 rounded-lg shadow mb-4">
    <h3 className="text-lg text-white font-semibold mb-2">{day}</h3>
    {courses.map((course, idx) => (
      <div
        key={idx}
        className="bg-zinc-700 p-3 rounded-md mb-2 flex justify-between items-center"
      >
        <div>
          <p className="font-semibold text-zinc-200">{course.course}</p>
          <p className="text-sm text-zinc-400">Dosen: {course.lecturer}</p>
        </div>
        <p className="font-medium text-zinc-400">{course.time}</p>
      </div>
    ))}
  </section>
);
