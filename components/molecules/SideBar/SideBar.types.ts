import { ReactNode } from 'react';
import { ControlledButtonSideBarProps } from '@omegup-school/ui-atoms/ButtonSideBar/ButtonSideBar.types';
import { ControlledHeaderSideBarProps } from '@omegup-school/ui-atoms/HeaderSideBar';
import { SideBarContainerProps } from '@omegup-school/ui-atoms';

export type SideBarProps = Omit<SideBarContainerProps, 'buttonSideBar'> &
  ControlledButtonSideBarProps &
  Omit<ControlledHeaderSideBarProps, 'search'|'title'>&{
    title:string
  } ;
