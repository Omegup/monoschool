import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@omegup-school/ui-assets/icons'
import { IconContainer } from '@omegup-school/ui-molecules';

const ICONS = {
  icon1: <Logo height={24} width={24} />,
  icon2: <Logo height={24} width={24} fill='green' />,
  icon3: <Logo height={24} width={24} fill='yellow' />,
  icon4: <Logo height={24} width={24} fill='red' />,
}
const meta = {
  title: 'Atom/IconContainer',
  component: IconContainer,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: Object.keys(ICONS), },
  },
} satisfies Meta<typeof IconContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ icon = 'icon1', }) => <IconContainer
    icon={ICONS[icon as keyof typeof ICONS]}

  />,
  args: {
    icon: 'icon1',
    padding: 20,
    height: 50,
    width: 50
  },
};
