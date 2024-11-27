import type { Meta, StoryObj } from '@storybook/react'
import {
  AccountsIcon,
  ArrowIcon,
  AutomateIcon,
  BarsIcon,
  BellIcon,
  BudgetIcon,
  DashboardIcon,
  HelpIcon,
  LogoIcon,
  OptimizationIcon,
  ReportsIcon,
  ScriptsIcon,
  SearchIcon,
  WorkoutsIcon
} from './components'

const meta = {
  title: 'Components/Icons',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { 
      control: 'color',
      description: 'Icon color (affects non-accent parts)',
      defaultValue: 'currentColor' 
    },
    size: {
      control: { type: 'number', min: 12, max: 64, step: 4 },
      description: 'Icon size in pixels',
      defaultValue: 24
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

interface IconGridProps {
  color?: string
  size?: number
  className?: string
}

const IconGrid = ({ color = 'currentColor', size = 24, className = '' }: IconGridProps) => {
  const icons = [
    { name: 'AccountsIcon', component: AccountsIcon },
    { name: 'ArrowIcon', component: ArrowIcon },
    { name: 'AutomateIcon', component: AutomateIcon },
    { name: 'BarsIcon', component: BarsIcon },
    { name: 'BellIcon', component: BellIcon },
    { name: 'BudgetIcon', component: BudgetIcon },
    { name: 'DashboardIcon', component: DashboardIcon },
    { name: 'HelpIcon', component: HelpIcon },
    { name: 'LogoIcon', component: LogoIcon },
    { name: 'OptimizationIcon', component: OptimizationIcon },
    { name: 'ReportsIcon', component: ReportsIcon },
    { name: 'ScriptsIcon', component: ScriptsIcon },
    { name: 'SearchIcon', component: SearchIcon },
    { name: 'WorkoutsIcon', component: WorkoutsIcon },
  ]

  return (
    <div className="grid grid-cols-4 gap-8 p-4">
      {icons.map(({ name, component: Icon }) => (
        <div 
          key={name}
          className="flex flex-col items-center gap-2 p-4 border rounded-lg"
          style={{ color }}
        >
          <Icon size={size} className={className} />
          <span className="text-sm text-gray-600">{name}</span>
        </div>
      ))}
    </div>
  )
}

export const Default: Story = {
  args: {
    color: 'currentColor',
    size: 24,
    className: ''
  },
  render: (args) => <IconGrid {...args} />
}

export const CustomColor: Story = {
  args: {
    color: '#526EE7',
    size: 24,
    className: ''
  },
  render: (args) => <IconGrid {...args} />
}

export const CustomSize: Story = {
  args: {
    color: 'currentColor',
    size: 32,
    className: ''
  },
  render: (args) => <IconGrid {...args} />
}

export const WithClassName: Story = {
  args: {
    color: 'currentColor',
    size: 24,
    className: 'opacity-50 hover:opacity-100 transition-opacity'
  },
  render: (args) => <IconGrid {...args} />
}

export const Individual = {
  argTypes: {
    color: { control: 'color' },
    size: { control: { type: 'number', min: 12, max: 64, step: 4 } },
    className: { control: 'text' }
  },
  args: {
    color: 'currentColor',
    size: 24,
    className: ''
  },
  // @ts-expect-error - svgr
  render: (args) => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4" style={{ color: args.color }}>
        <AccountsIcon size={args.size} className={args.className} />
        <span>AccountsIcon with custom styling</span>
      </div>
      <div className="flex items-center gap-4" style={{ color: '#526EE7' }}>
        <AccountsIcon size={args.size} className={args.className} />
        <span>Blue AccountsIcon</span>
      </div>
      <div className="flex items-center gap-4">
        <AccountsIcon size={32} className="text-green-600 hover:text-green-800 transition-colors" />
        <span>Large green AccountsIcon with hover effect</span>
      </div>
    </div>
  )
} 