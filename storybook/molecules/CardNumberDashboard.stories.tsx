/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
import { BriefCase, GridFive, Teacher } from '@omegup-school/ui-assets';
import { CardNumberDashboard } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molucules/CardNumberDashboard',
  component: CardNumberDashboard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardNumberDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { icon: <GridFive />, label: 'Classes', number: 90, onClick: () => {} },
      { icon: <Teacher />, label: 'Prof', number: 120, onClick: () => {} },
      { icon: <BriefCase />, label: 'Eleves', number: 1700, onClick: () => {} },
    ],
  },
};
