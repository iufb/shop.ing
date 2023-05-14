import { productNavLinks } from "@/utils/constants";
import { ProductNavProps } from "./ProductNav.props";
import Link from "next/link";
import { Dropdown } from "../ui/Dropdown/Dropdown";

export const ProductNav = ({
  className,
  ...props
}: ProductNavProps): JSX.Element => {
  return (
    <div
      className="w-full h-fit py-4 center gap-3 border-t border-b border-gray-200"
      {...props}
    >
      <div className="lg:flex lg:gap-2 hidden ">
        <p className="text-xl font-bold text-gray-600 ">Категории:</p>
        {productNavLinks.map((link) => (
          <Link href={link.path} key={link.link} className="link">
            {link.link}
          </Link>
        ))}
      </div>
      <Dropdown
        list={productNavLinks}
        text="Категории:"
        className="block lg:hidden"
      />
    </div>
  );
};
