import { colors } from '@omegup-school/ui-atoms/colors'
import { borders, spacing } from '@omegup-school/ui-atoms/sizes'
import { createUseStyles } from 'react-jss'
import { styles } from '../common/styles'

export const useStyles = createUseStyles({
  solid: {},
  border: {
    '& $label': {
      color: colors.blue[500],
      border: ['solid', borders.b2, colors.blue[500]],
      backgroundColor: colors.background.default,
    },
  },
  underline: {
    '& $label': {
      color: colors.blue[500],
      border: ['solid', borders.b2, colors.blue[500]],
      display: 'inline-block',
      borderWidth: 0,
      borderRadius: borders.r5,
      backgroundColor: colors.background.default,
    },
    '& $top $label': {
      borderBlockEndWidth: borders.b2,
    },
    '& $right $label': {
      borderInlineStartWidth: borders.b2,
    },
    '& $bottom $label': {
      borderBlockStartWidth: borders.b2,
    },
    '& $left $label': {
      borderInlineEndWidth: borders.b2,
    },

  },
  flat: {
    '& $label': {
      color: colors.blue[500],
      border: 'none',
      backgroundColor: colors.blue[100],
    },
  },
  large: {
    '& $label': {
      ...styles.paragraph_medium_regular
    }
  },
  medium: {
    '& $label': {
      ...styles.paragraph_small_regular
    }
  },
  small: {
    '& $label': {
      ...styles.paragraph_xSmall_regular
    }
  },
  disabled: {},
  enabled: {},
  container: {
  },
  flex: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',

  },
  triangle: {
    borderStyle: 'solid',
  },
  top: {
    flexDirection: 'column',
    '& > $triangle': {
      borderWidth: [borders.b10, borders.b10, 0],
      borderColor: [colors.blue[500], 'transparent'],
    },
  },
  right: {
    flexDirection: 'row-reverse',
    '& > $triangle': {
      borderWidth: [borders.b10, borders.b10, borders.b10, 0],
      borderColor: ['transparent', colors.blue[500], 'transparent', 'transparent'],
    }
  },
  bottom: {
    flexDirection: 'column-reverse',
    '& > $triangle': {
      borderWidth: [0, borders.b10, borders.b10],
      borderColor: [colors.blue[500], 'transparent'],
    }
  },
  left: {
    flexDirection: 'row',
    '& > $triangle': {
      borderWidth:  [borders.b10, 0, borders.b10, borders.b10],
      borderColor: ['transparent', 'transparent', 'transparent', colors.blue[500]],
    }
  },
  label: {
    color: colors.background.default,
    backgroundColor: colors.blue[500],
    padding: spacing.s4,
    borderRadius: borders.r5,
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
})
