import * as avatars from '@omegup-school/ui-assets/images';
import type { Meta, StoryObj } from '@storybook/react';
import { GroupChip } from '@omegup-school/ui-molecules';
import { Avatar, AvatarImage } from '@omegup-school/ui-atoms';

const meta = {
  title: 'Molecules/GroupChip',
  component: GroupChip,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof GroupChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Parent',
    persons: [
      {
        name: 'Ala Bouziri',
        avatar: <Avatar size='xsmall'>
          <AvatarImage src={avatars.avatarJoey} />
        </Avatar>,
      },
      {
        name: 'Toukbari',
        avatar: <Avatar size='xsmall'>
          <AvatarImage src={avatars.avatarCamela} />
        </Avatar>,
      },
      {
        name: 'Yaakoubi ben yagoub',
        avatar: <Avatar size='xsmall'>
          <AvatarImage src={avatars.avatarJenna} />
        </Avatar>,
      }
    ],
    onCancel: (index) => { console.log(index + ' is canceled'); }
  },
};
