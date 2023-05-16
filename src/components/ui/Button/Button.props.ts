import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  type: "icon" | "primary" | "white";
  active?: boolean;
  onClick: () => void;
  StartIcon?: ReactNode;
  EndIcon?: ReactNode;
}
