import UserLayout from "@/components/layout/userLayout";
import Link from "next/link";

export default function MahasiswaViewPage() {
  return (
    <UserLayout title="Mahasiswa">
      <Link href="/mahasiswa/a" className="button-mahasiswa">
        TI-1A
      </Link>
      <Link href="/mahasiswa/b" className="button-mahasiswa">
        TI-1B
      </Link>
      <Link href="/mahasiswa/c" className="button-mahasiswa">
        TI-1C
      </Link>
    </UserLayout>
  );
}
