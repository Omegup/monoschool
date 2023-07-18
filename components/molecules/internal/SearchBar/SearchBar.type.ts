
export type SearchBarProps = {
  variant: 'FilterSearchBar' | 'NavSearchBar';
  startIcon: JSX.Element;
  clearIcon: JSX.Element;
  placeholder: string;
  disabled: boolean;
  displayClearIcon:boolean;
};
export interface ControllerSearchBarProps extends SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}
