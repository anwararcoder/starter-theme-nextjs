export type SectionType =
  | "category"
  | "banner"
  | "categoryItems"
  | "recent_orders"
  | "loyalty"
  | "product"
  | "category_sub_categories";

export type SectionStyle =
  | "grid_horizontal"
  | "grid_vertical"
  | "slider"
  | "infinite"
  | "basic"
  | "background_image"
  | null;

export interface Section {
  id: number;
  name: string;
  type: SectionType;
  image: string | null;
  section_style: SectionStyle;
  background_color: string | null;
}
