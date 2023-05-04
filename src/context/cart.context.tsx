import React, { PropsWithChildren, useState } from "react";
import { IProduct } from "@/utils/types/products.interface";

interface ICartContext {
  isOpen: boolean;
  toggleCart: (value: boolean) => void;
  products: IProduct[];
  addProduct: (product: IProduct) => void;
}
export const CartContext = React.createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
});
export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpenState, setIsOpenState] = useState(false);
  const [productsState, setProductsState] = useState<IProduct[]>([]);
  const toggleCart = (value: boolean) => {
    setIsOpenState(value);
  };
  const addProduct = (product: IProduct) => {
    setProductsState([...productsState, product]);
  };
  return (
    <CartContext.Provider
      value={{
        isOpen: isOpenState,
        toggleCart,
        products: productsState,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
