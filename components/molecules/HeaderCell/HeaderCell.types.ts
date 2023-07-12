export interface HeaderCellProps  {
  text : string;
  sortType : 'asc' | 'desc' | null;
  isSortobale ?: boolean;
};

export interface ControlledHeaderCellProps extends HeaderCellProps {
  onSort : (sort : 'asc' | 'desc' | null) => void;
} ;