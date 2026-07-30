"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SignInSignOut = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      <Link
        href="/login"
        className={`inline-flex ${pathname === "/login" ? "bg-gray-50 rounded-md" : ""}`}
      >
        <Button variant="link" className={"cursor-pointer"}>
          Sign In
        </Button>
      </Link>
      <Link
        href="/register"
        className={`inline-flex ${pathname === "/register" ? "bg-gray-50 rounded-md" : ""}`}
      >
        <Button variant={"link"} className={"cursor-pointer"}>
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default SignInSignOut;
