import type { Meta, StoryObj } from "@storybook/react"
import { Stepper } from "./Stepper"
import { useState } from "react"
import { Button } from "../Button/Button"

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Stepper>

const steps = [
  { id: 1, label: "Create Or Select A Client" },
  { id: 2, label: "Budget Details" },
  { id: 3, label: "Review" },
]

export const Default: Story = {
  args: {
    steps,
    activeStep: 1,
  },
}

const InteractiveStepper = () => {
  const [activeStep, setActiveStep] = useState(1)

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length))
  }

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="space-y-8">
      <Stepper
        steps={steps.map((step) => ({
          ...step,
          isCompleted: step.id < activeStep,
        }))}
        activeStep={activeStep}
      />
      <div className="flex gap-4">
        <Button
          onClick={handleBack}
          disabled={activeStep === 1}
          variant="secondary"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={activeStep === steps.length}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveStepper />,
}

export const Completed: Story = {
  args: {
    steps: steps.map((step) => ({ ...step, isCompleted: true })),
    activeStep: 3,
  },
}

export const CustomSteps: Story = {
  args: {
    steps: [
      { id: 1, label: "Personal Info" },
      { id: 2, label: "Account Details" },
      { id: 3, label: "Verification" },
      { id: 4, label: "Complete" },
    ],
    activeStep: 2,
  },
} 