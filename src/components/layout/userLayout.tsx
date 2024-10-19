import { UserLayoutProps } from "@/type";
import Breadcrumbs from "./breadcrumbs";

export default function UserLayout({ title, children }: UserLayoutProps) {
  return (
    <section className="p-6 text-white w-full lg:w-4/5">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold">{title}</h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 w-full place-items-center">
        {children}
      </main>
    </section>
  );
}
