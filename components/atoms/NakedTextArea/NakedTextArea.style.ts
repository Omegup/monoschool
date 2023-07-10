import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { NakedTextAreaProps } from './NakedTextArea.type';

export const useNakedTextAreaStyles = createUseStyles({
  inputContainer: {
    position: 'relative',
    display: 'flex',
    paddingInline: spacing['s3'],
    paddingBlock: spacing['s3'],
    gap: spacing['s2'],
    border: ({ border, borderColor }: Partial<NakedTextAreaProps>) =>
      borderColor
        ? `${border ? spacing[border] : 0}px solid ${colorsStyles[borderColor]}`
        : '',
    borderRadius: borders['r5'],
    opacity: ({ disabled }: Partial<NakedTextAreaProps>) =>
      disabled ? 0.5 : 0.8,
    '&:Before': {
      content: '""',
      position: 'absolute',
      insetBlockEnd: 7.5,
      insetInlineEnd: 7.5,
      width: 3,
      height: 3,
      transform: 'rotate(-45deg)',
      borderBlockEnd: `1px solid ${colorsStyles['grey_400']}`,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      insetBlockEnd: 9.5,
      insetInlineEnd: 9.5,
      width: 7.5,
      height: 7.5,
      transform: 'rotate(-45deg)',
      borderBlockEnd: `1px solid ${colorsStyles['grey_400']}`,
    },
    '&>:first-child': {
      marginBlockStart: ({ startIcon }: Partial<NakedTextAreaProps>) =>
        startIcon ? spacing['s3'] : 0,
    },
    '&>:nth-child(3)': {
      position: 'absolute',
      zIndex: 1,
      paddingInlineEnd: spacing['s5'],
      insetInlineEnd: spacing['s3'],
      insetBlockStart: spacing['s3'],
      marginBlockStart: spacing['s3'],
    },
    '&>textarea': {
      backgroundColor: 'transparent',
      paddingInlinestart: ({ startIcon }: Partial<NakedTextAreaProps>) =>
        startIcon ? 0 : spacing['s5'],
      paddingInlineEnd: ({ endIcon }: Partial<NakedTextAreaProps>) =>
        endIcon ? 0 : spacing['s5'],
      paddingBlock: spacing['s3'],
      color: colorsStyles['dark_default'],

      lineHeight: '24px',
      border: 'none',
      outline: 'none',
      flex: 1,
      fontFamily: 'Poppins',
      '&::-webkit-resizer': {},
      '&::-webkit-scrollbar': { display: 'none' },
    },
    '&:has(textarea:focus)': {
      border: `${spacing.s1}px solid ${colorsStyles['blue_700']}`,
      borderRadius: borders['r5'],
      '&>textarea': {},
    },
  },
  filledInput: {
    border: `${spacing.s1}px solid ${colorsStyles['dark_overline']}`,
    '&>textarea': {},
  },
  disabled: { backgroundColor: colorsStyles['background_default'] },
  ...styles,
});
