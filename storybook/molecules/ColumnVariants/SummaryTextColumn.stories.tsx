import type { Meta, StoryObj } from '@storybook/react';
import { TextColumn } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Molecules/Column/SummaryTextColumn',
  component: TextColumn,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text'
    },
    isSummaryColumn: {
      control: 'boolean'
    }
  },
} satisfies Meta<typeof TextColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextCell: Story = {
  args: {
    text: 'TextColumn',
    isSummaryColumn: true
  },
};
