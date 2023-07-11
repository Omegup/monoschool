import { SelectColumn } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Column/SelectColumn',
  component: SelectColumn,
  tags: ['autodocs'],
  argTypes: {
   checked: {control: 'boolean' },
   disabled: {control: 'boolean' },
  },
} satisfies Meta<typeof SelectColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectCell: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};
