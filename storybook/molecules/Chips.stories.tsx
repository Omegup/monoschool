import type { Meta, StoryObj } from '@storybook/react';
import { Close, Add, Essential } from '@omegup-school/ui-assets';
import { Chips, ControlledChipsProps } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';

const Demo = ({
  icon,ClearIcon,
  ...restProps
}: Omit<ControlledChipsProps, 'icon'|'ClearIcon'> & { icon: keyof typeof icons ,ClearIcon:keyof typeof icons}) => {
  return <Chips icon={<Icon name={icon} width='100%'  />}  ClearIcon={<Icon name={ClearIcon} width='100%' />} {...restProps} />;
};

const meta = {
  title: 'Molecules/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['flat', 'border'],
    },
    icon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    ClearIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<Partial<typeof Chips>>;

export default meta;
type Story = StoryObj<typeof Demo>;

const states = {};

export const Border: Story = {
  render: Demo,
  args: {
    label: 'label',
    size: 'medium',
    variant: 'border',
    checked: false,
    disabled: false,
    icon: 'Essential',
    ClearIcon: 'Close',
  },
};
export const Flat: Story = {
  render: Demo,
  args: {
    label: 'label',
    size: 'medium',
    variant: 'flat',
    checked: false,
    disabled: false,
    icon: 'Essential',
    ClearIcon: 'Close',
  },
};
