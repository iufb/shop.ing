import { useEffect, useState } from "react";
export const useResize = () => {
  const [size, setSize] = useState<string>("");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize("mobile");
      } else if (window.innerWidth < 1024) {
        setSize("tablet");
      } else {
        setSize("large");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (size == "mobile") {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  return { size, isMobile };
};
