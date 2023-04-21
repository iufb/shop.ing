import { navlinks } from "@/utils/constants";
import { FaUser } from "react-icons/fa";
import { Logo, Button } from "../ui";
import { NavbarProps } from "./Navbar.props";
import Link from "next/link";
export const Navbar = ({}: NavbarProps): JSX.Element => {
  return (
    <nav className=" w-full between  ">
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
        <Button type=" primary">Cart</Button>
      </div>
    </nav>
  );
};
