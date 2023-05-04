import { AnimatePresence } from "framer-motion";
import { ProductsProps } from "./Products.props";
import { ProductCard } from "../ProductCard/ProductCard";
import { fadeAnimation, slideAnimation } from "@/utils/motion";

export const Products = ({
  className,
  products,
  ...props
}: ProductsProps): JSX.Element => {
  return (
    <div
      className={`xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-5 p-4  gap-3 grid w-full  ${className} `}
      {...props}
    >
      {products.map((product) => (
        <ProductCard
          product={product}
          {...slideAnimation("up")}
          key={product.id}
        />
      ))}
    </div>
  );
};
