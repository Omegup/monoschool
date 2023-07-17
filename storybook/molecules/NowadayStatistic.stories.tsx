import type { Meta, StoryObj } from '@storybook/react';
import { NowadayStatistic } from '@omegup-school/ui-molecules';

import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';
import { NowadayStatisticProps } from '@omegup-school/ui-molecules/internal/NowadayStatistic/NowadayStatistic.types';
import { colors } from '@omegup-school/ui-configs/colors';

const Demo = ({
  firstIcon,
  secandIcon,
  ...restProps
}: Omit<NowadayStatisticProps, 'firstIcon' | 'secandIcon'> & {
  secandIcon: keyof typeof icons;
  firstIcon: keyof typeof icons;
}) => {
  return (
    <NowadayStatistic
      firstIcon={<Icon name={firstIcon} />}
      secandIcon={<Icon color={colors.headline[100]} name={secandIcon} />}
      {...restProps}
    />
  );
};
const meta = {
  title: 'Molecules/NowadayStatistic',
  component: NowadayStatistic,
  tags: ['autodocs'],
  argTypes: {
    firstIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    secandIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof NowadayStatistic>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    label: "Ajourd'hui",
    items: [
      {
        icon: <Icon name={'MoneyRecive'} />,
        label: 'Revenus',
        amount: '35 DT',
      },
      {
        icon: <Icon name={'MoneySend'} color={colors.headline[100]} />,
        label: 'Depenses',
        amount: '25 DT',
      },
    ],
  },
};
