import { forwardRef } from 'react'
import type { IconProps } from '../types'

export const AccountsIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M16 14H22V16H16V14ZM8 4C5.72 4 4 5.72 4 8C4 10.28 5.72 12 8 12C10.28 12 12 10.28 12 8C12 5.72 10.28 4 8 4ZM8 10C6.822 10 6 9.178 6 8C6 6.822 6.822 6 8 6C9.178 6 10 6.822 10 8C10 9.178 9.178 10 8 10ZM4 18C4 16.346 5.346 15 7 15H9C10.654 15 12 16.346 12 18V19H14V18C14 15.243 11.757 13 9 13H7C4.243 13 2 15.243 2 18V19H4V18Z" fill="currentColor"/>
      <path d="M16 14H22V16H16V14Z" fill="#FF8735"/>
      <path d="M15 10H22V12H15V10Z" fill="#FF8735"/>
      <rect x="14" y="6" width="8" height="2" fill="#FF8735"/>
    </svg>
  )
)

AccountsIcon.displayName = 'AccountsIcon'
