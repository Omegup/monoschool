import { ArrowDownSecond, ArrowUpSecond } from '@omegup-school/ui-assets';
import { useStyles } from './HeaderCellTable.styles';
import { HeaderCellTableProps } from './HeaderCellTable.types';
import { colors } from '@omegup-school/ui-configs/colors';

export const HeaderCellTable = ({ label, isSortable: isSortable = false, sortType, onSort }: HeaderCellTableProps) => {
  const sortMap = {
    null: 'asc',
    asc: 'desc',
    desc: null,
  } as const;
  const classes = useStyles();

  return (
    <div className={classes.cellContainer} onClick={() => onSort(sortMap[`${sortType}`])}>
      <div className={classes.cellLabel}>{label}</div>
      {isSortable && (
        <div className={classes.cellSortIcon}>
          <div className={`${classes.iconContainerTop}  ${sortType && classes.dispalyIcons}`}>
            <ArrowUpSecond
              width='8.75'
              height='8.75'
              color={sortType === 'asc' ? colors.blue[500] : colors.light[600]}
            />
          </div>
          <div className={`${classes.iconContainerDown} ${sortType && classes.dispalyIcons}`}>
            <ArrowDownSecond
              width='8.75'
              height='8.75'
              color={sortType === 'desc' ? colors.blue[500] : colors.light[600]}
            />
          </div>
        </div>
      )}
    </div>
  )
}
