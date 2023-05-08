import Image from "next/image";
import { CartItemProps } from "./CartItem.props";

import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
export const CartItem = ({
  className,
  product,
  ...props
}: CartItemProps): JSX.Element => {
  const { url, title, price } = product;
  const [quantity, setQuantity] = useState(product.quantity);
  const { deleteProduct, getTotalPrice } = useCart();
  const increaseQuantity = () => {
    product.quantity += 1;
    setQuantity(product.quantity);
  };
  const decreaseQuantity = () => {
    if (product.quantity != 1) {
      product.quantity -= 1;
    }
    setQuantity(product.quantity);
  };
  useEffect(() => {
    getTotalPrice();
  }, [quantity]);
  return (
    <div
      className={`${className} flex  flex-row  items-center gap-2 px-2 w-full h-20 border rounded-lg`}
      {...props}
    >
      <Image
        src={url}
        alt="product"
        width={50}
        height={50}
        className="rounded-md"
      />
      <div className="col  text-gray-600 gap-3  w-[60%]">
        <h3 className="text-sm">{title}</h3>
        <p>{price}</p>
      </div>
      <div className="flex flex-1  gap-2">
        <div className="flex gap-2 text-lg cursor-pointer">
          <button onClick={decreaseQuantity} disabled={product.quantity === 1}>
            -
          </button>
          {quantity}
          <button onClick={increaseQuantity}>+</button>
        </div>
        <Button type="icon" onClick={() => deleteProduct(product)}>
          <AiOutlineClose className=" w-6 p-1 h-6 hover:fill-white" />
        </Button>
      </div>
    </div>
  );
};
