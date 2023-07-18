import { colors, colorsStyles } from '@omegup-school/ui-configs/colors';
import { heights, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';

export const useFieldLabelLayoutStyles = createUseStyles({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  label: {},
  input: {},
  spaced: {
    gap: spacing.s4,
  },
  condensed: {
    '& $label': {
      position: 'absolute',
      background: colors.background.default,
      insetBlockStart: -heights.lineHieght.small / 2,
      insetInlineStart: spacing.s8,
      zIndex: 1,
    },
  },
});
