import { HeaderCellTable } from "@omegup-school/ui-atoms/HeaderCellTable"
import { ControlledHeaderCellProps } from "./HeaderCell.types"
import { HeaderCellIcons, HeaderCellLabel } from "@omegup-school/ui-atoms";

export const HeaderCell = ({ onSort, sortType, text, isSortobale }: ControlledHeaderCellProps) => {
  const sortMap = {
    null: 'asc',
    asc: 'desc',
    desc: null,
  } as const;

  return (
    <HeaderCellTable onClick={() => onSort(sortMap[`${sortType}`])}>
      <HeaderCellLabel value={text} />
      {isSortobale && <HeaderCellIcons sortType={sortType} />}
    </HeaderCellTable>
  )
}
