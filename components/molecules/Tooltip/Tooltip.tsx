import { Square, Tick } from '@omegup-school/ui-assets'
import { useSelectStyles } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types'

export const Tooltip = ({ size, style, disabled, label }: TooltipProps) => {
  const classes = useSelectStyles(),
    disabledClass = classes[disabled ? 'disabled' : 'enabled']
  return (
    <div
    >
        <span className={classes.container}>{label}</span>
        <span className={classes.triangle}>
      </span>
    </div>
  )
}
