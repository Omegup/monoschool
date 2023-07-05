import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

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
      ...styles.paragraph_medium_regular,
    },
  },
  medium: {
    '& $label': {
      ...styles.paragraph_small_regular,
    },
  },
  small: {
    '& $label': {
      ...styles.paragraph_xSmall_regular,
    },
  },
  container: {},
  flex: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
  },
  triangle: {
    border: ['solid', borders.b10, 'transparent'],
  },
  top: {
    flexDirection: 'column',
    '& > $triangle': {
      borderBlockStartColor: colors.blue[500],
      borderBlockEndWidth: 0,
    },
  },
  right: {
    flexDirection: 'row-reverse',
    '& > $triangle': {
      borderInlineEndColor: colors.blue[500],
      borderInlineStartWidth: 0,
    },
  },
  bottom: {
    flexDirection: 'column-reverse',
    '& > $triangle': {
      borderBlockEndColor: colors.blue[500],
      borderBlockStartWidth: 0,
    },
  },
  left: {
    flexDirection: 'row',
    '& > $triangle': {
      borderInlineStartColor: colors.blue[500],
      borderInlineEndWidth: 0,
    },
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
});
