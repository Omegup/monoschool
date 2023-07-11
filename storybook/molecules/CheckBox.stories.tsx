import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@omegup-school/ui-molecules/Checkbox';
import {
  CheckboxSize,
  CheckboxVariant,
} from '@omegup-school/ui-atoms/NakedCheckbox/NakedCheckbox-styles/NakedCheckbox-styles.types';

const meta = {
  title: 'Molecules/CheckBox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'solid',
        'border',
        'scale',
        'cell',
        'select',
      ] satisfies CheckboxVariant[],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'] satisfies CheckboxSize[],
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<Partial<typeof Checkbox>>;

export default meta;
type Story = StoryObj<typeof meta>;

const states = {
  checked: false,
  disabled: false,
};

export const Solid: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'solid',
    ...states,
  },
};
export const Border: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'border',
    ...states,
  },
};
export const Scale: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'scale',
    ...states,
  },
};
export const Cell: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'cell',
    ...states,
  },
};
export const Select: Story = {
  args: {
    label: 'CheckBox',
    size: 'medium',
    variant: 'select',
    ...states,
  },
};
