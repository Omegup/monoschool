import * as icons from '@omegup-school/ui-assets/icons';
import { ItemCardNumberDashboard, Text } from '@omegup-school/ui-atoms';
import { Icon } from '@omegup-school/ui-atoms/Icon';
import { ControlledItemCardNumberDashboardProps } from '@omegup-school/ui-atoms/ItemCardNumberDashboard/ItemCardNumberDashboard.types';
import type { Meta, StoryObj } from '@storybook/react';

const Demo = ({
  icon,
  label,
  number,
  variant,
  ...restProps
}: ControlledItemCardNumberDashboardProps & {
  icon: keyof typeof icons;
  label: string;
  number: string;
}) => {
  return (<div style={{ display: 'flex' }}>
    <ItemCardNumberDashboard
      {...restProps}
      variant={variant}
      TextNumber={<Text variant={'display_large_bold'} text={number} />}
    >
      <Icon name={icon} />
      <Text variant={'paragraph_medium_medium'} text={label} />
    </ItemCardNumberDashboard></div>
  );
};
const meta = {
  title: 'Molecules/ItemCardNumberDashboard',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    variant: {
      control: 'select',
      options: ['light', 'blue', 'headLine'],
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  args: {
    label: 'classes',
    icon: 'GridFive',
    number: '9',
    variant: 'blue',
  },
};
