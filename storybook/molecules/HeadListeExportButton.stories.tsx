import type { Meta, StoryObj } from '@storybook/react';
import { HeadListeExportButton,ControlledHeadListeExportButtonProps } from '@omegup-school/ui-molecules/internal';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';
import { colors } from '@omegup-school/ui-configs/colors';

const Demo = ({
  icon,
  ...restProps
}: Omit<ControlledHeadListeExportButtonProps, 'icon'> & { icon: keyof typeof icons }) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div style={{display:'flex'}}><HeadListeExportButton icon={<Icon name={icon} color={colors.grey[400]}/>} {...restProps} /></div>;
};
const meta = {
  title: 'Atom/HeadListeExportButton',
  component: HeadListeExportButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof HeadListeExportButton>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    label: 'Exporter',
    icon: 'ArrowBottomDivide',
  },
};
