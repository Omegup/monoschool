import * as icons from '@omegup-school/ui-assets/icons';
import { IconColumn } from '@omegup-school/ui-molecules';
import { IconColumnProps } from '@omegup-school/ui-molecules/ColumnVariants/IconColumn/IconColumn.types';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../Icon';

const Demo = ({
  icon,
  ...restProps
}: Omit<IconColumnProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <IconColumn icon={<Icon name={icon} />} {...restProps} />;
};

const meta = {
  title: 'Molecules/Column/AvatarColumn',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconCell: Story = {
  args: {
    text: 'AvatarColumn',
    icon: 'Tick',
  },
};
