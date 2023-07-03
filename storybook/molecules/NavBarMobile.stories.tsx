import type { Meta, StoryObj } from '@storybook/react';

import { NavBarMobile } from '@omegup-school/ui-molecules';
import { Square, Tick, UserTick, WifiSquare } from '@omegup-school/ui-assets';



const meta = {
  title: 'Atom/NavBarMobile',
  component: NavBarMobile,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'NavBarMobile', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'NavBarMobile', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof NavBarMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    parentName: 'NavBarMobile',
    parentId: 0,
    size: 'medium',
    style: 'solid',
    items: [
      { icon: <Tick color='red' width='24' height='24' />, label: "Présence des elèves", selected: true, style: "solid", size: "medium", id: 1 },
      { icon: <WifiSquare width='24' height='24' />, label: "Rapports des élèves", selected: false, style: "solid", size: "medium", id: 2, },
      { icon: <UserTick width='24' height='24' />, label: "Présence des enseigants", selected: false, style: "solid", size: "medium", id: 3 }],
    value: true


  },
};
