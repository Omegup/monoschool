import { Column } from "../Column/Column.types";

export type TableLineProps = {
  row: Column[];
  isSelected: boolean;
  setIsSelected: (isSelected: boolean) => void;
  isFullWidth: boolean;
  disabled?: boolean;
};