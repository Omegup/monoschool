export type SearchBarProps = {
  size: 'large' | 'medium' | 'small';
  style:'solid' | 'border' | 'flat' | 'text';
  displayClose: boolean;
  label: string;
  Icon:JSX.Element,
};
export interface ControlledSearchBarProps extends SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}