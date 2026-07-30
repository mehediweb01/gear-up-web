"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import ProfileDropDownMenu from "./ProfileDropDownMenu";
import SignInSignUp from "./SignInSignUp";

export type TUser = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    status: string;
  };
};

export interface INavbarProps {
  user: TUser;
}

const Navbar = ({ user }: INavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <ul className="hidden md:flex items-center gap-8">
            <NavLinks />
          </ul>

          <div className="flex items-center gap-4">
            {user.success === false && (
              <div className="hidden sm:flex items-center gap-2">
                <SignInSignUp />
              </div>
            )}

            {user.success === true && <ProfileDropDownMenu user={user} />}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>

        <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
