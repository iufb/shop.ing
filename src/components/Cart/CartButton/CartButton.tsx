import { useCart } from "@/hooks/useCart";
import { CartButtonProps } from "./CartButton.props";
import { Button } from "@/components/ui";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const CartButton = ({
  className,
  ...props
}: CartButtonProps): JSX.Element => {
  const { products, toggleCart } = useCart();

  return (
    <div className={`${className} center gap-2`} {...props}>
      <span className="text-md lg:block hidden text-white ring ring-purple-200 font-bold bg-purple-300 rounded-3xl px-3 py-1">
        {products.length}
      </span>
      <Button
        type="primary"
        onClick={() => toggleCart(true)}
        className="relative"
      >
        <span className="hidden lg:block">Cart</span>
        <AiOutlineShoppingCart className="block lg:hidden w-5 h-5 " />
        <span className="absolute -top-3 text-md block lg:hidden text-white -left-3 px-2 bg-purple-300 ring ring-purple-200 rounded-full ">
          {products.length}
        </span>
      </Button>
    </div>
  );
};
