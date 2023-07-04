export type SearchBarProps = {
  size: 'large' | 'medium' | 'small';
  displayClose: boolean;
  placeholder: string;
  icon: JSX.Element;
  closeIcon:JSX.Element;
  inputType:string;
};
export interface ControlledSearchBarProps extends SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}
