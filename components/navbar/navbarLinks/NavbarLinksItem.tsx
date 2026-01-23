import { NavbarLinksItemType } from "@/types/navbarTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import NavbarLinksItemChildren from "./NavbarLinksItemChildren";
import { useShareData } from "@/providers/ShareData";

const NavbarLinksItem = ({ item }: { item: NavbarLinksItemType }) => {
  const { toggleNavbarLinks } = useShareData();
  const pathname = usePathname();

  const [openLinkItem, setOpenLinkItem] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hasChildren = !!item.children;
  const isActive =
    pathname === item.url ||
    (hasChildren &&
      item?.children?.some((subItem) => pathname === subItem.url));

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleOpenLinkItem = useCallback(() => {
    if (isMobile && hasChildren) {
      setOpenLinkItem((prev) => !prev);
    }
  }, [isMobile, hasChildren]);
  return (
    <li
      className={`group item-level-1 ${hasChildren ? "has-menu" : ""}`}
      onClick={() => {
        handleOpenLinkItem();
        toggleNavbarLinks();
      }}
    >
      <Link
        href={item.url}
        className={`link-level-1 flex items-center justify-between lg:gap-[5px] lg:py-[30px] leading-[45px] lg:leading-[25px] cursor-pointer text-[14px] text-[#091D3E] hover:text-[#0092FF] capitalize font-[700] [&.active-link]:text-[#0092FF] ${isActive ? "active-link" : ""} ${openLinkItem ? "active" : ""} `}
      >
        {item.title}
        {hasChildren && (
          <i className="inline-flex items-center justify-center w-[25px] h-[25px] bg-[#0092FF] rounded-[3px] text-white [.link-level-1.active_&]:rotate-180 lg:w-auto lg:h-auto lg:bg-transparent lg:text-[#091D3E] lg:group-hover:rotate-180 lg:group-hover:text-[#0092FF] lg:[.active-link_&]:text-[#0092FF]">
            <svg
              className="w-[10px] h-[10px] fill-current"
              viewBox="0 0 451.847 451.847"
            >
              <path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"></path>
            </svg>
          </i>
        )}
      </Link>
      {hasChildren && (
        <ul
          className={`level-2 flex flex-col bg-white border-[#DDD] rounded-[3px] shadow-level2Menu translate-y-[20px] opacity-0 h-0 border-[0px] [&.level-2.active]:translate-y-0 [&.level-2.active]:opacity-100 [&.level-2.active]:h-auto [&.level-2.active]:border-[1px] lg:absolute lg:h-auto lg:border-[1px] lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:min-w-[225px] lg:invisible lg:group-hover:visible ${openLinkItem ? "active" : ""}`}
        >
          {item?.children?.map((subItem, subIndex) => (
            <NavbarLinksItemChildren
              key={`NavbarLinksItemChildren-${subIndex}`}
              data={subItem}
              parentData={item}
              index={subIndex}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarLinksItem;
