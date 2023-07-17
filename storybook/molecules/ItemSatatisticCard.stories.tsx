import type { Meta, StoryObj } from '@storybook/react';
import { ItemStatisticCard } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';
import { ControlledItemStatisticCardProps } from '@omegup-school/ui-molecules/StatisticCard/StatisticCard.types';

const Demo = ({
  icon,
  ...restProps
}: Omit<ControlledItemStatisticCardProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <ItemStatisticCard  icon={<Icon name={icon} />} {...restProps} />;
};
const meta = {
  title: 'Atom/ItemSatatisticCard',
  component: ItemStatisticCard,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    variant: {
      control: 'select',
      options: ["success","blue","warning","pink"],
    },
  },
} satisfies Meta<typeof ItemStatisticCard>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    label:'Text Description',
    amount:2250000.000,
    percentage:17,
    icon: 'Subtitle',
    variant:"blue",
  },
};
