import { ControlledFilterButtonProps } from "../FilterButton/FilterButton.types";

export type FilterMenuProps = {
  style: 'solid' | 'border' | 'flat' | 'text';
  size: 'large' | 'medium' | 'small';
  child:JSX.Element[]
};
