import { Column } from '../Column';
import { NakedCheckBox } from '../Internals';
import { joinClassNames } from '../common/utils';
import { ContainerStateContext } from '../contexts/pointer';
import { useTableLineStyles } from './TabLine.styles';
import { TableLineProps } from './TabLine.types';
export const TableLine = ({ row, isSelected, setIsSelected, isFullWidth, disabled = false }: TableLineProps) => {

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
        <Column Column={<NakedCheckBox variant={'cell'} checked={isSelected} onChange={toggle}  {...{ disabled }} />} />
        {row.map((column, index) => column)}
      </ContainerStateContext.Provider>
    </div>
  )
}
