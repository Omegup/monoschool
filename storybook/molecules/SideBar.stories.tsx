import type { Meta, StoryObj } from '@storybook/react';

<<<<<<< HEAD
import { SideBar, SearchBar, SubMenu } from '@omegup-school/ui-molecules';
import { Close, SearchStatus, Square, Tick, UserTick } from '@omegup-school/ui-assets';
=======
import { SideBar } from '@omegup-school/ui-molecules';
import { SearchStatus } from '@omegup-school/ui-assets';
>>>>>>> NDI-29-Side-Bar
import { Logo } from '@omegup-school/ui-assets';
import { ArrowCircleLeft, ArrowCircleRight } from '@omegup-school/ui-assets';

const meta = {
  title: 'molecule/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;
const isCollopsed=false;
export const Primary: Story = {
  args: {
    children: [
     <SubMenu parentName='SubMenu'
      parentId={0}
      size='medium'
      style='solid'
      disabled={false}
      isCollopsed={true}
      items={[
        { icon: <Tick color='red' width='24' height='24' />, label: "Présence des elèves", selected: true, style: "solid", size: "medium", id: 1  },
        { icon: <Square width='24' height='24' />, label: "Rapports des élèves", selected: false, style: "solid", size: "medium", id: 2},
        { icon: <UserTick width='24' height='24' />, label: "Présence des enseigants", selected: false, style: "solid", size: "medium", id: 3  }
      ]}

      isOpened={false}
      value={true} 
      onChange={()=>{} } onBlur={()=>{} }/>


<<<<<<< HEAD

=======
    /*/
>>>>>>> NDI-29-Side-Bar
    ],
    header: {
      onClick: () => {},
      title: 'Omega School',
      Logo: <Logo width={'100%'} />,
<<<<<<< HEAD
      Search: (
        <SearchBar
          value={''}
          onChange={() => {}}
          onBlur={() => {}}
          size={'large'}
          style={'solid'}
          displayClose={false}
          label={'Rechercher'}
          Icon={<SearchStatus width={'100%'} />}
          closeIcon={<Close width={'100%'} />}
        />
      ),
      SearchIcon: SearchStatus,
=======
      Search: <>"SearchBar"</>,
      SearchIcon: <SearchStatus width="100%" />,
>>>>>>> NDI-29-Side-Bar
    },
    button: {
      onChange: () => {},
      onBlur: () => {},
      firstIcon: <ArrowCircleLeft width="100%" />,
      secandIcon: <ArrowCircleRight width="100%" />,
    },
    value: false,
    onChange: () => {},
    onBlur: () => {},
    isCollopsed: true,
  },
};
