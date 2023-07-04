import type { Meta, StoryObj } from '@storybook/react';

import { IconWithDoubleText } from '@omegup-school/ui-molecules';
import { Logo } from '@omegup-school/ui-assets';

const ICONS = {
  icon1: <Logo height={24} width={24} />,
  icon2: <Logo height={24} width={24} fill='green' />,
  icon3: <Logo height={24} width={24} fill='yellow' />,
  icon4: <Logo height={24} width={24} fill='red' />,
}
const meta = {
  title: 'Atom/IconWithDoubleText',
  component: IconWithDoubleText,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: Object.keys(ICONS), },
  },
} satisfies Meta<typeof IconWithDoubleText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ icon = 'icon1', text, subText, }) => <IconWithDoubleText
    icon={ICONS[icon as keyof typeof ICONS]}
    subText={subText}
    text={text}
  />,
  args: {
    icon: 'icon1',
    text: 'Text Description',
    subText: 'Subtext Description'
  },
};
