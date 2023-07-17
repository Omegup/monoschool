type Element = {
  icon: JSX.Element;
  label: string;
  amount: string;
};
export interface NowadayStatisticProps {
  label: string;
  items: [Element,Element];
  
}
