import { ButtonProps } from "./Button.props";

export const Button = ({
  children,
  type,
  className,
  ...props
}: ButtonProps) => {
  const buttonType = (button: typeof type) => {
    switch (button) {
      case "icon":
        return "bg-gray-200 px-4  hover:bg-gray-400  hover:ring-gray-300";
      case " primary":
        return " bg-violet-400 px-5 py-2 hover:bg-violet-500 hover:ring-violet-200 text-white";
      case "white":
        return "bg-white px-6 py-4 hover:bg-gray-100 hover:ring-white text-black text-2xl font-bold w-[250px]";
      default:
        return "";
    }
  };
  return (
    <button
      className={`${className} w-full  rounded-md  hover:ring-4 ${buttonType(
        type
      )}`}
      {...props}
    >
      {children}
    </button>
  );
};
