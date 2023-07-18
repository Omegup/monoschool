import { ChangeEvent } from "react";

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
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear: (e:React.MouseEvent<HTMLSpanElement>) => void ;
}
