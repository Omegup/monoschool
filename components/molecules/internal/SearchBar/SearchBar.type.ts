import { ChangeEvent } from "react";

export type SearchBarVariant = 'FilterSearchBar' | 'NavSearchBar' ;

export type SearchBarProps = {
  variant: SearchBarVariant;
  startIcon: JSX.Element;
  clearIcon: JSX.Element;
  placeholder: string;
  disabled?: boolean;
  displayClearIcon?:boolean;
};
export interface ControllerSearchBarProps extends SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear: (e:React.MouseEvent<HTMLSpanElement>) => void ;
}
