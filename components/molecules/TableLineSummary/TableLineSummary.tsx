import { Column } from "../Column";
import { useTableLineSummaryStyles } from "./TableLineSummary.styles";
import { TableLineSummaryProps } from "./TableLineSummary.types"

export const TableLineSummary = <T,>({
  row,
}: TableLineSummaryProps<T>) => {
  const classes = useTableLineSummaryStyles();
  return (
    <div
      className={classes.tableLineSummary}
    >{Object.keys(row).map(key => <Column>
      {row[key as keyof T]}
    </Column>)
      }</div>
  )
}
