import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Molucules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Card',
    size: 'medium',
    style: 'solid',
    value: true,
  onChange: () => {},
  onBlur: () => {},
  },
};
