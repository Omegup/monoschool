import type { Meta, StoryObj } from '@storybook/react';
import { CardDoubleText } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/CardDoubleText',
  component: CardDoubleText,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardDoubleText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Text Description',
    subText: 'Subtext Description',
  },
};
