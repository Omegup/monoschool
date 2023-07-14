import type { Meta, StoryObj } from '@storybook/react'
import { TooltipStory } from './TooltipStory'

const meta = {
  title: 'Cell/Tooltip',
  component: TooltipStory,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof TooltipStory>;

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
