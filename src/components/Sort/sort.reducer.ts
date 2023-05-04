import { IProduct } from "@/utils/types/products.interface";
import { sortType } from "@/utils/types/types";
export enum SortEnum {
  priceUp = "price-up",
  priceDown = "price-down",
}
export type SortActions =
  | { type: SortEnum }
  | { type: SortEnum.priceUp }
  | { type: "reset"; initialState: IProduct[] };
export interface SortReducerState {
  sort: SortEnum;
  products: IProduct[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.priceUp:
      return {
        sort: SortEnum.priceUp,
        products: state.products.sort(
          (a, b) => parseInt(a.price) - parseInt(b.price)
        ),
      };
    case SortEnum.priceDown:
      return {
        sort: SortEnum.priceDown,
        products: state.products.sort(
          (a, b) => parseInt(b.price) - parseInt(a.price)
        ),
      };
    case "reset":
      return {
        sort: SortEnum.priceDown,
        products: action.initialState,
      };
    default:
      throw new Error("Error");
  }
};
