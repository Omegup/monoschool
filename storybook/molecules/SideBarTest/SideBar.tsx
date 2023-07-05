import { forwardRef, useState } from 'react';

import { SideBar, SearchBar, SubMenu } from '@omegup-school/ui-molecules';
import { Close, SearchStatus, Square, Tick, UserTick } from '@omegup-school/ui-assets';
import { Logo } from '@omegup-school/ui-assets';
import { ArrowCircleLeft, ArrowCircleRight } from '@omegup-school/ui-assets';

export const SubSideBar = forwardRef((ref: React.Ref<HTMLInputElement>) => {
  const [isCollopsed,SetCollopsed]=useState(true)
  return (
    <SideBar
      value={false}
      onChange={()=>{}}
      onBlur={()=>{}}
      children={[
        <SubMenu
          parentName="SubMenu"
          parentId={0}
          size="medium"
          style="solid"
          disabled={false}
          isCollopsed={isCollopsed}
          items={[
            {
              icon: <Tick color="red" width="24" height="24" />,
              label: 'Présence des elèves',
              selected: true,
              style: 'solid',
              size: 'medium',
              id: 1,
            },
            {
              icon: <Square width="24" height="24" />,
              label: 'Rapports des élèves',
              selected: false,
              style: 'solid',
              size: 'medium',
              id: 2,
            },
            {
              icon: <UserTick width="24" height="24" />,
              label: 'Présence des enseigants',
              selected: false,
              style: 'solid',
              size: 'medium',
              id: 3,
            },
          ]}
          isOpened={false}
          value={true}
          onChange={() => {}}
          onBlur={() => {}}
        />,
      ]}
      header={{ onClick: () => {},
      title: 'Omega School',
      Logo: <Logo width={'100%'} />,
      Search: (
        <SearchBar
        placeholder={"Rechercher"}
        variant="sideBar"
        inputType="text"
        displayClose={ true}
        firstIcon={<SearchStatus width={'100%'} />}
        secondIcon={<Close width={'100%'} />}
        value=""
        onChange={(value) => {console.log(value)}}
        onClick={() => {}}
        />
      ),
      SearchIcon: <SearchStatus width={'100%'} />,}}
      isCollopsed={isCollopsed}
      button={{
      onChange: (isCollopsed) => {console.log(isCollopsed)},
      onBlur: () => {},
      firstIcon: <ArrowCircleLeft width="100%" />,
      secandIcon: <ArrowCircleRight width="100%" />,
    }}
    />
  );
});
