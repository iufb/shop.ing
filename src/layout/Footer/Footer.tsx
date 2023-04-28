import { FooterProps } from "./Footer.props";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div
      className={`w-full h-[100px] border-gray-100 center text-gray-800 font-bold mb-3 ${className}`}
      {...props}
    >
      Copyright © {new Date().getFullYear()} iufb. All Rights Reserved.
    </div>
  );
};
