import NavbarLinks from "./navbarLinks/NavbarLinks";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 right-0 left-0 z-9999 bg-white">
      <div className="container mx-auto px-[15px]">
        <div className="flex items-center justify-between">
          <NavbarLogo />
          <NavbarLinks />
          <div className="hidden lg:block">sdzsdff</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
