import { useStyles } from './Backdrop.styles'

export const Backdrop = () => {
  const classes = useStyles()

  return (
    <div className={classes.backdrop}>
    </div>
  )
}
