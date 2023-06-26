import { useSelectStyles } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types'

export const Tooltip = ({ size, style, disabled, label }: TooltipProps) => {
  const classes = useSelectStyles(),
    disabledClass = classes[disabled ? 'disabled' : 'enabled']
  return (
    <span className={classes.container}>
        <span className={classes.label}>{label}</span>
        <span className={classes.triangle}>
      </span>
    </span>
  )
}
