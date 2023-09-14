import type { Meta, StoryObj } from '@storybook/react';
import { CardIconedinfo } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from '@omegup-school/ui-atoms/Icon';
import { CardIconedinfoProps } from '@omegup-school/ui-molecules/internal/CardIconedinfo/CardIconedinfo.types';

const Demo = ({
  icon,
  ...restProps
}: Omit<CardIconedinfoProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <CardIconedinfo icon={<Icon name={icon} />} {...restProps} />;
};
const meta = {
  title: 'Molecules/TextWithIcon',
  component: CardIconedinfo,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof CardIconedinfo>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    text: 'Text Description',
    icon: 'Subtitle',
  },
};
