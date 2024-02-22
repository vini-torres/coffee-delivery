import cx from 'classnames'
import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface PaymentMethodProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  value: string
  isActive?: boolean
  onClick?: () => void
}

export function PaymentMethod({
  Icon,
  value,
  isActive,
  onClick,
}: PaymentMethodProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        'flex w-full items-center gap-2 rounded border py-3 pl-4 text-xs transition-colors duration-200 md:w-[11.125rem]',
        {
          'border-purple-secondary bg-purple-primary bg-opacity-20  text-purple-secondary hover:bg-opacity-30':
            isActive,
          'bg-gray-400 hover:border-purple-secondary': !isActive,
        },
      )}
    >
      <Icon
        size={18}
        className={cx('', {
          'text-purple-secondary': isActive,
          'text-purple-primary': !isActive,
        })}
      />
      {value}
    </button>
  )
}
