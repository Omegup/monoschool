import { colors } from '@omegup-school/ui-atoms/colors'
import { borders, spacing } from '@omegup-school/ui-atoms/sizes'
import { createUseStyles } from 'react-jss'
import { styles } from '../common/styles'

export const useStyles = createUseStyles({
  solid: {},
  border: {
    '& $label': {
      color: colors.blue[500],
      border: ['solid', 1, colors.blue[500]],
      backgroundColor: colors.background.default,
    },
  },
  underline: {
    '& $label': {
      color: colors.blue[500],
      border: '1px solid transparent',
      display: 'inline-block',
    },
    '& $top $label': {
      background: [
        'linear-gradient(#fff 0 0) padding-box',
        `linear-gradient(180deg, white 80%, ${colors.blue[500]} ) border-box`],
    },
    '& $right $label': {
      background: [
        'linear-gradient(#fff 0 0) padding-box',
        `linear-gradient(270deg, white 95%, ${colors.blue[500]} ) border-box`],
    },
    '& $bottom $label': {
      background: [
        'linear-gradient(#fff 0 0) padding-box',
        `linear-gradient(0deg, white 80%, ${colors.blue[500]} ) border-box`],
    },
    '& $left $label': {
      background: [
        'linear-gradient(#fff 0 0) padding-box',
        `linear-gradient(90deg, white 95%, ${colors.blue[500]} ) border-box`],
    },

  },
  elevation: {
    '& $label': {
      boxShadow: `0 5px 5px 0 ${colors.blue[100]}, 0 5px 15px 0 ${colors.blue[200]}`
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
