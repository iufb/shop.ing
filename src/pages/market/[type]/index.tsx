import { Loader } from "@/components/ui";
import { WithLayout } from "@/layout/Layout";
import { getProduct, productType } from "@/utils/api-client";
import { fadeAnimation, slideAnimation } from "@/utils/motion";
import { IProduct } from "@/utils/types/products.type";
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
    <div className="w-full center  h-screen">
      <div className="grid-cols-2  grid w-full h-full ">
        {products && !isLoading ? (
          <AnimatePresence>
            {products.map((product) => (
              //ProductCard
              <motion.div key={product.id} {...slideAnimation("up")}>
                <img src={product.url} />
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                {product.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </motion.div>
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
