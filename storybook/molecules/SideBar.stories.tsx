import type { Meta, StoryObj } from '@storybook/react';

import { SideBar, HeaderSideBar, SearchBar } from '@omegup-school/ui-molecules';
import { SearchStatus } from '@omegup-school/ui-assets';
import { Logo } from '@omegup-school/ui-assets';
const meta = {
  title: 'molecule/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'select', options: ['solid', 'border', 'text', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    style: 'solid',
    children: [],
    header: {
      onChange: () => {},
      onBlur: () => {},
      style: 'text',
      size: 'medium',
      title: 'Omega School',
      Logo: <Logo width={"100%"} />,
      Search:<SearchBar value={''} onChange={()=>{} } onBlur={()=>{} } size={'large'} style={'solid'} displayClose={false} label={'Rechercher'} 
      Icon={SearchStatus }/>,
      SearchIcon:SearchStatus ,
     
    },
    button:{
      onChange: () => {},
      onBlur: () => {},
      size: 'medium',
    },
    value: false,
    onChange: () => {},
    onBlur: () => {},
    isOpened: true,
  },
};
