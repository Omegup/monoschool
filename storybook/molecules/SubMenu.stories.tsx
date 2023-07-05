import type { Meta, StoryObj } from '@storybook/react';

import { SubMenu } from '@omegup-school/ui-molecules';
import {  ClipboardTick, Tick, UserTick, WifiSquare } from '@omegup-school/ui-assets';



const meta = {
  title: 'Atom/SubMenu',
  component: SubMenu,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    viewMode:{control:'select',options:['mobile','default']},
    items:{
      control :'select',
      options:[]
            }
  },
} satisfies Meta<typeof SubMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    parentName: 'SubMenu',
    parentId:0,
    size: 'medium',  
    disabled: false, 
    isCollopsed:false,
    viewMode:'default',
    items: [
      { icon: <ClipboardTick  />, label: "Présence des elèves", selected: false,  size: "medium" ,id:1},
      { icon: <UserTick   />, label: "Rapports des élèves", selected: true,  size: "medium",id:2, },
      { icon: <UserTick/>, label: "Présence des enseigants", selected: false,  size: "medium" ,id:3}],
    isOpened: true,
 


  },
};
