import { ButtonProps } from "@/type";
import Link from "next/link";

export default function Button({
  href,
  children,
  text,
  icon: Icon,
  active,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 lg:w-full px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-600 hover:scale-105 transition-all duration-300 text-white ${
        active ? "bg-zinc-500 font-semibold scale-105" : ""
      }`}
    >
      <Icon size={20} />
      <p className="hidden lg:inline">{text}</p>
      {children}
    </Link>
  );
}
