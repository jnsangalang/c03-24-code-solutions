import { ReactNode, createContext, useState } from 'react';
import { Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};
export const defaultValue: CartValue = {
  cart: [],
  addToCart: () => {},
};

type Props = {
  children: ReactNode;
};

export const CartContext = createContext(defaultValue);

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  }
  return (
    <CartContext.Provider value={{ cart: cart, addToCart: addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
