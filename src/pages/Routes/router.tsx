import { Route, Routes } from 'react-router-dom'

import { Cart } from '../app/Cart'
import { Delivery } from '../app/Delivery'
import { Home } from '../app/Home'
import { DefaultLayout } from '../layouts/defaultLayout'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  )
}
