import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['accounts', 'dashboard', 'optimizations', 'reports', 'scripts', 'workouts', 'automator'],
      description: 'Currently active navigation item'
    },
    onItemClick: {
      action: 'clicked',
      description: 'Callback when a navigation item is clicked'
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeItem: 'dashboard',
  },
};

export const WithActiveItem: Story = {
  args: {
    activeItem: 'optimizations',
  },
};

export const Interactive: Story = {
  args: {
    activeItem: 'dashboard',
  },
  render: (args) => {
    const [active, setActive] = React.useState(args.activeItem);
    
    return (
      <Sidebar
        {...args}
        activeItem={active}
        onItemClick={setActive}
      />
    );
  },
}; 