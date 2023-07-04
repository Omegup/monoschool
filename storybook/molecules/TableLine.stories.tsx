import type { Meta, StoryObj } from '@storybook/react';

import { TextColumn, TableLine } from '@omegup-school/ui-molecules';
import { useState } from 'react';
import { TableLineProps } from '@omegup-school/ui-molecules/TableLine/TableLine.types';

interface TableLineDemoType {
  name: React.ReactNode;
  lastName: React.ReactNode;
  email: React.ReactNode;
}

const TableLineDemo = ({
  row,
  isFullWidth,
}: {
  row: TableLineProps<TableLineDemoType>['row'];
  isFullWidth: boolean;
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
} satisfies Meta<typeof TableLineDemo>;

export default meta;
type Story = StoryObj<typeof meta>;



const row = {
  name: <TextColumn text='Text Cell' />,
  lastName: <TextColumn text='Text Cell' />,
  email: <TextColumn text='Text Cell' />,
}

export const Template: Story = {
  args: {
    row,
    isFullWidth: false,
  }

};



