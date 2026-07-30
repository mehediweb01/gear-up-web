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
import { LogOut, User } from "lucide-react";

export const dropDownItems = [
  {
    id: 1,
    action: "MyProfile",
    title: "My Profile",
  },
  {
    id: 2,
    action: "Dashboard",
    title: "Dashboard",
  },
];

const ProfileDropDownMenu = () => {
  const handleAction = (action: string) => {
    console.log(action);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hidden md:inline-flex p-2 hover:bg-muted rounded-lg">
        <User size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex flex-col gap-1 px-1.5 py-1">
            <span>Guest User</span>
            <span className="text-xs font-normal text-muted-foreground">
              guest@example.com
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
