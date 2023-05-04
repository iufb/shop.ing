import Image from "next/image";
import { ProductCardProps } from "./ProductCard.props";
import React, { useCallback, useState } from "react";
import { motion, HTMLMotionProps, MotionProps } from "framer-motion";
import { fadeAnimation } from "@/utils/motion";
import { Button } from "../ui";
import { useCart } from "@/hooks/useCart";
type MotionDivProps = Omit<ProductCardProps, keyof MotionProps>;
export const ProductCard: React.FC<MotionDivProps> = ({
  product,
  className,
  ...props
}): JSX.Element => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const { addProduct } = useCart();
  return (
    <motion.div
      {...props}
      className={`${className} w-[300px]  h-full bg-white center col gap-1 p-2 rounded-md relative shadow shadow-gray-300 cursor-pointer`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <Image
        src={product.url}
        alt="product image"
        width={255}
        height={255}
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <h2 className="text-lg text-gray-700 font-bold text-center flex-1">
        {product.title}
      </h2>
      {mouseEnter && (
        <motion.div
          className="w-full h-full center absolute bg-gray-200 col rounded-md"
          {...fadeAnimation}
        >
          {" "}
          <div className="flex-1 center col">
            {product.details.map((detail: string, index: number) => (
              <p key={index} className="text-sm text-gray-500 text-center">
                {detail}
              </p>
            ))}
          </div>
          <Button
            type="primary"
            className="mb-3 "
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </Button>
        </motion.div>
      )}
      <p className="text-lg">
        Цена: <span className="text-red-600">{product.price}</span>
      </p>
    </motion.div>
  );
};
