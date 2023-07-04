import { joinClassNames } from "../../common/utils";
import { useColumnStyles } from "../Column.styles";

export const CurrencyColumn = ({
  amount,
  currency = 'DT',
  formatter = (amount: number) => amount.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
  isTotalAmount = false
}: {
  amount: number,
  currency?: string,
  formatter?: (amount: number) => string,
  isTotalAmount?: boolean
}) => {
  const classes = useColumnStyles();
  const formattedAmount = `${formatter(amount)} ${currency}`
  return (
    <p className={joinClassNames(
      isTotalAmount && classes.cellTextBold,
    )} >{formattedAmount}</p>
  )
}

