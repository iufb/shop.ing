import { IProduct } from "@/utils/types/products.type";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
}
