import type { Meta, StoryObj } from '@storybook/react';

import { SubMenu } from '@omegup-school/ui-molecules';
import {  ClipboardTick, Tick, UserTick, WifiSquare } from '@omegup-school/ui-assets';



const meta = {
  title: 'Atom/SubMenu',
  component: SubMenu,
  tags: ['autodocs'],
  argTypes: {
    viewMode:{control:'select',options:['mobile','default']},
   
  },
} satisfies Meta<typeof SubMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    parentName: 'SubMenu',
    parentId:0,
     isCollopsed:false,
    viewMode:'default',
    items: [
      { icon: <ClipboardTick  />, label: "Présence des elèves", selected: false,  size: "medium" },
      { icon: <UserTick   />, label: "Rapports des élèves", selected: true,  size: "medium" },
      { icon: <UserTick/>, label: "Présence des enseigants", selected: false,  size: "medium" }],
 


  },
};
