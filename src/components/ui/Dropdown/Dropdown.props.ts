import { productNavLink } from "@/utils/types/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  list: productNavLink[];
  text: string;
}
