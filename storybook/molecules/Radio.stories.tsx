import { Radio } from '@omegup-school/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atom/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'scale', 'border']

    },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Ala Bouziri',
    variant: 'scale',
    size: 'medium',
    disabled: false,
    checked: false,
    onCheck: () => { },
  },
};
