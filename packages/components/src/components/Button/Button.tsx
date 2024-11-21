import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'bg-primary text-white inline-flex items-center justify-center rounded-md text-sm font-medium px-5 py-2 transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:shadow-md hover:shadow-primary/40 active:shadow-primary/20',
        secondary: 'bg-transparent border border-primary text-primary hover:shadow-md hover:shadow-primary/40 active:shadow-primary/20',
        tertiary: 'bg-transparent border border-transparent text-primary'
      },
    },
    defaultVariants: {
      variant: 'primary',
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
