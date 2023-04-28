import { FunctionComponent, PropsWithChildren } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="col container gap-3 ">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export const WithLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function WithLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
