import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '@omegup-school/ui-molecules';
import { Home, Message, Notification, Profile } from '@omegup-school/ui-assets';

const meta = {
  title: 'Molecules/NavBar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    navItems: [
      { label: 'Home',icon: <Home /> },
      { label: 'Profile' , icon :  <Message/>},
      { label: 'Settings' ,icon : <Notification/>},
      { label: 'Settings' ,icon : <Profile/>},
    ],
    selectedIndex: 0,
    onClick: (index: number) => console.log(index),

  },
};
