import { colors } from '@omegup-school/ui-atoms/colors'
import { borders, spacing } from '@omegup-school/ui-atoms/sizes'
import { createUseStyles } from 'react-jss'
import { styles } from '../common/styles'

export const useStyles = createUseStyles({
  solid: {},
  border: {},
  underline: {},
  elevation: {},
  flat: {},
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
  flexDirectionright: { flexDirection: 'row-reverse' },
  flexDirectionbottom: { flexDirection: 'column-reverse' },
  flexDirectiontop: { flexDirection: 'column' },
  flexDirectionleft: { flexDirection: 'row' },
  label: {
    color: colors.background.default,
    backgroundColor: colors.blue[500],
    padding: spacing.s4,
    borderRadius: borders.r5,
  },
  trianglebottom: {
    borderStyle: 'solid',
    borderWidth: '0 5px 5px',
    borderColor: [colors.blue[500], 'transparent'],
  },
  triangletop: {
    borderStyle: 'solid',
    borderWidth: '5px 5px 0',
    borderColor: [colors.blue[500], 'transparent'],
  },
  triangleleft: {
    borderStyle: 'solid',
    borderWidth: '5px 0 5px 5px',
    borderColor: ['transparent', 'transparent', 'transparent', colors.blue[500]],
  },
  triangleright: {
    borderStyle: 'solid',
    borderWidth: '5px 5px 5px 0',
    borderColor: ['transparent', colors.blue[500], 'transparent', 'transparent'],
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
})
