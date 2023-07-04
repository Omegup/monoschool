import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@omegup-school/ui-assets/icons'
import { IconContainer } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/IconContainer',
  component: IconContainer,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof IconContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <IconContainer icon={<Logo height={24} width={24} />} />,
    padding: 20,
    height: 50,
    width: 50
  },
};
