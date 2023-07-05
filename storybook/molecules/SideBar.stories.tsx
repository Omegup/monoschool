import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from '@omegup-school/ui-molecules';
import { SearchStatus} from '@omegup-school/ui-assets';
import { Logo } from '@omegup-school/ui-assets';
import { ArrowCircleLeft, ArrowCircleRight } from '@omegup-school/ui-assets';
const meta = {
  title: 'molecule/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    style: 'solid',
    children: [
      /*/"<SubMenu parentName='SubMenu'
      parentId={0}
      size='medium'
      style='solid'
      disabled={false}
      items={[
        { icon: <Tick color='red' width='24' height='24' />, label: "Présence des elèves", selected: true, style: "solid", size: "medium", id: 1 },
        { icon: <Square width='24' height='24' />, label: "Rapports des élèves", selected: false, style: "solid", size: "medium", id: 2, isCollopsed: true },
        { icon: <UserTick width='24' height='24' />, label: "Présence des enseigants", selected: false, style: "solid", size: "medium", id: 3 }
      ]}

      isOpened={false}
      value={true} 
      onChange={()=>{} } onBlur={()=>{} }/>


    /*/],
    header: {
      onClick: () => {},
      title: 'Omega School',
      Logo: <Logo width={"100%"} />,
      Search:<>"SearchBar"</>,
      SearchIcon:<SearchStatus width="100%"/>,
    },
    button:{
      onChange: () => {},
      onBlur: () => {},
      firstIcon:<ArrowCircleLeft width='100%'/>,
      secandIcon:<ArrowCircleRight width='100%'/>,
    },
    value: false,
    onChange: () => {},
    onBlur: () => {},
    isCollopsed: true,
  },
};
