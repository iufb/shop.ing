import { DetailedHTMLProps, HTMLAttributes, SetStateAction } from "react";
import { IProduct } from "@/utils/types/products.interface";
import { sortType } from "@/utils/types/types";
import { SortEnum } from "./sort.reducer";
export interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
  onSort: (type: SortEnum) => void;
}
