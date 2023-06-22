export interface HeaderCellTableProps {
  label : string ;
  isSortable ?: boolean;
  onSort ?: (sort : 'asc' | 'desc' | 'none') => void;
}