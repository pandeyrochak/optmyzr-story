import type { Meta, StoryObj } from '@storybook/react';
import { SidebarNavItem } from './SidebarNavItem';
import { 
  DashboardIcon, 
  AccountsIcon, 
  OptimizationIcon, 
  ReportsIcon 
} from '../../icons/components';

const meta = {
  title: 'Components/SidebarNavItem',
  component: SidebarNavItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isActive: { 
      control: 'boolean',
      description: 'Whether the nav item is currently active'
    },
    label: { 
      control: 'text',
      description: 'Text label for the nav item'
    },
    onClick: { 
      action: 'clicked',
      description: 'Click handler for the nav item'
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-darkGrey" style={{ width: '80px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SidebarNavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: DashboardIcon,
    label: 'Dashboard',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    icon: DashboardIcon,
    label: 'Dashboard',
    isActive: true,
  },
};

export const NavigationGroup = {
  render: () => (
    <div className="flex flex-col">
      <SidebarNavItem
        icon={DashboardIcon}
        label="Dashboard"
        isActive={true}
      />
      <SidebarNavItem
        icon={AccountsIcon}
        label="Accounts"
      />
      <SidebarNavItem
        icon={OptimizationIcon}
        label="Optimizations"
      />
      <SidebarNavItem
        icon={ReportsIcon}
        label="Reports"
      />
    </div>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    icon: DashboardIcon,
    label: 'Dashboard',
    className: 'border-b border-white/[0.1]',
  },
}; 