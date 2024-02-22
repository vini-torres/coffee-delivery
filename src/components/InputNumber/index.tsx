import { Minus, Plus } from 'phosphor-react'

interface InputNumberProps {
  value: number
  handleValueIncrement?: () => void
  handleValueDecrement?: () => void
}

export function InputNumber({
  value,
  handleValueIncrement,
  handleValueDecrement,
}: InputNumberProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center rounded bg-gray-400 bg-opacity-80 px-2">
        <button onClick={handleValueDecrement} type="button">
          <Minus className="text-purple-secondary" />
        </button>
        <input
          type="text"
          className="h-8 w-7 bg-transparent text-center text-gray-900 outline-none"
          value={value}
          readOnly
        />
        <button onClick={handleValueIncrement} type="button">
          <Plus className="text-purple-secondary" />
        </button>
      </div>
    </div>
  )
}
