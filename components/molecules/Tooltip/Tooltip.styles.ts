import { colors } from '@omegup-school/ui-atoms/colors'
import { borders, spacing } from '@omegup-school/ui-atoms/sizes'
import { createUseStyles } from 'react-jss'
import { styles } from '../common/styles'

export const useSelectStyles = createUseStyles({
  solid: {},
  border: {},
  flat: {},
  text: {},
  large: {},
  medium: {},
  small: {},
  disabled: {},
  enabled: {},
  container: {
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    color: colors.background.default,
    backgroundColor: colors.blue[500],
    padding: spacing.s4,
    borderRadius: borders.r5,
  },
  triangle: {
    borderStyle: 'solid',
    borderWidth: '5px 5px 0',
    borderColor: [colors.blue[500], 'transparent'],
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
})
