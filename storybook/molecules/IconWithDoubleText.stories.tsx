import type { Meta, StoryObj } from '@storybook/react';
import { IconWithDoubleText } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { IconWithDoubleTextProps } from '@omegup-school/ui-molecules/internal/IconWithDoubleText/IconWithDoubleText.types';
import { Icon } from './Icon';

const Demo = ({
  icon,
  ...restProps
}: Omit<IconWithDoubleTextProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <IconWithDoubleText icon={<Icon name={icon} />} {...restProps} />;
};

const meta = {
  title: 'Atom/IconWithDoubleText',
  component: IconWithDoubleText,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof IconWithDoubleText>;

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
