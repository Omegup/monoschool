import type { Meta, StoryObj } from '@storybook/react';

import {
  ButtonSideBar,
  HeaderSideBar,
  SideBar,
  SideBarProps,
} from '@omegup-school/ui-molecules';
import { SearchStatus } from '@omegup-school/ui-assets';
import { Logo } from '@omegup-school/ui-assets';
import { ArrowCircleLeft, ArrowCircleRight } from '@omegup-school/ui-assets';


type DemoType = SideBarProps & { isCollopsedS: boolean};

const SideBarDemo = ({
  isCollopsedS,
  ...rest
}: DemoType) => {
 const  headerSideBar= (
    <HeaderSideBar
      logoOnClick={() => { console.log("sds") } }
      title={'Omega School'}
      Logo={<Logo width={'100%'} />}
      Search={<>"SearchBar"</>}
      SearchIcon={<SearchStatus width="100%" />}
      onClick={() => { console.log("sds") }} 
       isCollopsed={isCollopsedS}    />
  )
 const buttonSideBar= (
    <ButtonSideBar
      firstIcon={<ArrowCircleLeft width="100%" />}
      secandIcon={<ArrowCircleRight width="100%" />}
      onChange={() => {}}
      onBlur={() => {}}
      isCollopsed={isCollopsedS}
    />
  )
  return( <SideBar  children={[]} isCollopsed={isCollopsedS} {...{ buttonSideBar, headerSideBar }} />)  
}
const meta = {
  title: 'molecule/SideBar',
  component: SideBarDemo,
  tags: ['autodocs'],
  argTypes: {
 
  }
} satisfies Meta<typeof SideBarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isCollopsedS: true,
  },
};