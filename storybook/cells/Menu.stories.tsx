import type { Meta, StoryObj } from '@storybook/react'
import { MenuStory } from './MenuStory'

const meta = {
  title: 'Cell/Menu',
  component: MenuStory,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof MenuStory>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {
//   },
// };
