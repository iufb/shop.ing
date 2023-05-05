import { navlinks } from "@/utils/constants";
import { FaUser } from "react-icons/fa";
import { Logo, Button } from "../../components/ui";
import { NavbarProps } from "./Navbar.props";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
export const Navbar = ({}: NavbarProps): JSX.Element => {
  const { products, toggleCart } = useCart();
  return (
    <nav className=" w-full between">
      <div className="center gap-3 ">
        <Logo />
        {navlinks.map((link) => (
          <Link
            href={link.path}
            key={link.link}
            className={`uppercase ${
              link.link == "market" && "textFlow font-bold"
            } text-xl hover:text-blue-500 hover:underline underline-offset-4`}
          >
            {link.link}
          </Link>
        ))}
      </div>
      <div className="flex gap-2 ">
        <Button type="icon">
          <FaUser />
        </Button>

        <Button type="primary" onClick={() => toggleCart(true)}>
          <>
            <span className="text-md text-red-900 font-bold">
              {products.length}
            </span>
            Cart
          </>
        </Button>
      </div>
    </nav>
  );
};
