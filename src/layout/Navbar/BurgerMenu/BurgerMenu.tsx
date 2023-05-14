import { fadeAnimation } from "@/utils/motion";
import { Navlinks } from "../Navlinks/Navlinks";
import { BurgerMenuProps } from "./BurgerMenu.props";
import { AnimatePresence, motion } from "framer-motion";

const BurgerMenu = ({ className }: BurgerMenuProps): JSX.Element => {
  return (
    <AnimatePresence>
      <motion.div
        {...fadeAnimation}
        className={`${className} absolute -left-10 p-4 rounded-md bg-gray-100 top-12 z-40 `}
      >
        <Navlinks className="block lg:hidden " />
      </motion.div>
    </AnimatePresence>
  );
};
export default BurgerMenu;
