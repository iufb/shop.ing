import { ICarouselItem } from "@/utils/types/carouselItem.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface CarouselProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  carouselItems: ICarouselItem[];
}
