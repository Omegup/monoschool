import type { Meta, StoryObj } from '@storybook/react';
import { DoubleText } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/DoubleText',
  component: DoubleText,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof DoubleText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Text Description',
    subText: 'Subtext Description'
  },
};
