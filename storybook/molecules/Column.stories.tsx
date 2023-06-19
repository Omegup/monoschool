import type { Meta, StoryObj } from '@storybook/react';

import { Column } from '@omegup-school/ui-molecules';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecules/Column',
  component: Column,
  tags: ['autodocs'],
  argTypes: {
   text: { control: 'text' },
  },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Column',
    Adornment: {
      start: <img/>,
      end: <img/>,
    },
    currencyFormat(amount) {
      return amount+'$';
    },
  },
};

