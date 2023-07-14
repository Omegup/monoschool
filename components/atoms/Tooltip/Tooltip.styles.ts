import { colors } from '@omegup-school/ui-configs/colors'
import { borders, spacing } from '@omegup-school/ui-configs/sizes'
import { createUseStyles } from 'react-jss'
import { styles } from '../common/styles'
import { TooltipProps } from './Tooltip.types'
import { JssStyle } from 'jss'

const labelUnderlineStyle: Record<TooltipProps['position'], Partial<JssStyle>> = {
  top: { borderBlockEndWidth: borders.b2 },
  right: { borderInlineStartWidth: borders.b2 },
  bottom: { borderBlockStartWidth: borders.b2 },
  left: { borderInlineEndWidth: borders.b2 }
}
const labelSizeStyle: Record<TooltipProps['size'], Partial<JssStyle>> = {
  large: styles.paragraph_medium_regular,
  medium: styles.paragraph_small_regular,
  small: styles.paragraph_xSmall_regular,
}
const triangleStyle: Record<TooltipProps['position'], Partial<JssStyle>> = {
  top: {
    borderBlockStartColor: colors.blue[500],
    borderBlockEndWidth: 0,
  },
  right: {
    borderInlineEndColor: colors.blue[500],
    borderInlineStartWidth: 0,
  },
  bottom: {
    borderBlockEndColor: colors.blue[500],
    borderBlockStartWidth: 0,
  },
  left: {
    borderInlineStartColor: colors.blue[500],
    borderInlineEndWidth: 0,
  }
}
const flexDirection: Record<TooltipProps['position'], Partial<JssStyle>> = {
  top: { flexDirection: 'column' },
  right: { flexDirection: 'row-reverse' },
  bottom: { flexDirection: 'column-reverse' },
  left: { flexDirection: 'row' }
}

export const useStyles = createUseStyles<string, Omit<TooltipProps, 'label' | 'variant'>>({
  container: (props) => ({
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    ...flexDirection[props.position]
  }),
  label: props => ({
    padding: spacing.s4,
    borderRadius: borders.r5,
    ...labelSizeStyle[props.size]
  }),
  solid: {
    color: colors.background.default,
    backgroundColor: colors.blue[500],
  },
  border: {
      color: colors.blue[500],
      border: ['solid', borders.b2, colors.blue[500]],
      backgroundColor: colors.background.default,
  },
  underline: (props) => ({
      color: colors.blue[500],
      border: ['solid', borders.b2, colors.blue[500]],
      display: 'inline-block',
      borderWidth: 0,
      borderRadius: borders.r5,
      backgroundColor: colors.background.default,
      ...labelUnderlineStyle[props.position]
  }),
  flat: {
      color: colors.blue[500],
      border: 'none',
      backgroundColor: colors.blue[100],
  },
  triangle: props => ({
    border: ['solid', borders.b10, 'transparent'],
    ...triangleStyle[props.position]
  }),
})
