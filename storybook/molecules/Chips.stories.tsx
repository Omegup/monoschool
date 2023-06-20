import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
