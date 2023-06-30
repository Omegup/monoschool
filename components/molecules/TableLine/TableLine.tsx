import { CheckBoxColumn, Column } from '../Column';
import { NakedCheckBox } from '../Internals';
import { joinClassNames } from '../common/utils';
import { ContainerStateContext } from '../contexts/pointer';
import { useTableLineStyles } from './TableLine.styles';
import { TableLineProps } from './TableLine.types';
export const TableLine = <T,>({ row, isSelected, setIsSelected, isFullWidth, disabled = false, isSelectable = true }: TableLineProps<T>) => {

  const classes = useTableLineStyles();
  const toggle = () => setIsSelected(!isSelected);
  return (
    <div className={
      joinClassNames(
        classes.tableLine,
        isSelected && classes.tableLineSelected,
        isFullWidth && classes.tableLineFullWidth,
      )
    } onClick={toggle} >
      <ContainerStateContext.Provider value={classes.tableLine}>
        {isSelectable && <Column>
          <CheckBoxColumn
            checked={isSelected}
            onChange={toggle}  
            {...{ disabled }} />
        </Column>}
        {Object.keys(row).map(key => <Column>
          {row[key as keyof T]}
        </Column>)
        }
      </ContainerStateContext.Provider>
    </div>
  )
}
