import { FeeCard } from '@omegup-school/ui-molecules';
import { FeeCardProps } from '@omegup-school/ui-molecules/FeeCard/FeeCard.type';
import type { Meta, StoryObj } from '@storybook/react';

const Demo = (props: FeeCardProps) => {
  return (
    <div>
      <FeeCard {...props} />
    </div>
  );
};
const meta = {
  title: 'Atom/FeeCard',
  component: FeeCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FeeCard>;

export default meta;
type Story = StoryObj<typeof FeeCard>;

export const Primary: Story = {
  render: Demo,
  args: {
    amount: '4.500,000 DT',
    billableAmount: '435.000,000 DT',
    feeName: 'Frais de scolarité annuels',
    type: 'Frais unique',
    recipientsNumber: '100',
    estimatedBillableAmount: '450.000,000 DT',
  },
};
