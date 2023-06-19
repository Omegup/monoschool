import { useTableLineStyles } from './TabLine.styles';
import { TableLineProps } from './TabLine.types';
export const TableLine = ({ row, isSelected , isFullWidth }: TableLineProps) => {
  const classes = useTableLineStyles();
  let appliedClasses = [classes.tableLine];
  isSelected && appliedClasses.push(classes.tableLineSelected);
  isFullWidth && appliedClasses.push(classes.tableLineFullWidth);
  return (
    <div className={appliedClasses.join(' ')}>
      {row.map((column, index) => column)}
    </div>
  )
}
