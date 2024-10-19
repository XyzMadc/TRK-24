import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathArray = router.asPath.split("/").filter((path) => path);

  return (
    <nav className="text-sm text-gray-400 mb-6">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-blue-400">
            Dashboard
          </Link>
        </li>
        {pathArray.map((path, index) => {
          const href = "/" + pathArray.slice(0, index + 1).join("/");

          return (
            <li key={index} className="flex items-center space-x-2">
              <CaretRight size={14} className="text-gray-500" />
              <Link
                href={href}
                className={`hover:text-blue-400 ${
                  index === pathArray.length - 1
                    ? "font-semibold text-white"
                    : ""
                }`}
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
