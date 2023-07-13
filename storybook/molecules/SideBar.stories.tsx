import type { Meta, StoryObj } from '@storybook/react';

import { SideBar, SideBarProps } from '@omegup-school/ui-molecules';
import * as icons from '@omegup-school/ui-assets/icons';
import { Icon } from './Icon';

const Demo = ({
  LeftCollopsedIcon,
  logo,
  SearchIcon,
  RightCollopsedIcon,
  ...restProps
}: Omit<
  SideBarProps,
  'LeftCollopsedIcon' | 'logo' | 'SearchIcon' | 'RightCollopsedIcon'
> & {
  LeftCollopsedIcon: keyof typeof icons;
  logo: keyof typeof icons;
  SearchIcon: keyof typeof icons;
  RightCollopsedIcon: keyof typeof icons;
}) => {
  return (
    <SideBar
      {...restProps}
      LeftCollopsedIcon={<Icon name={LeftCollopsedIcon} />} 
      logo={<Icon name={logo} />} 
      SearchIcon={<Icon name={SearchIcon} />} 
      RightCollopsedIcon={<Icon name={RightCollopsedIcon} />}
      children={[]}
    />
  );
};
const meta = {
  title: 'molecules/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    LeftCollopsedIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    logo: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    SearchIcon: {
      control: 'select',
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    RightCollopsedIcon: {
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
    titre: 'omega up',
    LeftCollopsedIcon: 'ArrowCircleLeft',
    logo: 'Logo',
    SearchIcon: 'SearchStatus',
    RightCollopsedIcon: 'ArrowCircleRight',
  },
};
