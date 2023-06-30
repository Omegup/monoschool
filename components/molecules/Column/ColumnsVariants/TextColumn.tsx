import { useColumnStyles } from "../Column.styles"

export const TextColumn = ({ text }: {
  text: string
}) => {
  const classes = useColumnStyles()
  return (
    <p className={classes.cellText}>{text}</p>
  )
}
