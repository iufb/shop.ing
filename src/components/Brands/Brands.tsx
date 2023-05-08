import Image from "next/image";
import { BrandsProps } from "./Brands.props";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "@/utils/motion";
import { Loader } from "../ui";
import { useCallback, useContext, useRef } from "react";
import { WidthContext } from "@/context/width-observer.context";
import { useAnimationFrame } from "@/context/use-animation-frame";
export const Brands = ({
  className,
  brands,
  status,
  ...props
}: BrandsProps): JSX.Element => {
  const { innerWidth } = useContext(WidthContext);
  const enabled = innerWidth < 1020;
  return (
    <div
      className={`${className}   max-h-[100px] h-full  ${
        brands.length == 0 && "hidden"
      }  w-full   bg-[#eee] py-5`}
      {...props}
    >
      {status == "loading" ? (
        <Loader className="justify-self-center" />
      ) : (
        <AnimatePresence>
          <div className="center gap-3">
            {brands.map((brand) => (
              <motion.div
                key={brand}
                className="border px-10 py-5 bg-white"
                {...slideAnimation("left")}
              >
                <Image
                  src={brand}
                  alt="brand"
                  width={80}
                  height={20}
                  priority
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}
    </div>
  );
};
