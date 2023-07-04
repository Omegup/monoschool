import type { Meta, StoryObj } from '@storybook/react';
import { SmallText } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/TextSmall',
  component: SmallText,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof SmallText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Text Description',
  },
};
