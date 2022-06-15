import { SidebarProps } from './Sidebar.props';
import { Menu } from '../../Menu/Menu';
import React from 'react';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
