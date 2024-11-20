import type { Meta, StoryObj } from "@storybook/react"
import { Drawer } from "./Drawer"
import { Button } from "../Button/Button"
import { useState } from "react"
import { Typography } from "../Typography/Typography"

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Drawer>

const DrawerDemo = ({
  direction = "right",
  width,
  height,
}: {
  direction?: "left" | "right" | "top" | "bottom"
  width?: string
  height?: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-[100px] p-4">
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        direction={direction}
        width={width}
        height={height}
      >
        <Typography variant="h4" className="mb-4">Drawer Title</Typography>
        <Typography variant="body1">
          This is a drawer component that can slide in from any direction. 
          Click the close button or click outside to close it.
        </Typography>
      </Drawer>
    </div>
  )
}

export const Right: Story = {
  render: () => <DrawerDemo direction="right" />
}

export const Left: Story = {
  render: () => <DrawerDemo direction="left" />
}

export const Top: Story = {
  render: () => <DrawerDemo direction="top" />
}

export const Bottom: Story = {
  render: () => <DrawerDemo direction="bottom" />
}

export const CustomWidth: Story = {
  render: () => <DrawerDemo direction="right" width="600px" />
}

export const CustomHeight: Story = {
  render: () => <DrawerDemo direction="bottom" height="300px" />
}

const LongContent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Typography variant="h4" className="mb-4">Scrollable Content</Typography>
        {Array.from({ length: 20 }).map((_, i) => (
          <Typography key={i} variant="body1" className="mb-4">
            This is paragraph {i + 1} with some sample text to demonstrate scrolling behavior.
          </Typography>
        ))}
      </Drawer>
    </div>
  )
}

export const ScrollableContent: Story = {
  render: () => <LongContent />
} 