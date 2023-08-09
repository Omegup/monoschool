import { DataTableDashboard } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/DataTableDashboard',
  component: DataTableDashboard,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof DataTableDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    header: [
      {
        content: 'classe',
        type: 'string',
      },
      {
        content: 'Matiere',
        type: 'string',
      },
      {
        content: 'Professeur',
        type: 'string',
      },
      {
        content: 'Nombre d\'élèves',
        type: 'string',
      },
      {
        content: 'Horiaire',
        type: 'string',
      },
    ],
    body: [
      {
        content: '1-A',
      },
      {
        content: 'Math',
      },
      {
        content: 'M. Jean',
      },
      {
        content: '30',
      },
      {
        content: '8h-10h',
      }
    ],
  },
};
