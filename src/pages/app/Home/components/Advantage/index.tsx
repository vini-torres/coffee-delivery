import cx from 'classnames'
import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface AdvantageProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  description: string
  type: 'Cart' | 'Clock' | 'Package' | 'Coffee'
}

export function Advantage({ Icon, description, type }: AdvantageProps) {
  return (
    <li className="flex min-w-[20rem] items-center gap-3 text-sm xmd:min-w-[14rem]">
      <Icon
        className={cx('h-8 w-8 rounded-full p-[0.4375rem] text-gray-100', {
          'bg-yellow-secondary': type === 'Cart',
          'bg-yellow-primary': type === 'Clock',
          'bg-purple-primary': type === 'Coffee',
          'bg-gray-700': type === 'Package',
        })}
      />
      <span className="text-gray-700">{description}</span>
    </li>
  )
}
