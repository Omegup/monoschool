export type SearchBarProps = {
  size: 'large' | 'medium' | 'small';
  displayClose: boolean;
  placeholder: string;
  Icon: JSX.Element;
  closeIcon:JSX.Element;
  inputType:string;
};
export interface ControlledSearchBarProps extends SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}
