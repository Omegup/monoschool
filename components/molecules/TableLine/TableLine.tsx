import { Column } from '../Column';
import { NakedCheckBox } from '../Internals';
import { joinClassNames } from '../common/utils';
import { ContainerStateContext } from '../contexts/pointer';
import { useTableLineStyles } from './TabLine.styles';
import { TableLineProps } from './TabLine.types';
export const TableLine = ({ row, isSelected,  setIsSelected , isFullWidth }: TableLineProps) => {

  const classes = useTableLineStyles();

  return (
    <div className={
      joinClassNames(
        classes.tableLine,
        isSelected && classes.tableLineSelected,
        isFullWidth && classes.tableLineFullWidth,
      )
    } >
      <ContainerStateContext.Provider value={classes.tableLine}>
        <Column text='' Adornment={
          { start: <NakedCheckBox checked={isSelected} disabled={false} onChange={(event)=>setIsSelected(event.target.value)} /> }
        } />,
        {row.map((column, index) => column)}
      </ContainerStateContext.Provider>
    </div>
  )
}
