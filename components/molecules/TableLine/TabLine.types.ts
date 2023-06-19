import { Column } from "../Column/Column.types";

export type TableLineProps = {
  row: Column[];
  isSelected: boolean;
  isFullWidth: boolean;
};