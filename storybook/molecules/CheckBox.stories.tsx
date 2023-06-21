import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from '@omegup-school/ui-molecules';


const meta = {
  title: 'Molecules/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'solid',
    disabled: false,
  },
};
export const Border: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'border',
    disabled: false,
  },
};
export const Scale: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'scale',
    disabled: false,
  },
};
