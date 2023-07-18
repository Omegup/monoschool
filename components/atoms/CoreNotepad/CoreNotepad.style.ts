import { colorsStyles } from '@omegup-school/ui-configs/colors';
import {
  borders,
  heights,
  opacities,
  spacing,
  widths,
} from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { CoreNotepadProps } from './CoreNotepad.type';

export const useCoreNotepadStyles = createUseStyles({
  inputContainer: {
    position: 'relative',
    display: 'flex',
    paddingInline: spacing.s3,
    paddingBlock: spacing.s3,
    gap: spacing.s2,
   
    opacity: ({ disabled }: Partial<CoreNotepadProps>) =>
      disabled ? opacities.o1 : opacities.o2,
    '&>textarea': {
      backgroundColor: 'transparent',
      paddingInlinestart: ({ startIcon }: Partial<CoreNotepadProps>) =>
        startIcon ? 0 : spacing.s5,

    },
    '&:has(textarea:focus)': {
      border: [borders.b4, 'solid', colorsStyles['blue_700']],
    },
  },
  startIcon: {
    marginBlockStart: ({ startIcon }: Partial<CoreNotepadProps>) =>
      startIcon ? spacing.s3 : 0,
  },
  endIcon: {
    position: 'absolute',
    zIndex: 1,
    paddingInlineEnd: spacing.s5,
    insetInlineEnd: spacing.s3,
    insetBlockStart: spacing.s3,
    marginBlockStart: spacing.s3,
  },
  filledInput: {
    border: [borders.b4, 'solid', colorsStyles['dark_overline']],
  },
  disabled: { backgroundColor: colorsStyles['background_default'] },
  ...styles,
});
