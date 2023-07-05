import type { Meta, StoryObj } from '@storybook/react';
import { ChildMenu } from '@omegup-school/ui-molecules';
import { ClipboardTick, UserTick } from '@omegup-school/ui-assets';

const meta = {
  title: 'Atom/ChildMenu',
  component: ChildMenu,
  tags: ['autodocs'],
  argTypes: {
    // style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    viewMode: { control: 'select', options: ['mobile','default'] },
    icon:{control:'select',options:[<UserTick width='24' height='24' />,<ClipboardTick width='24' height='24' />]}
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
    size: 'medium',
    // style: 'border',
    viewMode: 'default'
  },
};
