import { colors, colorsStyles } from '@omegup-school/ui-configs/colors';
import { createUseStyles } from 'react-jss';

export const useFieldLabelLayoutStyles = createUseStyles({
  container: {
    width: '100%',
    '&>div': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
  },
  spaced: {
    gap: 8,
  },
  condensed: {
    '&>div:first-child': {
      position: 'absolute',
      background: colors.background.default,
      insetBlockStart: -9,
      insetInlineStart: 16,
      zIndex: 1,
    },
    '&:has(input:focus)': {
      '&>div>div:first-child': {
        color: colorsStyles['blue_700'],
      },
    },
  },
});
