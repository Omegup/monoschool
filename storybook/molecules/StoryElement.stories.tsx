import type { Meta, StoryObj } from '@storybook/react';
import { StoryElement } from '@omegup-school/ui-molecules';
 
 

const meta = {
  title: 'Molecules/StoryElement',
  component: StoryElement,
  tags: ['autodocs'],
  argTypes: {
 
  },
} satisfies Meta<typeof StoryElement>;

export default meta;
type Story = StoryObj<typeof StoryElement>;

export const Primary: Story = {
   args: {
    avatarUrl: 'avatarJenna',
    text: 'Team1',
  },
};
