import { X } from 'phosphor-react'

import { Cart } from '../Cart'

interface DropDownCartProps {
  isOpen?: boolean
  onClose: (isOpen: boolean) => void
}

export function DropdownCart({ isOpen = false, onClose }: DropDownCartProps) {
  return (
    <div
      role="dialog"
      aria-modal={isOpen}
      data-current={isOpen}
      className="absolute right-0 top-[4.25rem] hidden w-96 flex-col rounded shadow-md data-[current=true]:flex"
    >
      <header className="flex h-16 w-full items-center justify-between border-b px-4">
        <h3 className="text-lg font-medium text-gray-900">Meu Carrinho</h3>
        <button onClick={() => onClose(isOpen)} type="button">
          <X className=" text-gray-700 hover:text-red-500" size={20} />
        </button>
      </header>
      <div className="flex flex-col gap-6 px-4 pb-4 pt-6">
        <div className="flex max-h-[29.375rem] flex-1 flex-col gap-4 overflow-auto   [&::-webkit-scrollbar]:w-0">
          <Cart />
        </div>
        <button className="h-11 w-full rounded border border-purple-primary text-purple-primary">
          Ir para o carrinho
        </button>
      </div>
    </div>
  )
}