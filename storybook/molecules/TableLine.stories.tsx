import type { Meta, StoryObj } from '@storybook/react';

import { Column, TableLine } from '@omegup-school/ui-molecules';
import { useState } from 'react';

const TableLineDemo = ({
  row,
  isFullWidth,
}: {
  row: JSX.Element[],

  isFullWidth: boolean,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TableLine
      isFullWidth={isFullWidth}
      row={row} isSelected={isSelected} setIsSelected={setIsSelected} />
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecules/TableLine',
  component: TableLineDemo,
  tags: ['autodocs'],
  argTypes: {
    row: { control: 'array' },
  },
} satisfies Meta<typeof TableLineDemo>;

export default meta;
type Story = StoryObj<typeof meta>;



const row = [
  <Column text="Text Cell" />,
  <Column text="Text Cell" />,
  <Column text="Text Cell" />,
  <Column text="Text Cell" />,
]



export const Template: Story = {
  args: {
    isFullWidth: false,
    row: row,
  },

};



