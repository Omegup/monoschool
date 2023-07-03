
export const CurrencyColumn = ({
  amount,
  currency = 'DT',
  formatter = (amount: number) => amount.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}: {
  amount: number,
  currency?: string,
  formatter?: (amount: number) => string
}) => {
  const formattedAmount = `${formatter(amount)} ${currency}`
  return (
    <p>{formattedAmount}</p>
  )
}

