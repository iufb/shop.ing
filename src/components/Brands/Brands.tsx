import Image from "next/image";
import { BrandsProps } from "./Brands.props";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "@/utils/motion";
import { Loader } from "../ui";
export const Brands = ({
  className,
  brands,
  status,
  ...props
}: BrandsProps): JSX.Element => {
  return (
    <div
      className={`${className}  gap-3 max-h-[100px] h-full  ${
        brands.length == 0 && "hidden"
      }  w-full center  bg-[#eee] py-5`}
      {...props}
    >
      {status == "loading" ? (
        <Loader className="justify-self-center" />
      ) : (
        <AnimatePresence>
          {brands.map((brand) => (
            <motion.div
              key={brand}
              className="border px-10 py-5 bg-white"
              {...slideAnimation("left")}
            >
              <Image
                src={brand}
                alt="brand"
                width={90}
                height={50}
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
};
