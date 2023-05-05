import { FunctionComponent, PropsWithChildren } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { CartContextProvider } from "@/context/cart.context";
import { useCart } from "@/hooks/useCart";
import { Cart } from "@/components";

const Layout = ({ children }: PropsWithChildren) => {
  const { isOpen } = useCart();
  return (
    <div
      className={`col container gap-3 h-full ${
        isOpen && "overflow-hidden h-screen"
      } `}
    >
      <Navbar />
      <div className="w-full h-fit">{children}</div>
      <Footer />
      {isOpen && <Cart />}
    </div>
  );
};
export const WithLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function WithLayoutComponent(props: T) {
    return (
      <CartContextProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </CartContextProvider>
    );
  };
};
