import Image from "next/image";
import { CartItemProps } from "./CartItem.props";

import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui";
export const CartItem = ({
  className,
  product,
  ...props
}: CartItemProps): JSX.Element => {
  const { url, title, price } = product;
  return (
    <div
      className={`${className} flex items-center gap-2 px-2 w-full h-20 border rounded-lg`}
      {...props}
    >
      <Image
        src={url}
        alt="product"
        width={50}
        height={50}
        className="rounded-md"
      />
      <div className="col text-gray-600 gap-3  w-[60%]">
        <h3 className="text-sm">{title}</h3>
        <p>{price}</p>
      </div>
      <div className="flex  gap-2">
        <Button type="icon">
          <AiOutlineClose className=" w-6 p-1 h-6 hover:fill-red-600" />
        </Button>
      </div>
    </div>
  );
};
