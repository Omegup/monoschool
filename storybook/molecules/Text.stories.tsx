import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {

    weight: { control: 'select', options: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    size: { control: 'select', options: ['large', 'medium', 'small', 'XSmall'] },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'small',
    value: 'Text Description',
    weight: 500,
  },
};
