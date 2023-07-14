import * as icons from '@omegup-school/ui-assets/icons';
import * as avatars from '@omegup-school/ui-assets/images';
import { Avatar, AvatarImage } from '@omegup-school/ui-atoms';
import { AvatarProps } from '@omegup-school/ui-atoms/Avatar/Avatar.type';
import { AvatarColumn } from '@omegup-school/ui-molecules';
import { AvatarColumnProps } from '@omegup-school/ui-molecules/ColumnVariants/AvatarColumn/AvatarColumn.types';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../Icon';

const AvatarColumnDemo = ({
  children,
  src,
  ...restProps
}: Omit<AvatarColumnProps & AvatarProps, 'children'> & {
  children: keyof typeof icons | 'none';
  src: keyof typeof avatars | 'none';
}) => {
  return (
    <AvatarColumn
      avatar={
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
      }
      text='avatar cell'
    />
  );
};
const meta = {
  title: 'Molecules/AvatarColumn',
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
type Story = StoryObj<typeof AvatarColumnDemo>;

export const Primary: Story = {
  render: AvatarColumnDemo,
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
    text : {
      control : 'text'
    }
  },
  args: {
    src: 'avatarJenna',
    size: 'small',
    children: 'none',
  },
};
