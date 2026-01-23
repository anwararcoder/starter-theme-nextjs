import { navbarData } from "@/data/navbarData";
import { useShareData } from "@/providers/ShareData";
import { NavbarLinksItemType } from "@/types/navbarTypes";
import NavbarLinksItem from "./NavbarLinksItem";
import Link from "next/link";
import logoImage from "@/public/image/logo/01_logo.png";
import Image from "next/image";


const NavbarLinks = () => {
  const { openNavbarLinks, toggleNavbarLinks } = useShareData();

  return (
    <div
      className={`navbarMenu fixed top-0 left-[-110%] md:left-[-360px] [&.activeNavbarMenu]:left-0 h-screen w-full md:w-[350px] z-9999 lg:static lg:w-auto lg:h-auto lg:z-auto ${openNavbarLinks ? "activeNavbarMenu" : ""}`}
    >
      <div className="h-full lg:h-auto bg-white lg:bg-transparent px-[40px] lg:px-0 py-[50px] lg:py-0 overflow-y-auto lg:overflow-y-visible [.activeNavbarMenu_&]:shadow-nav-res lg:[.activeNavbarMenu_&]:shadow-none">
        <div className="flex items-center justify-between mb-[40px] lg:hidden">
          <Link href="/" className="block">
            <Image src={logoImage} alt="Logo" width={125} height={40} />
          </Link>
          <button
            className={`cursor-pointer text-[#091D3E] hover:text-[#0092FF] hover:rotate-180 ${
              openNavbarLinks ? "openNavbarMenu" : ""
            }`}
            onClick={toggleNavbarLinks}
          >
            <svg
              className="w-[15px] h-[15px] fill-current"
              viewBox="0 0 512.021 512.021"
            >
              <path d="M301.258 256.01 502.645 54.645c12.501-12.501 12.501-32.769 0-45.269-12.501-12.501-32.769-12.501-45.269 0L256.01 210.762 54.645 9.376c-12.501-12.501-32.769-12.501-45.269 0s-12.501 32.769 0 45.269L210.762 256.01 9.376 457.376c-12.501 12.501-12.501 32.769 0 45.269s32.769 12.501 45.269 0L256.01 301.258l201.365 201.387c12.501 12.501 32.769 12.501 45.269 0 12.501-12.501 12.501-32.769 0-45.269L301.258 256.01z"></path>
            </svg>
          </button>
        </div>
        <ul className="level-1 flex flex-col lg:flex-row lg:gap-[20px]">
          {navbarData.navbarMenu.map((item: NavbarLinksItemType) => (
            <NavbarLinksItem
              key={`navbarDataNavbarMenu-${item.title}`}
              item={item}
            />
          ))}
        </ul>
        <div className="mt-[40px] lg:hidden">
          <ul className="flex flex-wrap items-center gap-[10px]">
            <li>
              <a
                href="#"
                aria-label="facebook"
                className="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-[#DDD] hover:border-[#0092FF] bg-[#f9f9f9] hover:bg-[#0092FF] text-[#0092FF] hover:text-white rounded-[3px]"
              >
                <svg
                  className="fill-current w-[15px] h-[15px]"
                  viewBox="0 0 155.139 155.139"
                >
                  <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="X.com"
                className="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-[#DDD] hover:border-[#0092FF] bg-[#f9f9f9] hover:bg-[#0092FF] text-[#0092FF] hover:text-white rounded-[3px]"
              >
                <svg
                  className="fill-current w-[15px] h-[15px]"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="linkedin"
                className="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-[#DDD] hover:border-[#0092FF] bg-[#f9f9f9] hover:bg-[#0092FF] text-[#0092FF] hover:text-white rounded-[3px]"
              >
                <svg
                  className="fill-current w-[15px] h-[15px]"
                  viewBox="0 0 100 100"
                >
                  <path d="M90 90V60.7c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3H38.3V90h16.6V63.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26H90zM11.3 36.6h16.6V90H11.3zM19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="vimeo"
                className="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-[#DDD] hover:border-[#0092FF] bg-[#f9f9f9] hover:bg-[#0092FF] text-[#0092FF] hover:text-white rounded-[3px]"
              >
                <svg
                  className="fill-current w-[15px] h-[15px]"
                  viewBox="0 0 512.011 512.011"
                >
                  <path d="M293.792 152.808c58.304-35.008 89.728 14.336 59.84 70.112-29.952 56-57.44 92.512-71.68 92.512-13.984 0-25.056-37.568-41.44-102.784-16.8-67.552-16.8-189.344-87.072-175.52C87.008 50.248 0 154.248 0 154.248l20.672 27.232s42.88-33.824 57.152-16.992c14.464 16.992 69.216 221.024 87.328 258.752 15.808 33.056 59.68 76.672 107.616 45.568 48.384-31.296 208.096-167.68 236.704-329.056 28.544-161.088-192.512-127.36-215.68 13.056z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="youtube"
                className="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-[#DDD] hover:border-[#0092FF] bg-[#f9f9f9] hover:bg-[#0092FF] text-[#0092FF] hover:text-white rounded-[3px]"
              >
                <svg
                  className="fill-current w-[15px] h-[15px]"
                  viewBox="0 0 310 310"
                >
                  <path d="M297.917 64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359 0-61.369 5.776-72.517 19.938C0 79.663 0 100.008 0 128.166v53.669c0 54.551 12.896 82.248 83.386 82.248h143.226c34.216 0 53.176-4.788 65.442-16.527C304.633 235.518 310 215.863 310 181.835v-53.669c0-29.695-.841-50.16-12.083-63.521zm-98.896 97.765-65.038 33.991a9.997 9.997 0 0 1-14.632-8.863v-67.764a10 10 0 0 1 14.609-8.874l65.038 33.772a10 10 0 0 1 .023 17.738z"></path>
                </svg>
              </a>
            </li>
          </ul>
          <div className="text-[13px] capitalize leading-[1.6] font-[700] mt-[25px]">
            @ NestEstate 2026. All Rights Reserved.
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 opacity-0 [.activeNavbarMenu_&]:opacity-100 invisible [.activeNavbarMenu_&]:visible lg:[.activeNavbarMenu_&]:invisible lg:[.activeNavbarMenu_&]:opacity-0 bg-[#091D3E]/20 z-[-1] cursor-pointer ${openNavbarLinks ? "activeNavbarMenu" : ""}`}
        onClick={toggleNavbarLinks}/>
    </div>
  );
};

export default NavbarLinks;
