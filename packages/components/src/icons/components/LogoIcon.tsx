import { forwardRef } from 'react'
import type { IconProps } from '../types'

export const LogoIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size * (24.7273/24)}
      viewBox="0 0 24 24.7273"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="24" height="24.7273" fill="currentColor"/>
    </svg>
  )
)

LogoIcon.displayName = 'LogoIcon' 