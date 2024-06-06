import { useContext } from 'react';
import { CartContext, CartValue } from './CartContext';

export function useCart(): CartValue {
  const value = useContext(CartContext);
  return value;
}
