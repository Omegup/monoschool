import { useStyles } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types'

export const Tooltip = ({ size, variant, position, label }: TooltipProps) => {
  const classes = useStyles({ position, size })

  return (
    <span className={classes.container}>
      <span className={`${classes[variant]} ${classes.label}`}>{label}</span>
      <span className={classes.triangle}></span>
    </span>
  )
}
