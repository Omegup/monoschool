import { ControlledFilterCheckBoxProps } from "../FilterCheckBox/FilterFilterCheckBox.types";

export type SubFilterMenuProps = {
  label: string;
  size: 'large' | 'medium' | 'small';
  showImage:boolean;
  child:ControlledFilterCheckBoxProps[]
};
