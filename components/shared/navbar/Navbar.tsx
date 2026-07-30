"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import ProfileDropDownMenu from "./ProfileDropDownMenu";
import SignInSignOut from "./SignInSignOut";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <ul className="hidden md:flex items-center gap-8">
            <NavLinks />
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <SignInSignOut />
            </div>

            <ProfileDropDownMenu />

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
