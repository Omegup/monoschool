import { MouseEvent } from 'react';

export interface CardNumberDashboardProps {
  label: string;
  icon:JSX.Element;
  number:number;
  onClick:(event: MouseEvent) => void;
}
export interface ControlledCardNumberDashboardProps { 
  items:[CardNumberDashboardProps,CardNumberDashboardProps,CardNumberDashboardProps];
}