import { useRef, MouseEvent, useState, Ref } from "react";
import styles from "./Hero.module.css";
import { HeroProps } from "./Hero.props";
import { motion } from "framer-motion";
export const Hero1 = ({ className, ...props }: HeroProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  function getCoordinates(e: MouseEvent) {
    const el = containerRef.current;
    if (el)
      setCoordinates({ x: e.pageX - el.offsetLeft, y: e.pageY - el.offsetTop });
  }

  function onClick() {
    const offset = containerRef.current?.offsetLeft;
    console.log("offsetLeft: ", offset);
  }
  return (
    <section
      ref={containerRef}
      className={`${className} -m-3 h-[80vh] border center bg-hero bg-no-repeat bg-center rounded-xl relative`}
      {...props}
      onClick={onClick}
      onMouseMove={(e) => getCoordinates(e)}
    >
      <motion.div
        className={`${styles.spotLight}`}
        animate={{
          x: 0,
          y: 89,
        }}
        transition={{ type: "tween" }}
      />
    </section>
  );
};
