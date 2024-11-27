import { forwardRef } from 'react'
import type { IconProps } from '../types'

export const BudgetIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M10 12.3077V17.3847" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 10.577V14.0386C2.5 15.7694 6.07698 17.5002 10.0001 17.5002C13.9232 17.5002 17.5002 15.7694 17.5002 14.0386V10.577" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6157 10.9231V16.4616" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.38452 10.9231V16.4616" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0001 9.42318C14.1423 9.42318 17.5002 7.87337 17.5002 5.96159C17.5002 4.04981 14.1423 2.5 10.0001 2.5C5.85791 2.5 2.5 4.04981 2.5 5.96159C2.5 7.87337 5.85791 9.42318 10.0001 9.42318Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9.42322V12.8848" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 5.96167V9.42326C2.5 11.1541 5.38466 12.8849 10.0001 12.8849C14.6156 12.8849 17.5002 11.1541 17.5002 9.42326V5.96167" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6157 8.70996V12.1716" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.38452 8.70996V12.1716" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
)

BudgetIcon.displayName = 'BudgetIcon' 