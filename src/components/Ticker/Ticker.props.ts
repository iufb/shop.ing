import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface TickerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  isPlaying: boolean;
  duration?: number;
  direction?: number;
  contentWidth: number;
}
