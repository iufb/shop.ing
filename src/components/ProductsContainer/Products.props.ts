import { IProduct } from "@/utils/types/products.interface";
import { statusType } from "@/utils/types/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ProductsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: IProduct[];
}
