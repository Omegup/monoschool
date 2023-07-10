import { ArrowDownSecond, ArrowUpSecond } from '@omegup-school/ui-assets';
import { useContainerStateSelector } from '../contexts/pointer';
import { useStyles } from './HeaderCellIcons.styles';
import { colors } from '@omegup-school/ui-configs/colors';

export const HeaderCellIcons = ({ sortType }: { sortType: 'asc' | 'desc' | null }) => {
  const containerStateSelector = useContainerStateSelector();

  const classes = useStyles({theme: {containerStateSelector}});

  return (
    <div className={`${classes.cellSortIcon}`}>
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
  )
}
