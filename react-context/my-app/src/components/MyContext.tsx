import { ReactNode, createContext, useContext } from 'react';
import { Product } from '../lib';

type DefaultValue = {
  cart: Product[];
  addToCart: () => void;
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

export const MyContext = createContext(defaultValue);

export function useMyContext() {
  useContext(MyContext);

  // return <div>{value}</div>
}
