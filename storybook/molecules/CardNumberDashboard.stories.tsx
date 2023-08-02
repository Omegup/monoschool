import { BriefCase, GridFive, Teacher } from '@omegup-school/ui-assets';
import { CardNumberDashboard } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/CardNumberDashboard',
  component: CardNumberDashboard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardNumberDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { icon: <GridFive />, label: 'Classes', number: 90, variant: 'blue', onClick: () => { } },
      { icon: <Teacher />, label: 'Prof', number: 120, variant: 'headLine', onClick: () => { } },
      { icon: <BriefCase />, label: 'Eleves', number: 1700, variant: 'light', onClick: () => { } },
    ],
  },
};
