import { createContext, ReactNode } from 'react'

interface CartContextProps {}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
