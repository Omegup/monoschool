import { Timeline } from '@omegup-school/ui-atoms';
import type { Meta, StoryObj } from '@storybook/react';




const meta = {
  title: 'Molecules/TimeLine',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    startDate: {
      control: {
        type: 'date',
      },
    },
    endDate: {
      control: {
        type: 'date',
      },
    },
    toDay: {
      control: {
        type: 'date',
      },
    },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Primary: Story = {
  render: Timeline,
  args: {
    startDate : new Date('2023-09-15'),
    endDate : new Date('2024-06-30'),
    toDay : new Date('2024-1-15'),
  },
};
