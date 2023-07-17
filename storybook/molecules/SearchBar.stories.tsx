import type { Meta, StoryObj } from '@storybook/react';

import {
  SearchBar,
  SearchBarProps,
} from '@omegup-school/ui-molecules/internal/SearchBar';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';

const Demo = ({
  firstIcon,
  value,
  clearIcon,
  displayClearIcon,
  placeholder,
  variant,
  ...restProps
}: SearchBarProps & {
  variant: 'navBar' | 'sideBar' | 'filterSearch';
  placeholder: string;
  firstIcon: keyof typeof icons;
  clearIcon: keyof typeof icons;
  displayClearIcon: true;
  value: string;
}) => {
  return <SearchBar variant={variant} {...restProps} />;
};
const meta = {
  title: 'Atom/SearchBar',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {
    firstIcon: {
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
    firstIcon: 'SearchStatus',
    clearIcon: 'Close',
    displayClearIcon: true,
    value: '',
    placeholder: 'Recherche',
  },
};
