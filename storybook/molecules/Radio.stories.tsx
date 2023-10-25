import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from '@omegup-school/ui-molecules';
import { SelectableOptionSize, SelectableOptionVariant } from '@omegup-school/ui-atoms/CoreSelectableOption/CoreSelectableOption-styles/CoreSelectableOption-styles.types';

const meta = {
  title: 'Molecules/Radio',
  component: Radio,
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
      ] satisfies SelectableOptionVariant[],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'] satisfies SelectableOptionSize[],
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<Partial<typeof Radio>>;

export default meta;
type Story = StoryObj<typeof meta>;

const states = {
  checked: false,
  disabled: false,
};

export const Solid: Story = {
  args: {
    label: 'Radio',
    size: 'medium',
    variant: 'solid',
    ...states,
  },
};
export const Border: Story = {
  args: {
    label: 'Radio',
    size: 'medium',
    variant: 'border',
    ...states,
  },
};
export const Scale: Story = {
  args: {
    
    label: 'Radio',
    size: 'medium',
    variant: 'scale',
    ...states,
  },
};
export const Cell: Story = {
  args: {
    
    label: 'Radio',
    size: 'medium',
    variant: 'cell',
    ...states,
  },
};
export const Select: Story = {
  args: {
    
    label: 'Radio',
    size: 'medium',
    variant: 'select',
    ...states,
  },
};
