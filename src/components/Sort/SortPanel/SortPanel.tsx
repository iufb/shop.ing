import { Sort } from "../Sort";
import { SortPanelProps } from "./SortPanel.props";

export const SortPanel = ({
  className,
  quantity,
  sort,
  onSort,
  ...props
}: SortPanelProps): JSX.Element => {
  return (
    <div
      className={`${className} flex lg:justify-between lg:flex-row flex-col-reverse center gap-2`}
      {...props}
    >
      <p className="text-gray-600">
        В продаже <span className="text-black font-bold"> {quantity}</span>{" "}
        товаров
      </p>
      <Sort onSort={onSort} sort={sort} />
    </div>
  );
};
