import { useColumnStyles } from './Column.styles';
import { ColumnProps } from "./Column.types";

export const Column = ({
  Column,
}: ColumnProps) => {
  const classes = useColumnStyles();
  return (
    <div className={classes.columnContainer}>
      {Column}
    </div>
  )
}
