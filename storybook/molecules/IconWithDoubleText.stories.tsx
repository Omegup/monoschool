import type { Meta, StoryObj } from '@storybook/react';
import { CardIconedDetail } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { ControlledCardDoubleTextProps } from '@omegup-school/ui-molecules/internal/CardDoubleText/CardDoubleText.types';
import { Icon } from '@omegup-school/ui-atoms/Icon';

const Demo = ({
  icon,
  ...restProps
}: Omit<ControlledCardDoubleTextProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <CardIconedDetail icon={<Icon name={icon} />} {...restProps} />;
};

const meta = {
  title: 'Molecules/IconWithDoubleText',
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
