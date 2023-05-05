import { IProduct } from "@/utils/types/products.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface CartItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
}
