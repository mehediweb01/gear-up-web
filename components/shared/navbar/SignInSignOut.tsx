"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SignInSignOut = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      <Link href="/login" className={`inline-flex`}>
        <Button
          variant="link"
          className={`cursor-pointer ${pathname === "/login" ? "bg-gray-100 text-blue-500! hover:bg-gray-100 rounded-md" : ""}`}
        >
          Sign In
        </Button>
      </Link>
      <Link href="/register" className={`inline-flex`}>
        <Button
          variant={"link"}
          className={`cursor-pointer ${pathname === "/register" ? "bg-gray-100 text-blue-500! hover:bg-gray-100 rounded-md" : ""}`}
        >
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default SignInSignOut;
