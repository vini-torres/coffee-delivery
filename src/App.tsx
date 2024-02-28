import { RouterProvider } from 'react-router-dom'

import { CartProvider } from './context'
import { router } from './pages/Routes/router'

export function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}
