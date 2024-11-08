import {
  CalendarDots,
  House,
  Notebook,
  SignOut,
  UsersFour,
} from "@phosphor-icons/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Avatar } from "@chakra-ui/react";
import Button from "../ui/button";
import { signOut, useSession } from "next-auth/react";

const hiddenPath = ["auth", "404"];
export default function Sidebar() {
  const { pathname } = useRouter();
  const { data: session } = useSession();

  const path = pathname.split("/")[1];
  const userSlug = session?.user?.name
    ? session.user.name.toLowerCase().replace(/\s+/g, "-")
    : "";

  if (hiddenPath.includes(path)) {
    return null;
  }

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
                active={path === "mahasiswa"}
              />
              <Button
                href="/tugas"
                icon={Notebook}
                text="Tugas"
                active={path === "tugas"}
              >
                <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs lg:inline hidden">
                  2
                </span>
              </Button>
              <Button
                href="/jadwal"
                icon={CalendarDots}
                text="Jadwal"
                active={path === "jadwal"}
              />
              <Link
                href={`/user/${userSlug}`}
                className="flex items-center gap-2 lg:w-full px-4 py-2 rounded-lg hover:bg-zinc-800 hover:scale-105 transition-all duration-300 text-white"
              >
                <Avatar size={"xs"} />
                <p
                  className={`hidden lg:block ${
                    pathname.startsWith("/user") ? "font-bold text-lg" : ""
                  }`}
                >
                  Profile
                </p>
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
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 lg:w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 hover:scale-105 transition-all duration-300 text-white"
        >
          <SignOut size={20} />
          <p className="hidden lg:inline">Sign Out</p>
        </button>
      </div>
    </nav>
  );
}
