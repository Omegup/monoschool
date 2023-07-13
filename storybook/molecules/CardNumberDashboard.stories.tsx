import type { Meta, StoryObj } from '@storybook/react';
import { CardNumberDashboard } from '@omegup-school/ui-molecules';
import { ControlledCardNumberDashboardProps } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';

const Demo = ({
  icon,
  ...restProps
}: Omit<ControlledCardNumberDashboardProps, 'icon'> & { icon: keyof typeof icons }) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <CardNumberDashboard icon={<Icon name={icon} />} {...restProps} />;
};
const meta = {
  title: 'Atom/CardNumberDashboard',
  component: CardNumberDashboard,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof CardNumberDashboard>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    label:"classes",
    icon: 'Subtitle',
    number:"9"
  },
};
