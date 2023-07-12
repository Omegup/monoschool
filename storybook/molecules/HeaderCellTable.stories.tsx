import type { Meta, StoryObj } from '@storybook/react';
import { HeaderCell } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/HeaderCell',
  component: HeaderCell,
  tags: ['autodocs'],
  argTypes: {
    sortType: { control: 'select', options: ['asc', 'desc', null] },
    isSortobale: { control: 'boolean' },
    text: { control: 'text' },
  },
} satisfies Meta<typeof HeaderCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "test",
    sortType: 'asc',
    isSortobale: true,
    onSort: (sort) => console.log(sort),
  },
};
