import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@omegup-school/ui-assets/icons'
import { TextWithIcon } from '@omegup-school/ui-cells';
const ICONS = {
  icon1: <Logo height={24} width={24} />,
  icon2: <Logo height={24} width={24} fill='green' />,
  icon3: <Logo height={24} width={24} fill='yellow' />,
  icon4: <Logo height={24} width={24} fill='red' />,
}
const meta = {
  title: 'Atom/TextWithIcon',
  component: TextWithIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: Object.keys(ICONS), },

  },
} satisfies Meta<typeof TextWithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ icon = 'icon1', text, }) => <TextWithIcon
    icon={ICONS[icon as keyof typeof ICONS]}
    text={text}
  />,
  args: {
    text: 'Text Description',
    icon: 'icon1'
  },
};
