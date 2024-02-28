import cx from 'classnames'
import { Trash, X } from 'phosphor-react'

import capuccino from '../../../public/coffees/capuccino.png'
import { InputNumber } from '../InputNumber'

interface ProductCartProps {
  controls?: boolean
}

export function ProductCart({ controls }: ProductCartProps) {
  return (
    <div
      className={cx('relative flex w-full items-start gap-3 border-b pb-6', {
        'border-b border-gray-400': controls,
      })}
    >
      <img
        src={capuccino}
        alt=""
        className="w-20 rounded-full bg-gray-50 p-1 shadow-md"
      />
      <div className="flex-1">
        <h3 className="font-medium">Capuccino</h3>
        {!controls && (
          <span className="mb-1 block truncate text-sm text-gray-600">
            Cappucino is very delicious.
          </span>
        )}

        {controls && (
          <div className="mt-3 flex items-center gap-2">
            <InputNumber value={1} />
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center gap-1 rounded border border-purple-primary text-xs uppercase text-purple-primary transition-colors duration-200 hover:bg-purple-primary hover:text-white xsm:w-[5.6875rem]"
            >
              <Trash className="h-4 w-4" />
              <span className="hidden xsm:flex">Remover</span>
            </button>
          </div>
        )}

        <p
          className={cx('text-lg font-bold', {
            'right-0 top-0 mt-2 text-sm xsm:absolute xsm:mt-0 xsm:text-lg':
              controls,
          })}
        >
          <span className="text-xs font-medium">R$</span> 49.99
        </p>
      </div>

      {!controls && (
        <button className="bg-transparent" type="button">
          <X className="hover:text-red-500" size={20} />
        </button>
      )}
    </div>
  )
}
