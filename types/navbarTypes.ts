export interface NavbarLinksItemType {
  title: string;
  url: string;
  active?: boolean;
  children?: NavbarLinksItemType[];
}