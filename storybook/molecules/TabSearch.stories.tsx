import type { Meta, StoryObj } from '@storybook/react';

import { TabSearch } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/TabSearch',
  component: TabSearch,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'tabSearch' },
  },
} satisfies Meta<typeof TabSearch>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  args: {
    data : [
      { tabText: 'Tous', tabNumber: 20 },
      { tabText: 'Apprenant', tabNumber: 12 },
      { tabText: 'Parents', tabNumber: 3 },
      { tabText: 'Professeur', tabNumber: 1 },
    ],
  },
};
