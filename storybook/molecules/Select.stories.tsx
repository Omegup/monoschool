import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Select',
    size: 'medium',
    style: 'solid',
    disabled: false,
    value: true,
  onChange: () => {},
  onBlur: () => {},
  },
};
