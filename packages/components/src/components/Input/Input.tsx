"use client"

import React from "react"
import { cn } from "../../lib/utils"
import { Typography } from "../Typography/Typography"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  containerClassName?: string
  labelClassName?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  label,
  error,
  containerClassName,
  labelClassName,
  icon,
  iconPosition = 'right',
  type = "text",
  disabled,
  ...props
}, ref) => {
  return (
    <div className={cn("relative w-full", containerClassName)}>
      {label && (
        <Typography
          variant="label"
          className={cn("mb-1", labelClassName)}
        >
          {label}
        </Typography>
      )}
      <div className="relative">
        <input
          type={type}
          className={cn(
            "h-[38px] w-full rounded-[4px] border border-border bg-white px-3 py-2",
            "placeholder:text-placeholder",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:ring-red-500",
            icon && iconPosition === 'left' && "pl-10",
            icon && iconPosition === 'right' && "pr-10",
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {icon && (
          <div 
            className={cn(
              "absolute top-1/2 -translate-y-1/2 text-placeholder",
              iconPosition === 'left' ? "left-3" : "right-3"
            )}
          >
            {icon}
          </div>
        )}
      </div>
      {error && (
        <Typography
          variant="body3"
          className="mt-1 text-red-500"
        >
          {error}
        </Typography>
      )}
    </div>
  )
})

Input.displayName = "Input"

export { Input, type InputProps }
