import { useShareData } from "@/providers/ShareData";
import { NavbarLinksItemType } from "@/types/navbarTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const NavbarLinksItemChildren = ({
  parentData,
  data,
  index,
}: {
  data: NavbarLinksItemType;
  parentData: NavbarLinksItemType;
  index: number;
}) => {
  const { toggleNavbarLinks } = useShareData();
  const pathname = usePathname();

  const [openLinkItem, setOpenLinkItem] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hasChildren = !!data.children;
  const isActive = pathname === data.url;
  const isLastItem = parentData?.children?.length === index + 1;

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

  const handleItemClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();
      if (!hasChildren) {
        toggleNavbarLinks();
      }
      handleOpenLinkItem();
    },
    [hasChildren, toggleNavbarLinks, handleOpenLinkItem]
  );

  const handleChildItemClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();
      toggleNavbarLinks();
    },
    [toggleNavbarLinks]
  );

  return (
    <li
      key={`itemChildren-${index}`}
      className={`group/itemLevel2 item-level-2 ${hasChildren ? "has-menu" : ""} ${hasChildren ? "lg:relative" : ""} ${openLinkItem ? "active" : ""}`}
      onClick={handleItemClick}
    >
      <Link
        href={data.url}
        className={`link-level-2 text-bodyColor hover:text-[#F57009] text-[14px] hover:bg-[#f9f9f9] border-[#DDD] font-[500] leading-[1.25] relative flex items-center justify-between py-[12px] px-[25px] ${isActive ? "active-sub-link" : ""} ${isLastItem ? "last:border-b-0" : "border-b-[1px]"} ${openLinkItem ? "active" : ""}`}
      >
        <span className="inline-flex items-center">
          <svg
            className="fill-current w-0 group-hover/itemLevel2:w-[12px] h-[12px] mr-0 group-hover/itemLevel2:mr-[5px]"
            viewBox="0 0 492.004 492.004"
          >
            <path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"></path>
          </svg>
          {data.title}
        </span>
        {data.children && (
          <i className="inline-flex items-center justify-center w-[25px] h-[25px] bg-[#F57009] rounded-[3px] rotate-[270deg] text-white [.link-level-2.active_&]:rotate-180 lg:w-auto lg:h-auto lg:bg-transparent lg:text-[#1C1A30] lg:group-hover/itemLevel2:text-[#F57009] lg:[.active-link_&]:text-[#F57009]">
            <svg
              className="w-[10px] h-[10px] fill-current"
              viewBox="0 0 451.847 451.847"
            >
              <path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"></path>
            </svg>
          </i>
        )}
      </Link>
      {data.children && (
        <ul
          className={`level-3 overflow-hidden flex flex-col bg-white border-[#DDD] rounded-[3px] shadow-none lg:shadow-level2Menu translate-y-[20px] opacity-0 h-0 border-[0px] [&.level-3.active]:translate-y-0 [&.level-3.active]:opacity-100 [&.level-3.active]:h-auto [&.level-3.active]:border-[1px] lg:absolute lg:left-full lg:top-0 lg:h-auto lg:border-[1px] lg:group-hover/itemLevel2:translate-y-0 lg:group-hover/itemLevel2:opacity-100 lg:min-w-[225px] lg:invisible lg:group-hover/itemLevel2:visible ${openLinkItem ? "active" : ""}`}
        >
          {data.children.map((subItem, subIndex) => (
            <li
              key={`NavbarLinksItemChildren-data-children-${subIndex}`}
              className="group/itemLevel3 item-level-3"
              onClick={handleChildItemClick}
            >
              <Link
                className="link-level-3 text-bodyColor hover:text-[#F57009] text-[14px] hover:bg-[#f9f9f9] border-[#DDD] font-[500] leading-[1.25] relative flex items-center justify-between py-[12px] px-[25px]  border-b-[1px]"
                href={subItem.url}
              >
                <span className="inline-flex items-center">
                  <svg
                    className="fill-current w-0 group-hover/itemLevel3:w-[12px] h-[12px] mr-0 group-hover/itemLevel3:mr-[5px]"
                    viewBox="0 0 492.004 492.004"
                  >
                    <path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"></path>
                  </svg>
                  {subItem.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarLinksItemChildren;
