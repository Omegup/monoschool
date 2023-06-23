import type { Meta, StoryObj } from '@storybook/react';

import { LabeledCheckBox } from '@omegup-school/ui-molecules';


const meta = {
  title: 'Molecules/CheckBox',
  component: LabeledCheckBox,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof LabeledCheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'solid',
    disabled: false,
    checked: true,
  },
};
export const Border: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'border',
    checked: true,
    disabled: false,
  },
};
export const Scale: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'scale',
    checked: true,
    disabled: false,
  },
};
export const Tabline: Story = {
  args: {
    label: 'LabeledCheckBox',
    size: 'medium',
    variant: 'tableLine',
    checked: true,
    disabled: false,
  },
};
