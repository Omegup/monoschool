import type { Meta, StoryObj } from '@storybook/react';

import { ViewModeSwitcher } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/ViewModeSwitcher',
  component: ViewModeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof ViewModeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value:true,
    label: 'ViewModeSwitcher',
    size: 'medium',
    style: 'solid',
    disabled: false,
  },
};
