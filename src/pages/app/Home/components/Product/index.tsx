import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface ProductProps {
  id: number
  imgURL: string
  tag: string[]
  title: string
  description: string
  price: number
}

interface CoffeeProps {
  coffee: ProductProps
}

export function Product({ coffee }: CoffeeProps) {
  return (
    <div className="relative h-[19.375rem] w-[16rem] rounded rounded-bl-3xl rounded-tr-3xl bg-gray-200 p-4 shadow-md">
      <img
        src={`/public/coffees/${coffee.imgURL}`}
        alt="Imagem ilustrativa"
        className="absolute -top-5 left-0 right-0 mx-auto w-28"
      />
      <div className="mt-[5.625rem] flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">
          {coffee.tag.map((ta, index) => {
            return (
              <span
                key={index}
                className="w-fit rounded-full bg-purple-primary bg-opacity-30 px-2 py-1 text-[0.625rem] font-bold uppercase text-purple-primary"
              >
                {ta}
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
          <span className="text-sm">R$</span> {coffee.price}
        </span>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded bg-gray-400 bg-opacity-80 px-2">
            <button type="button">
              <Minus className="text-purple-secondary" />
            </button>
            <input
              type="text"
              className="h-8 w-7 bg-transparent text-center text-gray-900 outline-none"
              value={1}
              readOnly
            />
            <button type="button">
              <Plus className="text-purple-secondary" />
            </button>
          </div>
          <button className="flex h-8 w-9 items-center justify-center rounded bg-purple-secondary text-white hover:bg-purple-primary">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
