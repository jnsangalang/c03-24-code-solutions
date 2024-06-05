import { ReactNode, createContext, useContext } from 'react';
import { Product } from '../lib';
type DefaultValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  totalPrice: () => number;
  children: ReactNode;
};
export const defaultValue: DefaultValue = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: () => 0.0,
  children: [],
};

export const CartContext = createContext(defaultValue);

export function useMyContext() {
  useContext(CartContext);

  // return <div>{value}</div>
}
