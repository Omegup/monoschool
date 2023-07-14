export interface CardNumberDashboardProps {
  label: string;
  icon:JSX.Element
  number:string
  onClick:(event:MouseEvent)=>void;
}
export interface ControlledCardNumberDashboardProps { 
  children:CardNumberDashboardProps[];
}