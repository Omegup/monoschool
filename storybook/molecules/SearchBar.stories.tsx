import type { Meta, StoryObj } from '@storybook/react';

import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from '@omegup-school/ui-atoms/Icon';
import { colors } from '@omegup-school/ui-configs/colors';
import {
  SearchBar,
  SearchBarVariant
} from '@omegup-school/ui-molecules/internal/SearchBar';
import { ChangeEvent, useMemo, useState } from 'react';

const Demo = ({
  startIcon,
  clearIcon,
  variant,
  displayClearIcon,
  placeholder,
}: {
  startIcon: keyof typeof icons;
  clearIcon: keyof typeof icons;
  variant: SearchBarVariant;
  displayClearIcon: boolean;
  placeholder: string;
}) => {

  const [value, setValue] = useState<string>('');

  return (
    <SearchBar
      startIcon={<Icon name={startIcon} color={colors.grey[500]} />}
      clearIcon={<Icon name={clearIcon} color={colors.grey[500]} />}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      onClear={(e) => {
        alert("when we pretend our day ");
        setValue('')
      }}
      {...{ value, variant, displayClearIcon, placeholder }}
    />
  );
};
const meta = {
  title: 'Molecules/SearchBar',
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
    displayClearIcon: {
      control: 'boolean',
      options: [true, false],
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  args: {
    startIcon: 'SearchStatus',
    clearIcon: 'Close',
    variant: 'NavSearchBar',
    displayClearIcon: true,
    placeholder: 'searching...',
  },

};


