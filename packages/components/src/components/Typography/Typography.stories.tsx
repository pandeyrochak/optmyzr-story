import type { Meta, StoryObj } from "@storybook/react"
import { Typography } from "./Typography"

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "body3", "label"],
    },
    as: {
      table: {
        disable: true,
      },
    },
    className: {
      control: "text",
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = {}

export const Heading1: Story = {
  args: {
    variant: "h1",
  },
}

export const Heading2: Story = {
  args: {
    variant: "h2",
  },
}

export const Heading3: Story = {
  args: {
    variant: "h3",
  },
}

export const Subtitle1: Story = {
  args: {
    variant: "subtitle1",
  },
}

export const Body1: Story = {
  args: {
    variant: "body1",
  },
}

export const Body2: Story = {
  args: {
    variant: "body2",
  },
}

export const Label: Story = {
  args: {
    variant: "label",
  },
}

export const CustomClassName: Story = {
  args: {
    variant: "body1",
    className: "text-primary italic",
  },
}

export const CustomElement: Story = {
  args: {
    as: "span",
    variant: "body1",
  },
} 