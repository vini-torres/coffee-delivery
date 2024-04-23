import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import { InputNumber } from '../../../../../components/InputNumber'
import { CartCoffeeProps } from '../../../../../components/ProductCart'
import { useCart } from '../../../../../hooks/useCart'
import { PriceFormatted } from '../../../../../utils/formatted-price'

interface CoffeeProps {
  coffee: CartCoffeeProps
}

export function Product({ coffee }: CoffeeProps) {
  const [amount, setAmount] = useState(1)
  const { handleAddProductInTheCart } = useCart()

  return (
    <div className="relative h-[19.375rem] w-[16rem] rounded rounded-bl-3xl rounded-tr-3xl bg-gray-200 p-4 shadow-md">
      <img
        src={`/coffees/${coffee.imgURL}`}
        alt="Imagem ilustrativa"
        className="absolute -top-5 left-0 right-0 mx-auto w-28"
      />
      <div className="mt-[5.625rem] flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">
          {coffee.tag.map((tag, index) => {
            return (
              <span
                key={index}
                className="w-fit rounded-full bg-purple-primary bg-opacity-30 px-2 py-1 text-[0.625rem] font-bold uppercase text-purple-primary"
              >
                {tag}
              </span>
            )
          })}
        </div>
        <strong className="text-xl font-bold text-gray-800">
          {coffee.title}
        </strong>
        <p className="text-center text-sm text-gray-600">
          {coffee.description}
        </p>
      </div>
      <div className="absolute bottom-6 flex items-center gap-3">
        <span className="mr-2 text-2xl font-bold text-gray-700">
          <span className="text-sm">R$</span> {PriceFormatted(coffee.price)}
        </span>
        <InputNumber
          value={amount}
          handleValueDecrement={() => setAmount((state) => state - 1)}
          handleValueIncrement={() => setAmount((state) => state + 1)}
          disabledDecrement={amount <= 1}
        />
        <button
          onClick={() => handleAddProductInTheCart({ ...coffee, amount })}
          className="flex h-8 w-9 items-center justify-center rounded bg-purple-secondary text-white hover:bg-purple-primary"
        >
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  )
}
