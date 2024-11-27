import React from 'react';
import { SidebarNavItem } from '../SidebarNavItem/SidebarNavItem';
import {
  AccountsIcon,
  DashboardIcon,
  OptimizationIcon,
  ReportsIcon,
  ScriptsIcon,
  WorkoutsIcon,
  AutomateIcon,
} from '../../icons/components';

export interface SidebarProps {
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeItem = 'dashboard',
  onItemClick,
  className = '',
}) => {
  const navigationItems = [
    { id: 'accounts', label: 'Accounts', icon: AccountsIcon },
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'optimizations', label: 'Optimizations', icon: OptimizationIcon },
    { id: 'reports', label: 'Reports', icon: ReportsIcon },
    { id: 'scripts', label: 'Scripts', icon: ScriptsIcon },
    { id: 'workouts', label: 'Workouts', icon: WorkoutsIcon },
    { id: 'automator', label: 'Campaign Automator', icon: AutomateIcon },
  ];

  return (
    <aside className={`w-20 bg-darkGrey h-screen flex flex-col ${className}`}>
      {navigationItems.map(({ id, label, icon }) => (
        <SidebarNavItem
          key={id}
          icon={icon}
          label={label}
          isActive={activeItem === id}
          onClick={() => onItemClick?.(id)}
        />
      ))}
    </aside>
  );
};

Sidebar.displayName = 'Sidebar'; 