import cx from 'classnames'
import { Trash, X } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'
import { PriceFormatted } from '../../utils/formatted-price'
import { InputNumber } from '../InputNumber'

export interface CartCoffeeProps {
  id: number
  imgURL?: string
  title: string
  price: number
  amount?: number
  tag: string[]
  description: string
}

interface CartCoffee {
  coffee: CartCoffeeProps
  controls?: boolean
}

export function ProductCart({ coffee, controls }: CartCoffee) {
  const { handleUpdateAmountOfItems, handleRemoveItemFromCart } = useCart()

  return (
    <div
      className={cx('relative flex w-full items-start gap-3 border-b pb-6', {
        'border-b border-gray-400': controls,
        '': !controls,
      })}
    >
      <img
        src={`/public/coffees/${coffee.imgURL}`}
        alt=""
        className="w-20 rounded-full bg-gray-50 p-1 shadow-md"
      />
      <div className="flex-1">
        <h3 className="font-medium">{coffee.title}</h3>
        {!controls && (
          <span className="mb-1 block max-w-[90%] text-wrap text-xs text-gray-600 md:text-sm">
            {coffee.description}
          </span>
        )}

        {controls && (
          <div className="mt-3 flex items-center gap-2">
            <InputNumber
              value={coffee.amount!}
              handleValueDecrement={() =>
                handleUpdateAmountOfItems(coffee.id, 'decrease')
              }
              handleValueIncrement={() =>
                handleUpdateAmountOfItems(coffee.id, 'increase')
              }
              disabledDecrement={coffee.amount! <= 1}
            />
            <button
              type="button"
              onClick={() => handleRemoveItemFromCart(coffee.id)}
              className="flex h-8 w-8 items-center justify-center gap-1 rounded border border-purple-primary text-xs uppercase text-purple-primary transition-colors duration-200 hover:bg-purple-primary hover:text-white xsm:w-[5.6875rem]"
            >
              <Trash className="h-4 w-4" />
              <span className="hidden xsm:flex">Remover</span>
            </button>
          </div>
        )}

        <p
          className={cx('flex items-center gap-1 text-lg font-bold', {
            'right-0 top-0 mt-2 text-sm xsm:absolute xsm:mt-0 xsm:text-lg':
              controls,
          })}
        >
          <span className="text-xs font-medium">R$</span>
          {PriceFormatted(coffee.price)}
        </p>
      </div>

      {!controls && (
        <button
          className="bg-transparent"
          type="button"
          onClick={() => handleRemoveItemFromCart(coffee.id)}
        >
          <X className="hover:text-red-500" size={20} />
        </button>
      )}
    </div>
  )
}
