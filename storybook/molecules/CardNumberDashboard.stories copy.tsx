/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
import { CardNumberDashboard, } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';


const meta = {
  title: 'molucules/CardNumberDashboard',
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
      { label: 'classes', icon: <Icon name='GridFive'/>, number: '9',onClick:()=>{} },
      { label: 'classes', icon:<Icon name='GridFive'/>, number: '9' ,onClick:()=>{}},
      { label: 'classes', icon:<Icon name='GridFive'/>, number: '9',onClick:()=>{} },
    ],
  },
};
