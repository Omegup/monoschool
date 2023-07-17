import type { Meta, StoryObj } from '@storybook/react'
import { LayoutStory } from './LayoutStory'

const meta = {
  title: 'Molecules/Menu',
  component: LayoutStory,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof LayoutStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backdrop: true
  },
};
