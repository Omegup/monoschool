import type { Meta, StoryObj } from '@storybook/react';

import { SubMenu } from '@omegup-school/ui-molecules';
import { ClipboardTick, Tick, UserTick, WifiSquare } from '@omegup-school/ui-assets';
import { ControlledSubMenuProps, SubMenuViewMode } from '@omegup-school/ui-molecules/SubMenu/SubMenu.types';
import { useState } from 'react';
import { ChildMenuProps, ControlledChildMenuProps } from '@omegup-school/ui-atoms/ChildMenu/ChildMenu.types';


const SubMenuDemo = ({ isCollapsed, title, viewMode }: { isCollapsed: boolean, title: string, viewMode: SubMenuViewMode }) => {

  const [selectedIndex, setSelectedIndex] = useState<number>();

  const items: Array<ControlledChildMenuProps> = [
    { icon: <ClipboardTick />, label: "Présence des elèves", isSelected: selectedIndex === 0, size: "medium", onClick: () => setSelectedIndex(0), isCollapsed },
    { icon: <UserTick />, label: "Rapports des élèves", isSelected: selectedIndex === 1, size: "medium", onClick: () => setSelectedIndex(1), isCollapsed },
    { icon: <UserTick />, label: "Présence des enseigants", isSelected: selectedIndex === 2, size: "medium", onClick: () => setSelectedIndex(2), isCollapsed },
  ];
  const props: ControlledSubMenuProps = { items, onClick: () => { }, title, isCollapsed, viewMode }
  return <SubMenu {...props} />

}

const meta = {
  title: 'Atom/SubMenu',
  component: SubMenuDemo,
  tags: ['autodocs'],
  argTypes: {
    viewMode: { control: 'select', options: ['mobile', 'default'] },
    isCollapsed: { control: 'boolean' },
    title: { control: 'text' },
  },
} satisfies Meta<typeof SubMenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isCollapsed: false,
    title: 'SubMenu',
    viewMode: 'default',
  },
};
