import { Button, Logo } from "../../components/ui";
import { CartButton } from "@/components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navlinks } from "./Navlinks/Navlinks";
import { useState } from "react";
import dynamic from "next/dynamic";
const BurgerMenu = dynamic(() => import("./BurgerMenu/BurgerMenu"));
export const Navbar = (): JSX.Element => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <nav className=" w-full between ">
      <div className="gap-3  center ">
        <Logo />
        <Navlinks className="hidden lg:block" />
      </div>
      <div className=" center gap-2">
        <CartButton />
        <div className="relative">
          <Button
            type="icon"
            className="p-2 block lg:hidden "
            onClick={() => setBurgerOpen((prev) => !prev)}
          >
            <GiHamburgerMenu className="w-6 h-6 fill-gray-600" />
          </Button>
          {burgerOpen && <BurgerMenu />}
        </div>
      </div>
    </nav>
  );
};
