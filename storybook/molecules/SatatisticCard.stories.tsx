import type { Meta, StoryObj } from '@storybook/react';
import { StatisticCard } from '@omegup-school/ui-molecules';

import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';
import { ControlledItemStatisticCardProps } from '@omegup-school/ui-molecules/StatisticCard/StatisticCard.types';

const Demo = ({
  icon,
  ...restProps
}: Omit<ControlledItemStatisticCardProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <StatisticCard   {...restProps} />;
};
const meta = {
  title: 'Atom/SatatisticCard',
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
