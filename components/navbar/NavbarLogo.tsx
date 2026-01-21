import { useShareData } from "@/providers/ShareData";

const NavbarLogo = () => {
  const { openNavbarLinks, toggleNavbarLinks } = useShareData();

  return (
    <div className="flex items-center justify-between w-full lg:w-auto">
      <a href="index.html" className="py-[20px] lg:py-0 block">
        Micro
      </a>
      <button
        className={`group relative flex flex-col items-end gap-[5px] cursor-pointer lg:hidden ${
          openNavbarLinks ? "openNavbarMenu" : ""
        }`}
        aria-label="openNavbarMenu"
        onClick={toggleNavbarLinks}
      >
        <span className="block w-[10px] h-[3px] bg-[#1C1A30] group-hover:bg-[#F57009] rounded-[3px]"></span>
        <span className="block w-[20px] h-[3px] bg-[#1C1A30] group-hover:bg-[#F57009] rounded-[3px]"></span>
        <span className="block w-[30px] h-[3px] bg-[#1C1A30] group-hover:bg-[#F57009] rounded-[3px]"></span>
      </button>
    </div>
  );
};

export default NavbarLogo;
