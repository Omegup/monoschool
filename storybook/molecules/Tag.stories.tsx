import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['success', 'warning', 'error', 'active', 'info', 'inactive'] },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'success',
  },
};
