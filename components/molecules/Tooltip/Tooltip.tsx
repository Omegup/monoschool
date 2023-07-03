import { useStyles } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types'

export const Tooltip = ({ size, style, position, label }: TooltipProps) => {
  const classes = useStyles()
  console.log(classes)
  return (
    <span className={`${classes.container} ${classes[`flexDirection${position}`]} ${classes[style]} ${classes[size]}`}>
        <span className={classes.label}>{label}</span>
        <span className={classes[`triangle${position}`]}>
      </span>
    </span>
  )
}
