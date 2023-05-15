import Image from "next/image";
import { ProductCardProps } from "./ProductCard.props";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "@/utils/motion";
import { Button } from "../ui";
import { useCart } from "@/hooks/useCart";
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
}): JSX.Element => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const { addProduct, productIsAdded } = useCart();
  return (
    <motion.div
      className={`${className} w-[300px]  h-full bg-white center col gap-1 p-2 rounded-md relative shadow shadow-gray-300 cursor-pointer`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      {...slideAnimation("up")}
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
            active={productIsAdded(product.id)}
            onClick={() => addProduct(product)}
          >
            {productIsAdded(product.id) ? "Added!" : "Add to Cart"}
          </Button>
        </motion.div>
      )}
      <p className="text-lg">
        Цена: <span className="text-red-600">{product.price}</span>
      </p>
    </motion.div>
  );
};
