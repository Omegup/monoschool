import { useColumnStyles } from './Column.styles';
import { ColumnProps } from "./Column.types";

export const Column = ({
  Adornment,
  currencyFormat,
  text = "",
}: ColumnProps) => {
  const classes = useColumnStyles();
  const cellText = currencyFormat ? currencyFormat(text) : text;
  return (
    <div className={classes.columnContainer}>
      <span className={classes.startAdornment}>
        {Adornment?.start}
      </span>
      <div className={classes.cellContainer}>
        {<p className={classes.cellText}>{cellText}</p>}
      </div>
      <span className={classes.endAdornment} >
        {Adornment?.end}
      </span>
    </div>
  )
}
