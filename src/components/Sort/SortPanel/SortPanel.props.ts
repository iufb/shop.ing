import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SortEnum } from "../sort.reducer";
export interface SortPanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  quantity: number;
  onSort: (type: SortEnum) => void;
  sort: SortEnum;
}
