import { useStyles } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types'

export const Tooltip = ({ size, style, position, label }: TooltipProps) => {
  const classes = useStyles()

  return (
    <span className={`${classes.container} ${classes[style]} ${classes[size]}`}>
      <span className={`${classes.flex} ${classes[position]}`}>
        <span className={classes.label}>{label}</span>
        <span className={`${classes.triangle}`}></span>
      </span>
    </span>
  )
}
