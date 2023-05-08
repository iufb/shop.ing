import { ButtonProps } from "./Button.props";
import { motion } from "framer-motion";
export const Button = ({
  children,
  type,
  active,
  className,
  ...props
}: ButtonProps) => {
  const buttonType = (button: typeof type) => {
    switch (button) {
      case "icon":
        return "bg-gray-200   hover:bg-gray-400  hover:ring-gray-300";
      case "primary":
        return " bg-violet-400 px-5 py-2 hover:bg-violet-500 hover:ring-violet-200 text-white";
      case "white":
        return `${
          active ? "bg-gray-200" : "bg-white"
        }  border px-3 py-2 hover:bg-gray-100 hover:ring-white text-black text-md font-bold `;
      default:
        return "";
    }
  };
  return (
    <motion.button
      whileTap={{ scale: 1.05 }}
      className={`${className}   rounded-md  hover:ring-4 ${buttonType(type)}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
