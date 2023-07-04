import type { Meta, StoryObj } from '@storybook/react';
import { XSmallText } from '@omegup-school/ui-cells';

const meta = {
  title: 'Atom/TextXSmall',
  component: XSmallText,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof XSmallText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Text Description',
  },
};
