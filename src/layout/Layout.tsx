import { FunctionComponent, PropsWithChildren, Suspense } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { CartContextProvider } from "@/context/cart.context";
import { useCart } from "@/hooks/useCart";
import { WidthObserver } from "@/context/width-observer.context";
import { Loader } from "@/components/ui";
import { useResize } from "@/hooks/useResize";
import dynamic from "next/dynamic";
const Cart = dynamic(() => import("../components/Cart/Cart"));
const Layout = ({ children }: PropsWithChildren) => {
  const { isOpen } = useCart();
  const { isMobile } = useResize();
  return (
    <div
      className={`col container gap-3 h-full  ${
        isOpen && "overflow-hidden h-screen"
      } `}
    >
      <Navbar />

      <Suspense fallback={<Loader />}>
        <div className="w-full h-fit">{children}</div>
      </Suspense>
      <Footer />
      {isOpen && <Cart isMobile={isMobile} />}
    </div>
  );
};
export const WithLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function WithLayoutComponent(props: T) {
    return (
      <CartContextProvider>
        <WidthObserver>
          <Layout>
            <Component {...props} />
          </Layout>
        </WidthObserver>
      </CartContextProvider>
    );
  };
};
