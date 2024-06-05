import { createContext, useContext } from 'react';
import { Product } from '../lib';

type DefaultValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
  // children: ReactNode;
};
export const defaultValue: DefaultValue = {
  cart: [],
  addToCart: () => {},
  // children: [],
};

export const CartContext = createContext(defaultValue);

export function useMyContext() {
  useContext(CartContext);

  // return <div>{value}</div>
}
