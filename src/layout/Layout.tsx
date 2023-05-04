import { FunctionComponent, PropsWithChildren } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { CartContextProvider } from "@/context/cart.context";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="col container gap-3 h-full ">
      <Navbar />
      <div className="w-full h-fit">{children}</div>
      <Footer />
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
