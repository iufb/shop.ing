import { statusType } from "@/utils/types/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface BrandsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  brands: string[];
  status: statusType;
}
