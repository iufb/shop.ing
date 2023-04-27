import { ProductCard } from "@/components";
import { Loader } from "@/components/ui";
import { WithLayout } from "@/layout/Layout";
import { getProduct, productType } from "@/utils/api-client";
import { fadeAnimation, slideAnimation } from "@/utils/motion";
import { IProduct } from "@/utils/types/products.interface";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Type = (): JSX.Element => {
  const { asPath } = useRouter();
  const [products, setProducts] = useState<IProduct[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const type = asPath.split("/")[2] as productType;
  useEffect(() => {
    getProduct(type)
      .then((data) => {
        const productsString = data as string[];
        setProducts(JSON.parse(productsString[0]));
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, [type]);
  return (
    <div className="w-full center  h-full bg-[#eee]">
      <div className="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-5 p-4  gap-3 grid w-full h-full ">
        {products && !isLoading ? (
          <AnimatePresence>
            {products.map((product) => (
              //ProductCard
              <ProductCard
                product={product}
                {...slideAnimation("up")}
                key={product.id}
              />
            ))}
          </AnimatePresence>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default WithLayout(Type);
