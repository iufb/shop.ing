import { LogoProps } from "./Logo.props";

export const Logo = ({ className, ...props }: LogoProps): JSX.Element => {
  return (
    <div className="text-3xl uppercase font-bold cursor-pointer">
      SHOP<span className="text-red-700 ">.</span>ING
    </div>
  );
};
