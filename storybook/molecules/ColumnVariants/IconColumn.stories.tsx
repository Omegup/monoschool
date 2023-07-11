import * as icons from '@omegup-school/ui-assets/icons';
import { IconColumn } from '@omegup-school/ui-molecules';
import { IconColumnProps } from '@omegup-school/ui-molecules/ColumnVariants/IconColumn/IconColumn.types';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../Icon';

const Demo = ({
  icon,
  text
}: Omit<IconColumnProps, 'icon'> & { icon: keyof typeof icons }) => {
  return <IconColumn text={text} icon={<Icon name={icon} width='20' height='20' />} />;
};

const meta = {
  title: 'Molecules/Column/IconColumn',
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
    icon: "Clipboard" ,
    text: 'Icon Cell',
  },
};
