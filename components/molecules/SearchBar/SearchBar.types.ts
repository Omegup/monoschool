export type SearchBarProps = {
  size: 'large' | 'medium' | 'small';
  style:'solid' | 'border' | 'flat' | 'text';
  displayClose: boolean;
  label: string;

};
export interface ControlledSearchBarProps extends SearchBarProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}