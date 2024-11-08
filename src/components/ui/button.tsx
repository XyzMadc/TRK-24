import { ButtonProps } from "@/types/type";
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
      className={`flex items-center gap-2 lg:w-full px-4 py-2 rounded-lg hover:bg-zinc-800 hover:scale-105 transition-all duration-300 text-white ${
        active ? "font-bold text-lg" : ""
      }`}
    >
      <Icon size={active ? 24 : 20} weight={active ? "fill" : "regular"} />
      <p className="hidden lg:inline">{text}</p>
      {children}
    </Link>
  );
}
