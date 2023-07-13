import { SideBarProps } from './SideBar.types';
import {
  ButtonSideBar,
  HeaderSideBar,
  SideBarContainer,
  Text,
} from '@omegup-school/ui-atoms';
export const SideBar = (props: SideBarProps) => {
  const {
    children,
    title,
    isCollopsed,
    searchIcon,
    logo,
    iconButtonCollopsed,
    iconButtonNotCollopsed,
    collapseSidebar,
    onClickLogo,
    onClickSearsh,
  } = props;

  return (
    <SideBarContainer
      isCollopsed={false}
      buttonSideBar={
        <ButtonSideBar
          iconButtonCollopsed={iconButtonCollopsed}
          iconButtonNotCollopsed={iconButtonNotCollopsed}
          collapseSidebar={collapseSidebar}
          isCollopsed={isCollopsed}
        />
      }
    >
      <HeaderSideBar
        onClickLogo={onClickLogo}
        title={<Text variant={'paragraph_medium_semiBold'} text={title} />}
        logo={logo}
        search={<>"SearchBar"</>}
        searchIcon={searchIcon}
        onClickSearsh={onClickSearsh}
        isCollopsed={isCollopsed}
      />
      {children}
    </SideBarContainer>
  );
};
