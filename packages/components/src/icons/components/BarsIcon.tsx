import { forwardRef } from 'react'
import type { IconProps } from '../types'

export const BarsIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M15 16.6667V8.33337" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 16.6667V3.33337" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 16.6666V11.6666" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
)

BarsIcon.displayName = 'BarsIcon' 