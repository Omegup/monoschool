import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxSize, CheckboxVariant } from '@omegup-school/ui-atoms/NakedCheckbox/NakedCheckBox.types';
import { Checkbox } from '@omegup-school/ui-molecules/Checkbox';


const meta = {
  title: 'Molecules/CheckBox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'border', 'scale', 'cell', 'select'] as CheckboxVariant[] },
    size: { control: 'select', options: ['large', 'medium', 'small'] as CheckboxSize[] },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<Partial<typeof Checkbox>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'solid',
  },
};
export const Border: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'border',
  },
};
export const Scale: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'scale',
  },
};
export const Cell: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'cell',
  },
};
export const Select: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'select',
  },
};
