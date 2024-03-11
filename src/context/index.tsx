import { createContext, ReactNode, useEffect, useState } from 'react'

import { CartCoffeeProps } from '../components/ProductCart'

interface CartProviderProps {
  children: ReactNode
}
interface CartProductProps extends CartCoffeeProps {
  amount: number
}
interface CartContextProps {
  cart: CartProductProps[]
  totalValueOfItems: number
  handleAddProductInTheCart: (currentProduct: CartProductProps) => void
  handleRemoveItemFromCart: (productId: number) => void
  handleUpdateAmountOfItems: (
    coffee: number,
    type: 'increase' | 'decrease',
  ) => void
}

export const CartContext = createContext({} as CartContextProps)

const COFFEE_DATA_LOCAL_STORAGE = 'coffee_data_storage'

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProductProps[]>(() => {
    const StorgaedCoffees = localStorage.getItem(COFFEE_DATA_LOCAL_STORAGE)
    if (StorgaedCoffees) {
      return JSON.parse(StorgaedCoffees)
    }
    return []
  })

  const totalValueOfItems = cart.reduce((total, item) => {
    return total + item.price * item.amount
  }, 0)

  useEffect(() => {
    localStorage.setItem(COFFEE_DATA_LOCAL_STORAGE, JSON.stringify(cart))
  }, [cart])

  const handleAddProductInTheCart = (currentProduct: CartProductProps) => {
    const thisProductExistsInTheCart = cart.findIndex(
      (product) => product.id === currentProduct.id,
    )

    if (thisProductExistsInTheCart >= 0) {
      const newCart = cart.map((item) => {
        if (currentProduct.id === item.id) {
          return { ...item, amount: currentProduct.amount }
        }
        return item
      })
      setCart(newCart)
    } else {
      setCart((state) => [...state, currentProduct])
    }
  }

  const handleUpdateAmountOfItems = (
    coffee: number,
    type: 'increase' | 'decrease',
  ) => {
    const newCart = cart.map((item) => {
      if (item.id === coffee) {
        return {
          ...item,
          amount: type === 'increase' ? item.amount + 1 : item.amount - 1,
        }
      }
      return item
    })
    setCart(newCart)
  }

  const handleRemoveItemFromCart = (productId: number) => {
    const thisProductExistsInTheCart = cart.findIndex(
      (product) => product.id === productId,
    )

    if (thisProductExistsInTheCart >= 0) {
      const newCart = cart.filter((product) => product.id !== productId)
      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddProductInTheCart,
        handleUpdateAmountOfItems,
        handleRemoveItemFromCart,
        totalValueOfItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
