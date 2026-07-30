import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logOut } from "@/service/logOut";
import { LogOut, User } from "lucide-react";
import { redirect } from "next/navigation";
import { INavbarProps } from "./Navbar";

export const dropDownItems = [
  {
    id: 1,
    action: "my-profile",
    title: "My Profile",
  },
  {
    id: 2,
    action: "dashboard",
    title: "Dashboard",
  },
];

const ProfileDropDownMenu = ({ user }: INavbarProps) => {
  const handleAction = async (action: string) => {
    switch (action) {
      case "singOut":
        await logOut();
        break;

      case "dashboard":
        if (user.data.role === "ADMIN") {
          redirect("/admin-dashboard");
        } else if (user.data.role === "PROVIDER") {
          redirect("/provider-dashboard");
        } else if (user.data.role === "CUSTOMER") {
          redirect("/dashboard");
        }
        break;

      case "my-profile":
        redirect("/me");
        break;

      default:
        break;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hidden md:inline-flex p-2 hover:bg-muted rounded-lg">
        <User size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex flex-col gap-1 px-1.5 py-1">
            <span>{user.data?.name || "guest"}</span>
            <span className="text-xs font-normal text-muted-foreground">
              {user.data?.email || "guest@gmail.com"}
            </span>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {dropDownItems.map((item) => (
            <DropdownMenuItem key={item.id}>
              <Button
                onClick={() => handleAction(item.action)}
                className="w-full flex justify-start gap-2 items-center"
                variant={"ghost"}
              >
                {item.title}
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => handleAction("singOut")}
          >
            <LogOut size={16} className="mr-2" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropDownMenu;
