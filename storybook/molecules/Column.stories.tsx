import type { Meta, StoryObj } from '@storybook/react';

import { Column, CurrencyColumn, LabeledCheckBox, TextColumn } from '@omegup-school/ui-molecules';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecules/Column',
  component: Column,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>

const CheckboxDemo = () => {
  
  const [isSelected, setIsSelected] = useState(false);

  return (
      <LabeledCheckBox
        checked={isSelected}
        onChange={() => setIsSelected(!isSelected)}
        disabled={false}
        label=''
        variant='cell'
      />
  );
};

export const TextCell: Story = {
  args: {
    children: <TextColumn text='Text Cell' />
  },
};
export const CurrencyCell: Story = {
  args: {
    children: <CurrencyColumn amount={3345436456546} />
  },
};
export const CurrencyCellTotal: Story = {
  args: {
    children: <CurrencyColumn amount={3345436456546} isTotalAmount={true} />
  },
};
export const CheckboxCell: Story = {
  args: {
    children: <CheckboxDemo />,
  },
};

