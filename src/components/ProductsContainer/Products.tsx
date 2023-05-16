import { ProductsProps } from "./Products.props";
import { ProductCard } from "../ProductCard/ProductCard";
import { slideAnimation } from "@/utils/motion";
import { Loader } from "../ui";

const Products = ({
  className,
  products,
  ...props
}: ProductsProps): JSX.Element => {
  if (products.length == 0) return <Loader className="justify-self-center " />;
  return (
    <div
      className={`xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-5 p-4    gap-3 grid w-full  ${className} `}
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
export default Products;
