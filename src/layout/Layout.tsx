import { FunctionComponent, PropsWithChildren } from "react";
import { Navbar } from "./Navbar/Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="col container ">
      <Navbar />
      <div>{children}</div>
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
