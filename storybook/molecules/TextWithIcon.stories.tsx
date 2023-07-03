import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@omegup-school/ui-assets/icons'
import { IconContainer, TextWithIcon } from '@omegup-school/ui-molecules';

const meta = {
  title: 'Atom/TextWithIcon',
  component: TextWithIcon,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof TextWithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Text Description',
    icon: <IconContainer icon={<Logo height={24} width={24} />} />
  },
};
