import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'tooltip', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'tooltip', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'lorem ipsum dolor',
    size: 'medium',
    style: 'solid',
    position: 'top'
  },
};
