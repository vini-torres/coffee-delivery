import { X } from 'phosphor-react'

import capuccino from '../../../public/coffees/capuccino.png'

export function Cart() {
  return (
    <div className="flex w-full items-start gap-3 border-b pb-5 ">
      <img
        src={capuccino}
        alt=""
        className="w-20 rounded-full bg-gray-50 p-1 shadow-md"
      />
      <div className="flex-1">
        <h3 className="font-medium">Capuccino</h3>
        <span className="mb-1 block text-sm text-gray-600">
          Cappucino is very delicious.
        </span>

        <p className="text-lg font-bold">
          <span className="text-xs font-medium">R$</span> 49.99
        </p>
      </div>
      <div className="">
        <button className="bg-transparent" type="button">
          <X className="hover:text-red-500" size={20} />
        </button>
      </div>
    </div>
  )
}
