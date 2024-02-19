import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1 font-medium leading-none text-gray-900 data-[current=true]:text-purple-secondary"
      {...props}
    />
  )
}
