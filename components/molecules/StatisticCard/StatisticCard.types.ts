export interface StatisticCardProps {
  data: {
    icon: JSX.Element;
    label: string;
    amount: number;
    percentage: number;
  }[];
  income:string;
  expense:string;
  firstIcon:JSX.Element;
  secandIcon:JSX.Element;

}
export interface ControlledStatisticCardProps extends StatisticCardProps {}
