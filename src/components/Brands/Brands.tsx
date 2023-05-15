import Image from "next/image";
import { BrandsProps } from "./Brands.props";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "@/utils/motion";
import { Loader } from "../ui";
const Brands = ({ className, brands, ...props }: BrandsProps): JSX.Element => {
  if (!brands) return <Loader className="justify-self-center" />;
  return (
    <div
      className={`${className} w-full      lg:max-h-[100px] max-h-[70px] h-full  ${
        brands.length == 0 && "hidden"
      }     bg-[#eee] py-5`}
      {...props}
    >
      <AnimatePresence>
        <motion.div className="center gap-3 px-2">
          {brands.map((brand) => (
            <motion.div
              key={brand}
              className="border lg:px-10 px-2 py-1 lg:py-5 bg-white"
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Brands;
