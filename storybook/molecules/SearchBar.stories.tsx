import type { Meta, StoryObj } from '@storybook/react';

import * as icons from '@omegup-school/ui-assets/icons';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
import {
  ControllerSearchBarProps,
  SearchBar
} from '@omegup-school/ui-molecules/internal/SearchBar';
import { Icon } from './Icon';

const Demo = ({
  startIcon,
  clearIcon,
  ...restProps
}: Omit<ControllerSearchBarProps, 'firstIcon' | 'clearIcon'> & {
  startIcon: keyof typeof icons;
  clearIcon: keyof typeof icons;
}) => {
  return (
    <SearchBar
      startIcon={<Icon name={startIcon} color={colorsStyles['grey_500']} />}
      clearIcon={<Icon name={clearIcon} color={colorsStyles['grey_500']} />}
      {...restProps}
    />
  );
};
const meta = {
  title: 'Atom/SearchBar',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {
    startIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    clearIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    variant: {
      control: 'select',
      options: ['NavSearchBar', 'FilterSearchBar'],
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    variant: 'FilterSearchBar',
    startIcon: 'SearchStatus',
    clearIcon: 'Close',
    displayClearIcon: true,
    value: 'hk',
    placeholder: 'Recherche',
    disabled: false,
  },
};
