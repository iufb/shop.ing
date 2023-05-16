import { useRef, useEffect, useState } from "react";
import { HeroProps } from "./Hero.props";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
export const Hero = ({ className, ...props }: HeroProps): JSX.Element => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [variant, setVariant] = useState("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    if (refContainer.current) {
      refContainer.current.addEventListener("mousemove", (e) => moveCursor(e));
    }
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
    },
    text: {
      opacity: 1,
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
    },
  };
  console.log(variant, mouseEnter);
  const onMouseEnter = () => {
    setMouseEnter(true);
    setVariant("text");
  };
  const onMouseLeave = () => {
    setMouseEnter(false);
    setVariant("default");
  };
  return (
    <section
      className={`${className}  lg:h-[80vh] h-full border flex flex-col lg:flex-row  lg:items-center p-3 lg:p-0    rounded-xl relative`}
      {...props}
      ref={refContainer}
    >
      <Link href={"market"}>
        <div
          className=" col w-full gap-4 bg-white text-center lg:p-[120px] cursor-none "
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <h1 className="lg:text-7xl text-5xl uppercase">
            start shop<span className="text-red-700">.</span>ing
          </h1>
          <p className="lg:text-2xl text-xl">
            Find what you want &rarr; add it to the cart &rarr; buy it &rarr;
            enjoy your purchase.
          </p>
        </div>
      </Link>
      <Image
        src={"/hero2.svg"}
        alt="hero"
        width={100}
        height={100}
        className="w-full h-full flex-1 "
      />
      <motion.div
        variants={variants}
        animate={variant}
        className={`fixed left-0 top-0 rounded-full center  p-4  z-20 ${
          mouseEnter ? "bg-violet-600" : "bg-violet-400"
        } `}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        {mouseEnter && (
          <AiOutlineShoppingCart className="w-full h-full fill-white" />
        )}
      </motion.div>
    </section>
  );
};
