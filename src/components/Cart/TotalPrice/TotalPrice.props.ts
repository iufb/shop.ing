import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface TotalPriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  total: string;
}
