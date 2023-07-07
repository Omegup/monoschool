export interface HeaderCellTableProps {
  label : string ;
  sortType : 'asc' | 'desc' | null;
  onSort : (sort : 'asc' | 'desc' | null) => any;
  isSortable ?: boolean;
}