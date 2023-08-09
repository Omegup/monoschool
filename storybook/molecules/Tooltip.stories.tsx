import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '@omegup-school/ui-atoms';

const meta = {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'lorem ipsum dolor',
    size: 'medium',
    variant: 'solid',
    position: 'top'
  },
};
