import type { Meta, StoryObj } from '@storybook/react';
import { HeaderCellTable } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/HeaderCellTable',
  component: HeaderCellTable,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof HeaderCellTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Name',
    isSortable: true,
    onSort: (sort) => {
      console.log(sort);
    },
  },
};
