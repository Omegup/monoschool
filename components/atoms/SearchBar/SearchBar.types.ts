export type SearchBarProps = {
  variant:'navBar' | 'sideBar' | 'filterSearch';
  displayClearIcon: boolean;
  placeholder: string;
  firstIcon: JSX.Element;
  clearIcon:JSX.Element;
};
export interface ControlledSearchBarProps extends SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}
