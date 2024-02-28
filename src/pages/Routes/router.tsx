import { createBrowserRouter } from 'react-router-dom'

import { Delivery } from '../app/Delivery'
import { CartLayout } from '../layouts/cart'
import { HomeLayout } from '../layouts/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/cart',
    element: <CartLayout />,
  },
  {
    path: '/delivery',
    element: <Delivery />,
  },
])
