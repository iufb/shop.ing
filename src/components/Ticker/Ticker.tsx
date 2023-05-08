import React, { useEffect, useState } from "react";
import { TickerProps } from "./Ticker.props";
import {
  AnimationPlaybackControls,
  useAnimate,
  useInView,
} from "framer-motion";

export const Ticker = ({
  children,
  className,
  isPlaying,
  direction = -1,
  duration = 10,
  contentWidth,
  ...props
}: TickerProps): JSX.Element => {
  const tickerRef = React.useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const [animationControls, setAnimationControls] = useState<
    AnimationPlaybackControls | undefined
  >(undefined);
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView && !animationControls) {
      const controls = animate(
        scope.current,
        { x: contentWidth * direction },
        { ease: "linear", duration, repeat: Infinity }
      );
      controls.play();
      setAnimationControls(controls);
    }
  }, [isInView]);
  useEffect(() => {
    if (animationControls) {
      if (!isInView || !isPlaying) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isInView, isPlaying]);
  return (
    <div
      className={`${className} w-full h-full overflow-hidden`}
      {...props}
      ref={tickerRef}
    >
      <div ref={scope}>{children}</div>
    </div>
  );
};
