"use client";

import { Button } from "@/components/ui/button";
import { logOut } from "@/service/logOut";
import { LogOutIcon } from "lucide-react";

const LogOutBtn = () => {
  return (
    <Button
      variant={"outline"}
      className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 font-medium cursor-pointer"
      onClick={async () => await logOut()}
    >
      <LogOutIcon size={18} /> Sign Out
    </Button>
  );
};

export default LogOutBtn;
