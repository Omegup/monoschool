import type { Meta, StoryObj } from '@storybook/react';
import { ChildMenu } from '@omegup-school/ui-molecules';
import { UserTick } from '@omegup-school/ui-assets';

const meta = {
  title: 'Atom/ChildMenu',
  component: ChildMenu,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'ChildMenu', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'ChildMenu', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof ChildMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: true,
    icon: <UserTick width='24' height='24' />,
    label: "Présence des enseigants",
    selected: true,
    id: 1,
    isCollopsed: false,
    value: true,
    size: 'large',
    style: 'border',
  },
};
