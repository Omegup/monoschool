import { ControlledFilterButtonProps } from "../FilterButton/Filter.types";

export type FilterMenuProps = {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  child:ControlledFilterButtonProps[]
};
