import { HeaderCellTableProps } from './HeaderCellTable.types';
// import { useStyles } from './HeaderCellTable.styles';
import { Container, HeaderCellIcons, HeaderCellLabel } from '@omegup-school/ui-atoms';

export const HeaderCellTable = ({ label, isSortable: isSortable = false, sortType, onSort }: HeaderCellTableProps) => {
  const sortMap = {
    null: 'asc',
    asc: 'desc',
    desc: null,
  } as const;
  return (
    <Container alignItems='center' onClick={() => onSort(sortMap[`${sortType}`])}>
      <HeaderCellLabel value={label} />
      {isSortable && <HeaderCellIcons sortType={sortType} isHovered={false}/>}
    </Container>
  )
}
