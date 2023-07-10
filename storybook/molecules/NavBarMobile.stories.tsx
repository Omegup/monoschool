import type { Meta, StoryObj } from '@storybook/react';
import { NavBarMobile } from '@omegup-school/ui-molecules';
import { ClipboardTick, Message, Notification, Tick, UserTick, WifiSquare } from '@omegup-school/ui-assets';
import { ControlledNavBarMobileProps } from '@omegup-school/ui-molecules/NavBarMobile/NavBarMobile.types';


const ICONS = {

}
const Demo = (props: ControlledNavBarMobileProps) => {
  
  return  <div style={{ width: 350 }}>
    <NavBarMobile
      {...props} />
  </div>
}
const meta = {
  title: 'Atom/NavBarMobile',
  component: Demo,
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
      { icon: <UserTick width='24' height='24' />, label: "Acceuil", selected: false, size: "medium", },
      { icon: <Message width='24' height='24' />, label: "Messagerie", selected: false, size: "medium" },
      { icon: <Notification width='24' height='24' />, label: "Notifications", selected: false, size: "medium", }],



  },
};
