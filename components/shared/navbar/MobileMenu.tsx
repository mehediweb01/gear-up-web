import NavLinks from "./NavLinks";
import SignInSignOut from "./SignInSignOut";

const MobileMenu = ({ mobileMenuOpen }: { mobileMenuOpen: boolean }) => {
  return (
    <div
      className={`md:hidden pb-4 border-t border-gray-200 pt-4 ${mobileMenuOpen ? "block" : "hidden"}`}
    >
      <NavLinks />

      <div className="px-4 py-2 border-t border-gray-200 mt-2">
        <SignInSignOut />
      </div>
    </div>
  );
};

export default MobileMenu;
