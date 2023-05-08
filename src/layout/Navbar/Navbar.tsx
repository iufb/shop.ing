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
      <div className="center gap-2 ">
        <span className="text-md text-white ring ring-purple-200 font-bold bg-purple-300 rounded-3xl px-3 py-1">
          {products.length}
        </span>
        <Button type="primary" onClick={() => toggleCart(true)}>
          <>Cart</>
        </Button>
      </div>
    </nav>
  );
};
