/* eslint-disable react/react-in-jsx-scope */
import * as icons from '@omegup-school/ui-assets/icons';
import { ItemCardNumberDashboard, Text } from '@omegup-school/ui-atoms';
import { ControlledItemCardNumberDashboardProps } from '@omegup-school/ui-atoms/ItemCardNumberDashboard/ItemCardNumberDashboard.types';
import { CardNumberDashboard } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const Demo = ({
  icon,
  label,
  number,
  variant,
  ...restProps
}: Omit<ControlledItemCardNumberDashboardProps, 'icon'> & {
  icon: keyof typeof icons;
  label: string;
  number: string;
}) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (<div style={{display:'flex'}}>
    <ItemCardNumberDashboard
      {...restProps}
      variant={variant}
      TextNumber={<Text variant={'display_large_bold'} text={number} />}
    >
      {' '}
      <Icon name={icon}/>
      <Text variant={'paragraph_medium_medium'} text={label} />
    </ItemCardNumberDashboard></div>
  );
};
const meta = {
  title: 'Atom/ItemCardNumberDashboard',
  component: CardNumberDashboard,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    variant: {
      control: 'select',
      options: ['light','blue','headLine'],
    },
  },
} satisfies Meta<typeof CardNumberDashboard>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    label: 'classes',
    icon: 'GridFive',
    number: '9',
    variant:'blue',
  },
};
