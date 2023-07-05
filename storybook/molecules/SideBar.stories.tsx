import type { Meta, StoryObj } from '@storybook/react';

import {
  ButtonSideBar,
  ControlledSideBarProps,
  HeaderSideBar,
  SideBar,
} from '@omegup-school/ui-molecules';
import { SearchStatus } from '@omegup-school/ui-assets';
import { Logo } from '@omegup-school/ui-assets';
import { ArrowCircleLeft, ArrowCircleRight } from '@omegup-school/ui-assets';

const h=(
  <HeaderSideBar
    logoOnClick={() => { console.log("sds") } }
    title={'Omega School'}
    Logo={<Logo width={'100%'} />}
    Search={<>"SearchBar"</>}
    SearchIcon={<SearchStatus width="100%" />}
    onClick={() => { console.log("sds") }}      />
)

type DemoType = ControlledSideBarProps ;
const SideBarDemo = ({
  ...rest
}: DemoType) => {
  return <SideBar {...rest} />
  
}
const meta = {
  title: 'molecule/SideBar',
  component: SideBarDemo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SideBarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  
  args: {
    children: [
    ],
    headerSideBar: h,
    buttonSideBar: (
      <ButtonSideBar
        firstIcon={<ArrowCircleLeft width="100%" />}
        secandIcon={<ArrowCircleRight width="100%" />}
        onChange={() => {}}
        onBlur={() => {}}
       
      />
    ),

    value: false,
    onChange: () => {},
    onBlur: () => {},
    isCollopsed: true,
  },
};
