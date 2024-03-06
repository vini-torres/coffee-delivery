import { useContext } from 'react'

import { CartContext } from '../context'

export function useCart() {
  const context = useContext(CartContext)
  return context
}
