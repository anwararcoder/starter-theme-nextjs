import { useShareData } from "@/providers/ShareData";
import Image from "next/image";
import logoImage from "@/public/image/logo/01_logo.png";
import Link from "next/link";

const NavbarLogo = () => {
  const { openNavbarLinks, toggleNavbarLinks } = useShareData();

  return (
    <div className="flex items-center justify-between w-full lg:w-auto">
      <Link href="/" className="py-[20px] lg:py-0 block">
        <Image src={logoImage} alt="Logo" width={125} height={40} />
      </Link>
      <button
        className={`group relative flex flex-col items-end gap-[5px] cursor-pointer lg:hidden ${
          openNavbarLinks ? "openNavbarMenu" : ""
        }`}
        aria-label="openNavbarMenu"
        onClick={toggleNavbarLinks}
      >
        <span className="block w-[10px] h-[3px] bg-[#091D3E] group-hover:bg-[#0092FF] rounded-[3px]"></span>
        <span className="block w-[20px] h-[3px] bg-[#091D3E] group-hover:bg-[#0092FF] rounded-[3px]"></span>
        <span className="block w-[30px] h-[3px] bg-[#091D3E] group-hover:bg-[#0092FF] rounded-[3px]"></span>
      </button>
    </div>
  );
};

export default NavbarLogo;
