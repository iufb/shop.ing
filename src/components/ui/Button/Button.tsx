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
        return " bg-blue-400 px-5 py-2 hover:bg-blue-500 hover:ring-blue-200 text-white";
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
