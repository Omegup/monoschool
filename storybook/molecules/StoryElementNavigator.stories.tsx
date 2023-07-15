import type { Meta, StoryObj } from '@storybook/react';
import { StoryElementNavigator } from '@omegup-school/ui-molecules';
 
 

const meta = {
  title: 'Atom/StoryElementNavigator',
  component: StoryElementNavigator,
  tags: ['autodocs'],
  argTypes: {
 
  },
} satisfies Meta<typeof StoryElementNavigator>;

export default meta;
type Story = StoryObj<typeof StoryElementNavigator>;

export const Primary: Story = {
   args: {
    avatarUrl: 'components\assets\images\avatars\Ellipse47.png',
    text: 'Créer une story',
  },
};
