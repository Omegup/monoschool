import type { Meta, StoryObj } from '@storybook/react';
import { HeaderCellTable } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/HeaderCellTable',
  component: HeaderCellTable,
  tags: ['autodocs'],
  argTypes: {
    sortType: { control: 'select', options: ['asc', 'desc', null] },
    
  },
} satisfies Meta<typeof HeaderCellTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Name',
    isSortable: true,
    sortType: 'asc',
    onSort: (sort) => {
      console.log(sort);
    },
  },
};
