export interface CardNumberDashboardProps {
  label: string;
  children: JSX.Element;
  icon:JSX.Element
  number:string
}

export interface ControlledCardNumberDashboardProps extends CardNumberDashboardProps{
  label: string;
  children: JSX.Element;
  icon:JSX.Element
  checked: boolean;
  onClick:(event:MouseEvent)=>void
}