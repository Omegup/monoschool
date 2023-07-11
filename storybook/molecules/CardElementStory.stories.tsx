import type { Meta, StoryObj } from '@storybook/react';
import { CardElementStory } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { ControlledCardElementStorytProps } from '@omegup-school/ui-molecules/CardElementStory/CardElementStory.types';
import { Icon } from './Icon';

const Demo = ({
  avatar,
  ...restProps
}: Omit<ControlledCardElementStorytProps, 'icon'> & { avatar: keyof typeof icons }) => {
  return <CardElementStory avatar={<Icon name={avatar} width='70' height='70' />} text={""} {...restProps} />;
};

const meta = {
  title: 'Atom/CardElementStory',
  component: CardElementStory,
  tags: ['autodocs'],
  argTypes: {
    avatar: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof CardElementStory>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    avatar: 'Square',
    text: 'Team1',
  },
};
