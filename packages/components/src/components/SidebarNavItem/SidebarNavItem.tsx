import React from 'react';
import { Typography } from '../Typography/Typography';
import { IconProps } from '../../icons/types';

interface SidebarNavItemProps {
  icon: React.ComponentType<IconProps>;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  icon: Icon,
  label,
  isActive = false,
  onClick,
  className = '',
}) => {
  const baseClasses = "flex flex-col items-center justify-center w-full px-4 py-3 cursor-pointer transition-all duration-200 aspect-square";
  const activeClasses = "bg-white/[0.12]"; // 12% opacity white background
  const hoverClasses = "hover:bg-white/[0.05]"; // 5% opacity white background on hover
  const orangeIndicator = "before:content-[''] before:absolute before:left-0 before:h-3/4 before:w-[3px] before:bg-[#FF8735]";

  return (
    <div 
      className={`relative bg-transparent gap-1 ${baseClasses} ${isActive ? `${activeClasses} ${orangeIndicator}` : hoverClasses} ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <Icon 
        size={24} 
        className={`text-white`} 
      />
      <Typography 
        variant="body2" 
        className={`text-[8px] font-normal text-white text-center`}
      >
        {label}
      </Typography>
    </div>
  );
};

SidebarNavItem.displayName = 'SidebarNavItem'; 