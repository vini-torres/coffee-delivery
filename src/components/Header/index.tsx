import { House, Package, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import CoffeeDeliveryLoggo from '../../assets/Logo.svg'
import { DropdownCart } from '../DropdownCart'
import { NavLink } from '../Link'

export function Header() {
  const cart = []
  const [isOpenCart, setIsOpenCart] = useState(false)

  const handleOpenModalCart = () => {
    setIsOpenCart(!isOpenCart)
  }

  return (
    <div className="fixed top-0 z-50 w-full border-b border-gray-500 px-2 shadow-sm">
      <header className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-1">
        <div className="flex items-center gap-6">
          <img
            src={CoffeeDeliveryLoggo}
            className="xsm:border-r h-9 border-gray-500 pr-5"
            alt="Logo da Coffee Delivery"
          />
          <div className="xsm:flex hidden items-center gap-3">
            <NavLink to="/">
              <House size={17} /> Home
            </NavLink>
            <NavLink to="/cart">
              <Package size={17} /> Pedidos
            </NavLink>
          </div>
        </div>
        <button
          onClick={handleOpenModalCart}
          className="relative flex h-10 w-16 items-center justify-center rounded bg-[#EBE5F9] text-purple-secondary transition-colors hover:bg-opacity-85"
        >
          <ShoppingCart size={22} />
          {cart.length >= 1 && (
            <span className="absolute right-3 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-primary text-xs text-white">
              {cart.length}
            </span>
          )}
        </button>

        <DropdownCart
          onClose={() => setIsOpenCart(false)}
          isOpen={isOpenCart}
        />
      </header>
    </div>
  )
}
