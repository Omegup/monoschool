import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Select',
    size: 'medium',
    disabled: false,
    value: true,
    onChange: () => {},
    onBlur: () => {},
    variant : 'solid'
  },
};
