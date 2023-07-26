import { Timeline } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/TimeLine',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    startDate: { control: 'text' },
    endDate: { control: 'text' },
    progressDate: { control: 'text' },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Primary: Story = {
  args: {
    startDate: '15/09/2023',
    endDate: '30/06/2024',
    progressDate: '15/01/2024',
    progressDateTitle: 'Aujourd\'hui',
    progressWidth: 50,
  },
};
