import { CartContext } from "@/context/cart.context";
import { useContext } from "react";

export const useCart = () => {
  const {
    products,
    addProduct,
    toggleCart,
    isOpen,
    deleteProduct,
    totalPrice,
    getTotalPrice,
    productIsAdded,
  } = useContext(CartContext);
  return {
    products,
    addProduct,
    toggleCart,
    isOpen,
    deleteProduct,
    totalPrice,
    getTotalPrice,
    productIsAdded,
  };
};
