import type { Meta, StoryObj } from '@storybook/react'
import { PopupStory } from './PopupStory'

const meta = {
  title: 'Molecules/Popup',
  component: PopupStory,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof PopupStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    testLabel: 'lorem ipsum dolor',
    backdrop: true,
  },
};
