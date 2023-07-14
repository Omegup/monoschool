/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { CardNumberDashboard } from '@omegup-school/ui-molecules';
import { ControlledCardNumberDashboardProps } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';

const Demo = ({
  ...restProps
}: Omit<ControlledCardNumberDashboardProps, 'icon'> & {
  icon: keyof typeof icons;
}) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <CardNumberDashboard  {...restProps} />;
};
const meta = {
  title: 'Atom/CardNumberDashboard',
  component: CardNumberDashboard,
  tags: ['autodocs'],
  argTypes: {
   
  },
} satisfies Meta<typeof CardNumberDashboard>;

export default meta;
type Story = StoryObj<typeof CardNumberDashboard>;

export const Primary: Story = {
  args: {
    children: [
      { label: 'classes', icon: "", number: '9',onClick:()=>{} },
      { label: 'classes', icon:"", number: '9' ,onClick:()=>{}},
      { label: 'classes', icon:"", number: '9',onClick:()=>{} },
    ],
  },
};
