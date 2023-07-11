import { ActionsColumn } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../Icon';

const meta = {
  title: 'Molecules/Column/ActionsColumn',
  component: ActionsColumn,
  tags: ['autodocs'],
  argTypes: {
    actions: { control: 'object' },
  },
} satisfies Meta<typeof ActionsColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionsCell: Story = {
  args: {
    actions: [{
      icon: <Icon name="Edit" width='20' height='20' />,
      rowId: 1,
      callBackFn: () => console.log('click'),
    }, {
      icon: <Icon name="TrashSquare"  width='20' height='20'/>,
      rowId: 2,
      callBackFn: () => console.log('clicked'),
    }],
  },
};
