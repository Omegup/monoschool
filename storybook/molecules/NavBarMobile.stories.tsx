import type { Meta, StoryObj } from '@storybook/react';

import { NavBarMobile } from '@omegup-school/ui-molecules';
import { Home, Logo, Message, Notification } from '@omegup-school/ui-assets';

const ICONS = {
  icon1: <Home  />,
  icon2: <Message   />,
  icon3: <Notification   />,
  icon4: <Logo  fill='red' />,
}

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
      { icon: <Home  width='24' height='24' />, label: "Acceuil", selected: false, style: "solid", size: "medium", id: 1 },
      { icon: <Message width='24' height='24' />, label: "Messagerie", selected: false, style: "solid", size: "medium", id: 2, },
      { icon: <Notification width='24' height='24' />, label: "Notifications", selected: false, style: "solid", size: "medium", id: 3 }],
 


  },
};
