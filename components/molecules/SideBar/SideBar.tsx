import { SideBarProps } from './SideBar.types';
import {
  ButtonSideBar,
  HeaderSideBar,
  SideBarContainer,Text
} from '@omegup-school/ui-atoms';
export const SideBar = (props: SideBarProps) => {
  const {
    children,
    titre,
    isCollopsed,
    SearchIcon,
    logo,
    LeftCollopsedIcon,
    RightCollopsedIcon,
  } = props;

  return (
    <SideBarContainer
      isCollopsed={false}
      buttonSideBar={
        <ButtonSideBar
          LeftCollopsedIcon={LeftCollopsedIcon}
          RightCollopsedIcon={RightCollopsedIcon}
          onClick={() => {}}
          isCollopsed={isCollopsed}
        />
      }
    >
      <HeaderSideBar
        logoOnClick={() => {}}
        title={<Text variant={'paragraph_medium_semiBold'} text={titre}/>}
        logo={logo}
        search={<>"SearchBar"</>}
        searchIcon={SearchIcon}
        onClick={() => {}}
        isCollopsed={isCollopsed}
      />
      {children}
    </SideBarContainer>
  );
};
