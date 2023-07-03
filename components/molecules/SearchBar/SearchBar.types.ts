export type SearchBarProps = {
  size: 'large' | 'medium' | 'small';
  style:'solid' | 'border' | 'flat' | 'text';
  displayClose: boolean;
  label: string;
  Icon:({color, width}:{color:string, width:string})=>JSX.Element,
};
export interface ControlledSearchBarProps extends SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}