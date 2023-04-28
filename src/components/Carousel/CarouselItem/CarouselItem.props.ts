import { ICarouselItem } from "@/utils/types/carouselItem.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface CarouselItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ICarouselItem;
}
