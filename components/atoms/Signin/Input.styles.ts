import { colors } from '@omegup-school/ui-atoms/colors';
import { spacing, borders } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';

export const useOutlinedInputStyles = createUseStyles({
  root: {
    border: [borders.b2, 'solid', colors.grey[300]],
    borderRadius: borders.r5,
  },
  cc: {
    paddingInline: spacing.s8,
    paddingBlock: spacing.s6,
  },
  lb: {
    display: 'flex',
    alignItems: 'center',
    paddingInline: spacing.s8,
  },
  label: {
    ...styles.paragraph_xSmall_semiBold,
    color: colors.grey[400],
    position: 'absolute',
    backgroundColor: colors.background.default,
    paddingInline: spacing.s2,
    borderStartStartRadius: borders.r5,
    borderStartEndRadius: borders.r5,
  },
  input: {
    ...styles.paragraph_medium_semiBold,
    '&::placeholder': {
      color: colors.grey[400],
    },
    color: colors.dark.default,
    border: 'none',
    outline: 'none',
    width: '100%',
  },
});
