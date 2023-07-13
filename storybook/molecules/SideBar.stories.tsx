import type { Meta, StoryObj } from '@storybook/react';

import { SideBar, SideBarProps } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';

const Demo = ({
  iconButtonCollopsed,
  logo,
  SearchIcon,
  iconButtonNotCollopsed,
  ...restProps
}: Omit<
  SideBarProps,
  'iconButtonCollopsed' | 'logo' | 'SearchIcon' | 'iconButtonNotCollopsed'
> & {
  iconButtonCollopsed: keyof typeof icons;
  logo: keyof typeof icons;
  SearchIcon: keyof typeof icons;
  iconButtonNotCollopsed: keyof typeof icons;
}) => {
  return (
    <SideBar
      {...restProps}
      iconButtonCollopsed={<Icon name={iconButtonCollopsed}  />} 
      logo={<Icon name={logo} />} 
      searchIcon={<Icon name={SearchIcon} />} 
      iconButtonNotCollopsed={<Icon name={iconButtonNotCollopsed} />}
      children={[]}
    />
  );
};
const meta = {
  title: 'molecules/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    iconButtonNotCollopsed: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    logo: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    searchIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    iconButtonCollopsed: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  render: Demo,
  args: {
    isCollopsed: true,
    title: 'omega up',
    iconButtonCollopsed: 'ArrowCircleRight',
    iconButtonNotCollopsed: 'ArrowCircleLeft',
    logo: 'Logo',
    SearchIcon: 'SearchStatus',
  },
};
