"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 1,
    title: "Browse Gear",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-2 flex-wrap md:gap-8 ">
      {navLinks.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`block px-4 py-2 hover:text-blue-500 text-gray-700 hover:bg-gray-100 hover:rounded-md cursor-pointer transition-all duration-300 ${
            pathname === item.href
              ? "bg-gray-100 text-blue-500! hover:bg-gray-100 rounded-md"
              : ""
          } 
        `}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
