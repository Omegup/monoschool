import type { Meta, StoryObj } from '@storybook/react';
import { HeaderCell } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/HeaderCell',
  component: HeaderCell,
  tags: ['autodocs'],
  argTypes: {
    sortType: { control: 'select', options: ['asc', 'desc', null] },
    
  },
} satisfies Meta<typeof HeaderCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    sortType: 'asc',
    text :"test",
    onSort: () => console.log('click'),

  },
};
