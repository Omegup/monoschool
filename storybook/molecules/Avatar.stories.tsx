import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@omegup-school/ui-atoms';
import * as icons from '@omegup-school/ui-assets/icons';
import * as avatars from '@omegup-school/ui-assets/images';
import { Icon } from './Icon';
import { controlledAvatarProps } from '@omegup-school/ui-atoms/Avatar/Avatar.type';

const Demo = ({
  children,
  src,
  ...restProps
}: Omit<controlledAvatarProps, 'children'> & {
  children: keyof typeof icons | 'none';
  src: keyof typeof avatars | 'none';
}) => {
  return (
    <Avatar
      {...(src === 'none' ? {} : { src: avatars[src] })}
      children={children === 'none' ? <></> : <Icon name={children} />}
      {...restProps}
    />
  );
};
const meta = {
  title: 'Atom/Avatar',
  component: Avatar,
  tags: ['autodocs'],
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
  args: {
    src: 'avatarJenna',
    size: 'large',
    children: 'none',
  },
};
