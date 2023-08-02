import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@omegup-school/ui-molecules';
import { TagType } from '@omegup-school/ui-atoms/TagToggle/TagToggle.types';

const meta = {
  title: 'Atom/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['success', 'warning', 'error', 'active', 'info', 'inactive'] satisfies TagType[] },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Test',
    type: 'success',
  },
};
