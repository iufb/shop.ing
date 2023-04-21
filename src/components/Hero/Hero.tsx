import { useEffect, useRef, MouseEvent } from "react";
import styles from "./Hero.module.css";
import { HeroProps } from "./Hero.props";
import { motion } from "framer-motion";
export const Hero = ({ className, ...props }: HeroProps): JSX.Element => {
  const spotLightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={containerRef}
      className={`${className} h-[80vh] border center bg-hero bg-no-repeat bg-center rounded-xl relative`}
      {...props}
    >
      <motion.div className={`${styles.spotLight}`} ref={spotLightRef} />
    </section>
  );
};
