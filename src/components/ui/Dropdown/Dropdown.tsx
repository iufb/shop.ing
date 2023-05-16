import { useState } from "react";
import { Button } from "../Button/Button";
import { DropdownProps } from "./Dropdown.props";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  dropdownContainer,
  dropdownItem,
  dropdownList,
  slideAnimation,
} from "@/utils/motion";
export const Dropdown = ({
  className,
  list,
  text,
  ...props
}: DropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${className}  relative`} {...props}>
      <Button
        type="primary"
        EndIcon={open ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        onClick={() => setOpen((prev) => !prev)}
      >
        {text}
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute  top-14 col bg-gray-50 text-gray-800 font-bold gap-2 z-20 p-2 rounded-md"
            {...dropdownContainer}
          >
            <motion.ul {...dropdownList}>
              {list.map((link) => (
                <motion.li key={link.link} {...dropdownItem}>
                  <Link
                    href={link.path}
                    className="text-md uppercase hover:textFlow"
                  >
                    {link.link}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
