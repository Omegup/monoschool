import type { Meta, StoryObj } from '@storybook/react';

import { SubSideBar} from './SideBarTest/SideBar';

const meta = {
  title: 'molecule/SideBar',
  component: SubSideBar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SubSideBar>;

export default meta;
type Story = StoryObj<typeof meta>;
const isCollopsed=false;
export const Primary: Story = {
  args: {
    
  },
};
