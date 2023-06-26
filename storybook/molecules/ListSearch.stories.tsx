import type { Meta, StoryObj } from '@storybook/react';

import { ListSearch } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/ListSearch',
  component: ListSearch,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ListSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Ala Bouziri',
    description: 'Prof',
  },
};
