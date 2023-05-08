import React, { PropsWithChildren, useEffect, useState } from "react";
import { IProduct } from "@/utils/types/products.interface";
import { getFormattedPrice, priceToNumber } from "@/utils/utils";

interface ICartContext {
  isOpen: boolean;
  toggleCart: (value: boolean) => void;
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  deleteProduct: (product: IProduct) => void;
  totalPrice: string;
  getTotalPrice: () => void;
}
export const CartContext = React.createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
  deleteProduct: () => {},
  totalPrice: "0",
  getTotalPrice: () => {},
});
export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpenState, setIsOpenState] = useState(false);
  const [productsState, setProductsState] = useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState("");
  const toggleCart = (value: boolean) => {
    setIsOpenState(value);
  };
  const addProduct = (product: IProduct) => {
    const addedProduct = productsState.find((p) => p.id === product.id);
    if (addedProduct) {
      setProductsState(
        productsState.map((product: IProduct) => {
          if (product.id == addedProduct.id) {
            let quantity = product.quantity + 1;
            return { ...product, quantity };
          } else {
            return product;
          }
        })
      );
    } else {
      setProductsState([...productsState, product]);
    }
  };
  const deleteProduct = (product: IProduct) => {
    setProductsState([...productsState.filter((p) => p.id !== product.id)]);
  };
  // useEffect(() => {
  //   if (productsState.length == 0) {
  //     setTotalPrice("0");
  //   }
  // }, [productsState.length]);
  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < productsState.length; i++) {
      let quantity = productsState[i].quantity;
      total += priceToNumber(productsState[i].price) * quantity;
    }
    setTotalPrice(getFormattedPrice(total));
  };

  return (
    <CartContext.Provider
      value={{
        isOpen: isOpenState,
        toggleCart,
        products: productsState,
        addProduct,
        deleteProduct,
        getTotalPrice,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
