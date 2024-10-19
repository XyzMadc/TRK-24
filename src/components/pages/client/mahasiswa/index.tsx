import Breadcrumbs from "@/components/layout/breadcrumbs";
import Link from "next/link";

export default function MahasiswaViewPage() {
  return (
    <section className="p-6 text-white space-y-8">
      <Breadcrumbs />
      <h1 className="text-4xl font-extrabold">Mahasiswa</h1>
      <div className="flex items-center justify-center gap-5">
        <Link href="/mahasiswa/a" className="button-mahasiswa">
          TI-1A
        </Link>
        <Link href="/mahasiswa/b" className="button-mahasiswa">
          TI-1B
        </Link>
        <Link href="/mahasiswa/c" className="button-mahasiswa">
          TI-1C
        </Link>
      </div>
    </section>
  );
}
