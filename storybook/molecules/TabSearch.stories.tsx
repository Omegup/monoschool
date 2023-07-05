import type { Meta, StoryObj } from '@storybook/react';

import { TabSearch } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/TabSearch',
  component: TabSearch,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    selectedIndex: 0,
    tabProps: [
      { label: 'Tous', badge: 20 },
      { label: 'Apprenant', badge: 12 },
      { label: 'Parents', badge: 3 },
      { label: 'Professeur' },
    ],
  },
};
