import { forwardRef } from 'react'
import type { IconProps } from '../types'

export const ArrowIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 12, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size * (8/12)} // Maintain aspect ratio of 12:8
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path 
        d="M1 1.5L6 6.5L11 1.5" 
        stroke="currentColor" 
        strokeWidth="1.6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
)

ArrowIcon.displayName = 'ArrowIcon' 