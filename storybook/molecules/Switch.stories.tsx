import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Molecules/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checked: false,
    onChange: () => {
      console.log('onChange');
    },
  },
};
