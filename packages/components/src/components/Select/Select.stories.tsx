import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "./Select"
import { useState } from "react"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    placeholder: "Select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
  decorators: [
    (Story) => (
      <div className="min-h-[300px] p-4">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: "Select Option",
  },
}

export const WithError: Story = {
  args: {
    label: "Select Option",
    error: "This field is required",
  },
}

export const Controlled: Story = {
  render: function Controlled() {
    const [value, setValue] = useState("")
    return (
      <Select
        label="Controlled Select"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const CustomStyles: Story = {
  args: {
    label: "Custom Styled Select",
    className: "border-blue-500",
    labelClassName: "text-blue-500",
    containerClassName: "max-w-xs",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled Select",
    disabled: true,
  },
}

export const WithManyOptions: Story = {
  args: {
    label: "Select Country",
    placeholder: "Choose a country",
    options: [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
      { value: "ca", label: "Canada" },
      { value: "au", label: "Australia" },
      { value: "de", label: "Germany" },
      { value: "fr", label: "France" },
      { value: "it", label: "Italy" },
      { value: "es", label: "Spain" },
      { value: "br", label: "Brazil" },
      { value: "jp", label: "Japan" },
    ],
  },
} 