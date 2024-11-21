"use client"

import React from "react"
import { cn } from "../../lib/utils"
import { Typography } from "../Typography/Typography"
import { Check } from "lucide-react"

interface Step {
  id: number
  label: string
  isCompleted?: boolean
}

interface StepperProps {
  steps: Step[]
  activeStep: number
  className?: string
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  className,
}) => {
  return (
    <div className={cn("flex w-full gap-2", className)}>
      {steps.map((step) => {
        const isActive = activeStep === step.id
        const isCompleted = step.isCompleted || activeStep > step.id

        return (
          <React.Fragment key={step.id}>
            <div
              className={cn(
                "flex flex-1 items-center",
              )}
            >
              <div
                className={cn(
                  "flex flex-1 items-center rounded-[4px] border p-5",
                  isActive && "border-primary",
                  !isActive && "border-transparent"
                )}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2",
                    isActive && "border-primary bg-primary text-white",
                    isCompleted && "border-primary bg-primary text-white",
                    !isActive && !isCompleted && "border-border bg-midGrey text-white"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Typography
                      variant="label"
                      className={cn('text-white')}
                    >
                      {step.id}
                    </Typography>
                  )}
                </div>
                <Typography
                  variant="subtitle1"
                  className={cn(
                    "ml-4 whitespace-nowrap",
                    isActive && "text-primary",
                    !isActive && "text-darkGrey"
                  )}
                >
                  {step.label}
                </Typography>
              </div>
             
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export { Stepper, type StepperProps, type Step }
