import { IconProps } from 'phosphor-react'
import {
  forwardRef,
  ForwardRefExoticComponent,
  InputHTMLAttributes,
  RefAttributes,
} from 'react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  label: string
}

export const PaymentMethod = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, Icon, label, ...props }, ref) => {
  return (
    <div className="flex w-full items-center gap-2 rounded border bg-gray-400 py-3 pl-4 text-xs transition-colors duration-200 checked:border-purple-secondary checked:bg-purple-primary checked:bg-opacity-20  checked:text-purple-secondary hover:border-purple-secondary  hover:bg-opacity-30 md:w-[11.125rem]">
      <input
        id={id}
        type="radio"
        {...props}
        name="paymentMethod"
        ref={ref}
        className="appearance-none"
      />
      <Icon
        size={20}
        className="text-purple-secondary checked:text-purple-primary"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
})

PaymentMethod.displayName = 'PaymentMethod'
