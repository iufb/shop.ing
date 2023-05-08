import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

interface ScrollValue {
  innerWidth: number;
}
export const WidthContext = createContext<ScrollValue>({ innerWidth: 0 });
export const WidthObserver = ({ children }: PropsWithChildren) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return (
    <WidthContext.Provider value={{ innerWidth }}>
      {children}
    </WidthContext.Provider>
  );
};
