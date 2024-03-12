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
    <div>
      <input
        id={id}
        type="radio"
        {...props}
        name="paymentMethod"
        ref={ref}
        className="peer hidden"
      />
      <label
        className="flex w-full items-center gap-2 rounded border bg-gray-400 py-3 pl-4 text-xs transition-colors duration-200 hover:bg-opacity-30 peer-checked:border-purple-secondary peer-checked:bg-purple-primary peer-checked:bg-opacity-20  peer-checked:text-purple-secondary peer-hover:border-purple-secondary  md:w-[11.125rem] "
        htmlFor={id}
      >
        <Icon size={20} className="text-purple-secondary" />
        {label}
      </label>
    </div>
  )
})

PaymentMethod.displayName = 'PaymentMethod'
