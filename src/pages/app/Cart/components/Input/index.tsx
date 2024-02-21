import cx from 'classnames'

export interface InputProps {
  type: 'number' | 'text'
  placeholder: string
  placeholderUpperCase?: boolean
  opitional?: boolean
  className?: string
  error?: string
}

export function Input({
  opitional,
  error,
  type,
  placeholder,
  className,
  placeholderUpperCase,
}: InputProps) {
  const maxLength = Number(opitional === true ? 20 : 100)
  return (
    <div className={cx('relative flex flex-col gap-2', className)}>
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className={cx(
          'h-11 rounded border border-gray-400 bg-gray-300 pl-3 pr-1 text-sm outline-none placeholder:text-sm placeholder:text-gray-600',
          { 'placeholder:uppercase': placeholderUpperCase },
        )}
      />
      <span className="text-xs text-red-600">{error}</span>
      {opitional && (
        <span className="absolute right-5 top-3 select-none text-sm italic text-gray-600">
          Opicional
        </span>
      )}
    </div>
  )
}
