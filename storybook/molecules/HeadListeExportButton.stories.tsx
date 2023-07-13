import type { Meta, StoryObj } from '@storybook/react';
import { HeadListeExportButton,ControlledHeadListeExportButtonProps } from '@omegup-school/ui-molecules/internal';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';

const Demo = ({
  icon,
  ...restProps
}: Omit<ControlledHeadListeExportButtonProps, 'icon'> & { icon: keyof typeof icons }) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <HeadListeExportButton icon={<Icon name={icon} />} {...restProps} />;
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
    label: 'Text Description',
    icon: 'Subtitle',
  },
};
