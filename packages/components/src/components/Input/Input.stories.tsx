import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"
import { Search, Mail, Lock } from "lucide-react"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text",
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
}

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    error: "Password is required",
    placeholder: "Enter your password",
  },
}

export const WithLeftIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    icon: <Search className="h-4 w-4" />,
    iconPosition: "left",
  },
}

export const WithRightIcon: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    icon: <Mail className="h-4 w-4" />,
    iconPosition: "right",
  },
}

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    icon: <Lock className="h-4 w-4" />,
    iconPosition: "right",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
  },
}

export const CustomStyles: Story = {
  args: {
    label: "Custom Styled Input",
    placeholder: "Custom styles...",
    className: "border-blue-500",
    labelClassName: "text-blue-500",
    containerClassName: "max-w-xs",
  },
} 