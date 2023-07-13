import type { Meta, StoryObj } from '@storybook/react';
import { TestCell } from '@omegup-school/ui-cells';

const meta = {
  title: 'Cell/TestCell',
  component: TestCell,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TestCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
