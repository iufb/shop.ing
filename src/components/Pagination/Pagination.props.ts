import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
