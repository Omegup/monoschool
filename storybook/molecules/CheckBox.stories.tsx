import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from '@omegup-school/ui-molecules';


const meta = {
  title: 'Molecules/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'variant', options: ['solid', 'border', 'scale'] },
    size: { control: 'size', options: ['large', 'medium', 'small'] },

  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solidjs: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'solid',
    disabled: false,
  },
};
