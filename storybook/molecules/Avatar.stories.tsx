import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage } from '@omegup-school/ui-atoms';
import * as icons from '@omegup-school/ui-assets/icons';
import * as avatars from '@omegup-school/ui-assets/images';
import { Icon } from '@omegup-school/ui-atoms/Icon';
import { AvatarProps } from '@omegup-school/ui-atoms/Avatar/Avatar.type';

const Demo = ({
  children,
  src,
  ...restProps
}: Omit<AvatarProps, 'children'> & {
  children: keyof typeof icons | 'none';
  src: keyof typeof avatars | 'none';
}) => {
  return (
    <Avatar
      children={
        src !== 'none' ? (
          <AvatarImage src={avatars[src]} />
        ) : children === 'none' ? (
          <></>
        ) : (
          <Icon name={children} />
        )
      }
      {...restProps}
    />
  );
};
const meta = {
  title: 'Atom/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'select',
      options: ['none', ...Object.keys(icons)] as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  argTypes: {
    src: {
      control: 'select',
      options: [
        'none',
        'avatarSam',
        'avatarJoey',
        'avatarJenna',
        'avatarLaila',
        'avatarCamela',
      ],
    },
  },
  args: {
    src: 'avatarJenna',
    size: 'large',
    children: 'none',
  },
};
