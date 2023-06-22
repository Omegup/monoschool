import type { Meta, StoryObj } from '@storybook/react';

import { Column, TableLine } from '@omegup-school/ui-molecules';
import { NakedCheckBox } from '@omegup-school/ui-molecules/Internals';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecules/TableLine',
  component: TableLine,
  tags: ['autodocs'],
  argTypes: {
    isFullWidth: { control: 'boolean' },
    isSelected: { control: 'boolean' },
    row: { control: 'array' },
  },
} satisfies Meta<typeof TableLine>;

export default meta;
type Story = StoryObj<typeof meta>;

const row =  [
  <Column text="Column 2" />,
  <Column text="Column 3" />,
]

export const Template: Story = {
  args: {
    isFullWidth: false,
    isSelected: true,
    row: row,
  },

};



