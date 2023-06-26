import type { Meta, StoryObj } from '@storybook/react';

import { SubSideBar } from '@omegup-school/ui-molecules';
import { Calendar } from '@omegup-school/ui-assets';
const meta = {
  title: 'molecule/SubSideBar',
  component: SubSideBar,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof SubSideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    style: 'solid',
    label:"Calendrier",
    Icon:Calendar,

  },
};
