import {
  CalendarDots,
  House,
  Notebook,
  SignOut,
  UsersFour,
} from "@phosphor-icons/react";
import Button from "../ui/button";
import { useRouter } from "next/router";
import Link from "next/link";
import { Avatar } from "@chakra-ui/react";

export default function Sidebar() {
  const { pathname } = useRouter();
  const path = pathname.split("/")[1];
  return (
    <nav className="lg:w-1/5 w-full lg:h-screen p-4 text-zinc-200 lg:border-r border-zinc-700 flex lg:flex-col gap-4 justify-between lg:justify-start items-center fixed lg:static bottom-0 left-0 bg-black">
      <h2 className="text-xl font-bold hidden lg:block mb-10">TRK{"'"}24</h2>
      <div className="flex justify-center lg:flex-col lg:justify-between h-full w-full gap-4">
        <div className="flex justify-center lg:flex-col lg:space-y-4 gap-4 lg:gap-0">
          {path !== "admin" ? (
            <>
              <Button
                href="/"
                icon={House}
                text="Dashboard"
                active={pathname === "/"}
              />
              <Button
                href="/mahasiswa"
                icon={UsersFour}
                text="Mahasiswa"
                active={pathname === "/mahasiswa"}
              />
              <Button
                href="/tugas"
                icon={Notebook}
                text="Tugas"
                active={pathname === "/tugas"}
              >
                <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs lg:inline hidden">
                  2
                </span>
              </Button>
              <Button
                href="/jadwal"
                icon={CalendarDots}
                text="Jadwal"
                active={pathname === "/jadwal"}
              />
              <Link
                href={"/user"}
                className="flex items-center gap-2 lg:w-full px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-500 hover:scale-105 transition-all duration-300 text-white"
              >
                <Avatar size={"xs"} />
                <p className="hidden lg:block">Profile</p>
              </Link>
            </>
          ) : (
            <>
              <Button
                href="/admin"
                icon={House}
                text="Dashboard"
                active={
                  pathname === "/admin" || pathname === "/admin/mading/create"
                }
              />
              <Button
                href="/admin/tugas"
                icon={Notebook}
                text="Tugas"
                active={
                  pathname === "/admin/tugas" ||
                  pathname === "/admin/tugas/create"
                }
              >
                <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs lg:inline hidden">
                  0
                </span>
              </Button>
              <Button
                href="/admin/jadwal"
                icon={CalendarDots}
                text="Jadwal"
                active={pathname === "/admin/jadwal"}
              />
            </>
          )}
        </div>
        <Button href="/signOut" icon={SignOut} text="Sign Out" />
      </div>
    </nav>
  );
}