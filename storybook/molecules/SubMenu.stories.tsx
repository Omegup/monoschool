import type { Meta, StoryObj } from '@storybook/react';

import { SubMenu } from '@omegup-school/ui-molecules';
import {  Tick, UserTick } from '@omegup-school/ui-assets';



const meta = {
  title: 'Atom/SubMenu',
  component: SubMenu,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'subMenu', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'subMenu', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof SubMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    parentName: 'SubMenu',
    parentId:0,
    size: 'medium',  
    style: 'solid',
    disabled: false, 
    isCollopsed:false,
    items: [
      { icon: <Tick color='red' width='24' height='24'/>, label: "Présence des elèves", selected: true, style: "solid", size: "medium" ,id:1},
      { icon: <Tick  width='24' height='24' />, label: "Rapports des élèves", selected: false, style: "solid", size: "medium",id:2},
      { icon: <UserTick width='24' height='24' />, label: "Présence des enseigants", selected: false, style: "solid", size: "medium" ,id:3}],
   
    isOpened: true,
    value: true


  },
};
