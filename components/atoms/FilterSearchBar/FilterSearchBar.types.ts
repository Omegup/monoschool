import { ReactNode } from "react";

export type FilterSearchBarProps = {
  variant:'filterSearch';
  displayClearIcon: boolean;
  placeholder: string;
  startIcon: JSX.Element;
  clearIcon:JSX.Element;
};

export interface  ControllerFilterSearchBarProps extends FilterSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}