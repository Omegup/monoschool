import type { Meta, StoryObj } from '@storybook/react';

import { SubMenu } from '@omegup-school/ui-molecules';
import {  ClipboardTick, Tick, UserTick, WifiSquare } from '@omegup-school/ui-assets';
 import { ControlledSubMenuProps } from '@omegup-school/ui-molecules/SubMenu/SubMenu.types';


const Demo = (props: ControlledSubMenuProps) => {
  
  return  <div >
    <SubMenu 
      {...props
      } />
  </div>
}

const meta = {
  title: 'Atom/SubMenu',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {
    viewMode:{control:'select',options:['mobile','default']},
   
  },
} satisfies Meta<typeof SubMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'SubMenu',
     isCollopsed:false,
    viewMode:'default',
    items: [
      { icon: <ClipboardTick  />, label: "Présence des elèves", selected: false,  size: "medium" },
      { icon: <UserTick   />, label: "Rapports des élèves", selected: true,  size: "medium" },
      { icon: <UserTick/>, label: "Présence des enseigants", selected: false,  size: "medium" }],
 


  },
};
