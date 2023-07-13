import type { Meta, StoryObj } from '@storybook/react';
import { TagColumn } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Molecules/Column/TagColumn',
  component: TagColumn,
  tags: ['autodocs'],
  argTypes: {
    label : {control : 'text'},
  },
} satisfies Meta<typeof TagColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextCell: Story = {
  args: {
    label: 'TagColumn',
    type : 'active'
  },
};
