import type { Meta, StoryObj } from '@storybook/react';
import { CardIconedDetail } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { IconWithDoubleTextProps } from '@omegup-school/ui-molecules/internal/CardIconedDetail/IconWithDoubleText.types';
import { Icon } from '@omegup-school/ui-atoms/Icon';

const Demo = ({
  icon,
  ...restProps
}: Omit<IconWithDoubleTextProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <CardIconedDetail icon={<Icon name={icon} />} {...restProps} />;
};

const meta = {
  title: 'Atom/IconWithDoubleText',
  component: CardIconedDetail,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof CardIconedDetail>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    icon: 'Square',
    text: 'Text Description',
    subText: 'Subtext Description',
  },
};
