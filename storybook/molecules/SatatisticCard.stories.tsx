import type { Meta, StoryObj } from '@storybook/react';
import { StatisticCard } from '@omegup-school/ui-molecules';

import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';
import { ControlledStatisticCardProps } from '@omegup-school/ui-molecules/StatisticCard/StatisticCard.types';

const Demo = ({
  icon,
  ...restProps
}: Omit<ControlledStatisticCardProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <StatisticCard   {...restProps} />;
};
const meta = {
  title: 'Molecules/SatatisticCard',
  component: StatisticCard,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof StatisticCard>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    text: 'Text Description',
    icon: 'Subtitle',
  },
};
