import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from '@omegup-school/ui-molecules';
import { Calendar } from '@omegup-school/ui-assets';
const meta = {
  title: 'molecule/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Select',
    size: 'medium',
    style: 'solid',
    closed: false,
    list:[{label:"Calandrier",Icon:Calendar, size: 'medium',style: 'solid'}],
    value: false,
    onChange: () =>{},
    onBlur: () => {},

  },
};


