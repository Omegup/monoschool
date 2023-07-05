import type { Meta, StoryObj } from '@storybook/react';
import { TextWithIcon } from '@omegup-school/ui-external-molecules';
import { TextWithIconProps } from '@omegup-school/ui-external-molecules/TextWithIcon/TextWithIcon.types';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';

const Demo = ({
  icon,
  ...restProps
}: Omit<TextWithIconProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <TextWithIcon icon={<Icon name={icon} />} {...restProps} />;
};
const meta = {
  title: 'Atom/TextWithIcon',
  component: TextWithIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof TextWithIcon>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    text: 'Text Description',
    icon: 'Subtitle',
  },
};
