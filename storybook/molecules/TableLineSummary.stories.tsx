import type { Meta, StoryObj } from '@storybook/react';

import { TableLineSummary } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/TableLineSummary',
  component: TableLineSummary,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof TableLineSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

const row = {
  id: <div style={{
    padding: '10px',
  }}>ouhbbohjb</div>,
}

export const TableLineSummaryDefault: Story = {
  args: {
    row,
  },
};
