import type { Meta, StoryObj } from '@storybook/react';
import { CardElementStory } from '@omegup-school/ui-molecules';
 
 

const meta = {
  title: 'Atom/CardElementStory',
  component: CardElementStory,
  tags: ['autodocs'],
  argTypes: {
 
  },
} satisfies Meta<typeof CardElementStory>;

export default meta;
type Story = StoryObj<typeof CardElementStory>;

export const Primary: Story = {
   args: {
    avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
    text: 'Team1',
  },
};
