export interface HeaderCellProps  {
  text : string;
  sortType : 'asc' | 'desc' | null;
};

export interface ControlledHeaderCellProps extends HeaderCellProps {
  onSort : (sort : 'asc' | 'desc' | null) => any;
} ;