import type { Meta, StoryObj } from '@storybook/react';

import {
  SearchBar,
  SearchBarProps,
} from '@omegup-school/ui-molecules/internal/SearchBar';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';
import { colorsStyles } from '@omegup-school/ui-configs/colors';

const Demo = ({
  startIcon,
  value,
  clearIcon,
  displayClearIcon,
  placeholder,
  variant,
  ...restProps
}:Omit< SearchBarProps,'firstIcon'|'clearIcon'> & {
  variant: 'NavSearchBar' | 'FilterSearchBar';
  placeholder: string;
  startIcon: keyof typeof icons;
  clearIcon: keyof typeof icons;
  displayClearIcon: boolean;
  value: string;
}) => {
  return <SearchBar placeholder={placeholder}  displayClearIcon={displayClearIcon} startIcon={<Icon name={startIcon} color={colorsStyles['grey_500']}/>} clearIcon={<Icon name={clearIcon} color={colorsStyles['grey_500']} />} variant={variant} {...restProps} />;
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
    value: '',
    placeholder: 'Recherche',
  },
};
