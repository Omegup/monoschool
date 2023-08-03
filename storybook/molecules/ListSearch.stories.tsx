import type { Meta, StoryObj } from '@storybook/react';

import { ListSearch } from '@omegup-school/ui-molecules';
import { Avatar, AvatarImage } from '@omegup-school/ui-atoms';

const meta = {
  title: 'Atom/ListSearch',
  component: ListSearch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    }
  },
} satisfies Meta<typeof ListSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checked: false,
    name: 'Ala Bouziri',
    description: 'Prof',
    avatar: <Avatar size='large'>
      <AvatarImage src='https://avatars.githubusercontent.com/u/1800191?v=4' />
    </Avatar>,
  },
};
