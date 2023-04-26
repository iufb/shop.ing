import { useEffect, useRef, MouseEvent, useState } from "react";
import styles from "./Hero.module.css";
import { HeroProps } from "./Hero.props";
import { Button } from "../ui";
import { useRouter } from "next/router";
export const Hero2 = ({ className, ...props }: HeroProps): JSX.Element => {
  const spotLightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const spotLightSize = "transparent 10%, rgba(0, 0, 0, 0.7) 30%";
  const router = useRouter();
  useEffect(() => {
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
      <div className="w-full h-full z-20 center col gap-6">
        <h1 className="text-7xl font-bold text-white hover:textFlow hover:transition-colors hover:ease-out ">
          Start Shop.ING!
        </h1>
        <Button type="white" onClick={() => router.push("market")}>
          Visit
        </Button>
      </div>
    </section>
  );
};
