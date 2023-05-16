import { TotalPriceProps } from "./TotalPrice.props";

export const TotalPrice = ({
  className,
  total,
  ...props
}: TotalPriceProps): JSX.Element => {
  return (
    <div
      className={`${className} text-xl text-gray-900  center  gap-2 mx-10`}
      {...props}
    >
      <h3>Total:</h3>
      <div className=" border border-gray-500 mt-1 border-dashed flex-1" />
      <h3>{total}</h3>
    </div>
  );
};
