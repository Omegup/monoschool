import { useStyles } from './DataTableDashboardLine.styles';
import { Color, DataTableProps } from './DataTableDashboardLine.types';

export const DataTableDashboardLine = ({ data, type, color }: { color: Color, type: 'header' | 'body', data: DataTableProps[] }) => {
  const classes = useStyles({ theme: { color } });

  return (
    <div className={`${color} ${type === 'body' ? classes.containerBodyLine : classes.containerHeaderLine}`}>
      {data.map((item, index) => (
        <span key={index} className={type === 'body' ? classes.cellBody : classes.cellHeader}>
          {item?.content}
        </span>
      ))}
    </div>
  )
}
