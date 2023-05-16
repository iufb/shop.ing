import { Button } from "../ui";
import { SortProps } from "./Sort.props";
import { SortEnum } from "./sort.reducer";
export const Sort = ({
  className,
  onSort,
  sort,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={`${className} flex center gap-2`} {...props}>
      <p>Сортировать: </p>
      <Button
        type="white"
        active={sort == SortEnum.priceUp}
        onClick={() => {
          onSort(SortEnum.priceUp);
        }}
      >
        дешевле
      </Button>
      <Button
        type="white"
        active={sort == SortEnum.priceDown}
        onClick={() => {
          onSort(SortEnum.priceDown);
        }}
      >
        дороже
      </Button>
    </div>
  );
};
