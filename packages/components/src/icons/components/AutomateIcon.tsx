import { forwardRef } from 'react'
import type { IconProps } from '../types'

export const AutomateIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2 12H4C4 10.914 4.211 9.864 4.627 8.878C5.028 7.924 5.605 7.069 6.337 6.337C7.072 5.602 7.928 5.026 8.879 4.627C10.815 3.811 13.06 3.8 15.009 4.586C15.055 5.931 16.144 7 17.5 7C18.886 7 20 5.886 20 4.5C20 3.114 18.886 2 17.5 2C16.811 2 16.188 2.276 15.737 2.725C13.306 1.752 10.514 1.767 8.102 2.784C6.913 3.284 5.842 4.004 4.922 4.923C4.005 5.839 3.285 6.909 2.782 8.102C2.264 9.334 2 10.646 2 12ZM19.373 15.122C18.972 16.074 18.396 16.93 17.663 17.663C16.93 18.396 16.074 18.972 15.121 19.373C13.185 20.189 10.94 20.2 8.991 19.414C8.945 18.069 7.856 17 6.5 17C5.114 17 4 18.114 4 19.5C4 20.886 5.114 22 6.5 22C7.189 22 7.812 21.724 8.263 21.275C9.449 21.752 10.704 22 12 22C13.354 22 14.665 21.736 15.897 21.217C17.089 20.714 18.16 19.994 19.077 19.077C19.994 18.16 20.714 17.09 21.217 15.898C21.736 14.665 22 13.354 22 12H20C20 13.085 19.789 14.135 19.373 15.122Z" fill="currentColor"/>
      <path d="M11.9999 7.46191C9.49791 7.46191 7.46191 9.49791 7.46191 11.9999C7.46191 14.5019 9.49791 16.5379 11.9999 16.5379C14.5019 16.5379 16.5379 14.5019 16.5379 11.9999C16.5379 9.49791 14.5019 7.46191 11.9999 7.46191ZM11.9999 14.5379C10.6009 14.5379 9.46191 13.3989 9.46191 11.9999C9.46191 10.6009 10.6009 9.46191 11.9999 9.46191C13.3989 9.46191 14.5379 10.6009 14.5379 11.9999C14.5379 13.3989 13.3989 14.5379 11.9999 14.5379Z" fill="#FF8735"/>
    </svg>
  )
)

AutomateIcon.displayName = 'AutomateIcon' 