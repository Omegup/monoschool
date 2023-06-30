
export type TableLineProps<T> = {
  row:   {[key in keyof T] : React.ReactNode} ;
  isSelected: boolean;
  setIsSelected: (isSelected: boolean) => void;
  isFullWidth: boolean;
  disabled?: boolean;
  isSelectable?: boolean;
};