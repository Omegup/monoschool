import { ContainerStateContext } from '../contexts/pointer';
import { useHeaderCellTableStyles } from './HeaderCellTable.styles';
import { HeaderCellTableProps } from './HeaderCellTable.types';
// import { useStyles } from './HeaderCellTable.styles';

export const HeaderCellTable = ({ onClick, children }: HeaderCellTableProps) => {

  const classes = useHeaderCellTableStyles();
  return (
    <div className={classes.cellTable} onClick={onClick}>
      <ContainerStateContext.Provider value={classes.cellTable}>
        {children}
      </ContainerStateContext.Provider>
    </div>
  )
}
