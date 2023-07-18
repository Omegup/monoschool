/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from '@omegup-school/ui-molecules';
import { Avatar, AvatarImage } from '@omegup-school/ui-atoms';

const meta = {
  title: 'Atom/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Parent',
    persons: [
      {
        name: 'Ala Bouziri',
        avatar: <Avatar size='xsmall'>
          <AvatarImage src='https://avatars.githubusercontent.com/u/1800191?v=4' />
        </Avatar>,
      },
      {
        name: 'Toukbari',
        avatar: <Avatar size='xsmall'>
          <AvatarImage  src='https://avatars.githubusercontent.com/u/1800191?v=4' />
        </Avatar>,
      },
      {
        name: 'Yaakoubi ben yagoub',
        avatar: <Avatar size='xsmall'>
          <AvatarImage src='https://avatars.githubusercontent.com/u/1800191?v=4' />
        </Avatar>,
      }
    ],
    onCancel: (index) => { console.log(index + ' is canceled'); }
  },
};
