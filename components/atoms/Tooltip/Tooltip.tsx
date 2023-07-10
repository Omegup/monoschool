import { useStyles } from './Tooltip.styles'

export const Tooltip = ({ size, variant, position, label }: any) => {
  const classes = useStyles({ position, size })

  return (
    <span className={classes.container}>
      <span className={`${classes[variant]} ${classes.label}`}>{label}</span>
      <span className={classes.triangle}></span>
    </span>
  )
}
