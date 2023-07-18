import type { Meta, StoryObj } from '@storybook/react';

import {
  SearchBar,
  SearchBarProps,
} from '@omegup-school/ui-molecules/internal/SearchBar';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';

const Demo = ({
  startIcon,
  value,
  clearIcon,
  displayClearIcon,
  placeholder,
  variant,
  ...restProps
}:Omit< SearchBarProps,'firstIcon'|'clearIcon'> & {
  variant: 'navBar' | 'sideBar' | 'filterSearch';
  placeholder: string;
  startIcon: keyof typeof icons;
  clearIcon: keyof typeof icons;
  displayClearIcon: true;
  value: string;
}) => {
  return <SearchBar placeholder={placeholder} startIcon={<Icon name={startIcon} />} clearIcon={<Icon name={clearIcon} />} variant={variant} {...restProps} />;
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
      options: ['navBar', 'sideBar', 'filterSearch'],
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    variant: 'navBar',
    startIcon: 'SearchStatus',
    clearIcon: 'Close',
    displayClearIcon: true,
    value: '',
    placeholder: 'Recherche',
  },
};
