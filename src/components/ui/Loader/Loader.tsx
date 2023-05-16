import { LoaderProps } from "./Loader.props";

export const Loader = ({ className, ...props }: LoaderProps): JSX.Element => {
  return (
    <div className={`lds-ripple ${className}`} {...props}>
      <div></div>
      <div></div>
    </div>
  );
};
