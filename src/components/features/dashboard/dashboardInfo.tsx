import { DashboardInfoProps } from "@/type";

export default function DashboardInfo({
  title,
  content,
  icon: Icon,
  className,
}: DashboardInfoProps) {
  return (
    <main className={`${className} p-4 rounded-lg shadow-md flex items-center`}>
      <Icon className="text-3xl mr-3" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{content}</p>
      </div>
    </main>
  );
}
