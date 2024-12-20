import { forwardRef } from 'react'
import type { IconProps } from '../types'

export const ReportsIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M19.903 8.586C19.854 8.48 19.793 8.379 19.707 8.293L13.707 2.293C13.621 2.207 13.52 2.146 13.414 2.097C13.384 2.083 13.352 2.075 13.32 2.064C13.236 2.036 13.15 2.018 13.061 2.013C13.04 2.011 13.021 2 13 2H6C4.897 2 4 2.897 4 4V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V9C20 8.979 19.989 8.96 19.987 8.938C19.982 8.849 19.965 8.763 19.936 8.679C19.926 8.647 19.917 8.616 19.903 8.586ZM16.586 8H14V5.414L16.586 8ZM6 20V4H12V9C12 9.553 12.447 10 13 10H18L18.002 20H6Z" fill="currentColor"/>
      <path d="M13.553 14.658L9.55298 12.658L7.10498 17.553L8.89498 18.447L10.447 15.342L14.447 17.342L16.895 12.447L15.105 11.553L13.553 14.658Z" fill="#FF8735"/>
    </svg>
  )
)

ReportsIcon.displayName = 'ReportsIcon' 