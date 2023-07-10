import type { Meta, StoryObj } from '@storybook/react';

import { SubMenu } from '@omegup-school/ui-molecules';
import {  ClipboardTick, Tick, UserTick, WifiSquare } from '@omegup-school/ui-assets';
import { ControlledNavBarMobileProps } from '@omegup-school/ui-molecules/NavBarMobile/NavBarMobile.types';
import { ControlledSubMenuProps } from '@omegup-school/ui-molecules/SubMenu/SubMenu.types';


const Demo = (props: ControlledSubMenuProps) => {
  
  return  <div style={{ width: 300 }}>
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
    parentId:0,
     isCollopsed:false,
    viewMode:'default',
    items: [
      { icon: <ClipboardTick  />, label: "Présence des elèves", selected: false,  size: "medium" },
      { icon: <UserTick   />, label: "Rapports des élèves", selected: true,  size: "medium" },
      { icon: <UserTick/>, label: "Présence des enseigants", selected: false,  size: "medium" }],
 


  },
};
