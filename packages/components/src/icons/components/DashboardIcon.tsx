import { forwardRef } from 'react'
import type { IconProps } from '../types'

export const DashboardIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 4C6.486 4 2 8.486 2 14C2 15.55 2.354 17.045 3.051 18.445C3.221 18.785 3.567 19 3.946 19H20.053C20.432 19 20.779 18.785 20.949 18.445C21.646 17.045 22 15.55 22 14C22 8.486 17.514 4 12 4ZM19.41 17H4.59C4.198 16.042 4 15.035 4 14C4 9.589 7.589 6 12 6C16.411 6 20 9.589 20 14C20 15.035 19.802 16.042 19.41 17Z" fill="currentColor"/>
      <path d="M10.939 12.9389C10.771 13.0499 10.616 13.2009 10.499 13.3789C10.034 14.0869 10.231 15.0359 10.939 15.4999C11.646 15.9649 12.596 15.7679 13.06 15.0599L17.022 9.02193C17.028 9.01093 17.029 8.99793 17.022 8.98693C17.012 8.97193 16.992 8.96793 16.977 8.97693L10.939 12.9389Z" fill="#FF8735"/>
    </svg>
  )
)

DashboardIcon.displayName = 'DashboardIcon' 