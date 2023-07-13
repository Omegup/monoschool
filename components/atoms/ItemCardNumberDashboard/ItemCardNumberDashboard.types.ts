import { ReactNode } from 'react';

export interface ItemCardNumberDashboardProps {
  variant:'blue'|'headLine'|'light';
  children:ReactNode;
  TextNumber:JSX.Element;
}

export interface ControlledItemCardNumberDashboardProps extends ItemCardNumberDashboardProps{
  onClick:(event:MouseEvent)=>void
}