import { ControlledFilterCheckBoxProps } from "../FilterCheckBox/FilterCheckBox.types";

export type SubFilterMenuProps = {
  label: string;
  size: 'large' | 'medium' | 'small';
  showImage:boolean;
  child:ControlledFilterCheckBoxProps[]
  SearchBar:JSX.Element
};
