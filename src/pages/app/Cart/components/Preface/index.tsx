import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface PrefaceProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  title: string
  description: string
}

export function Preface({ Icon, title, description }: PrefaceProps) {
  return (
    <div className="mb-8 flex gap-2">
      <Icon size={23} className="text-purple-primary" />
      <div className="col flex flex-col gap-1">
        <h3 className="text-lg leading-none text-gray-800">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  )
}
