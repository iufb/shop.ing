import { useEffect, useRef, MouseEvent } from "react";
import styles from "./Hero.module.css";
import { HeroProps } from "./Hero.props";
export const Hero1 = ({ className, ...props }: HeroProps): JSX.Element => {
  const spotLightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let spotLightSize = "transparent 10%, rgba(0, 0, 0, 0.7) 30%";
    const width = containerRef.current?.clientWidth;
    const height = containerRef.current?.clientHeight;
    window.addEventListener("mousemove", (e) => updateSpotlight(e));
    function updateSpotlight(e) {
      if (spotLightRef.current && width && height) {
        spotLightRef.current.style.backgroundImage = `radial-gradient(circle at ${
          (e.pageX / width) * 100
        }% ${(e.pageY / height) * 100}%, ${spotLightSize}`;
      }
    }
    return () => removeEventListener("mousemove", updateSpotlight);
  }, []);
  return (
    <section
      ref={containerRef}
      className={`${className} h-[80vh] border center bg-hero bg-no-repeat bg-center rounded-xl relative`}
      {...props}
    >
      <div className={`${styles.spotLight}`} ref={spotLightRef} />
    </section>
  );
};
