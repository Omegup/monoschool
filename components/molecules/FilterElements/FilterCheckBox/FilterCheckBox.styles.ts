import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../../common/styles';

export const useFilterCheckBoxStyles = createUseStyles({
  input: {
    clip: 'rect(0 0 0 0)',
    position: 'absolute',
  },
  label: {
    display: 'flex',
    borderRadius: borders.r5,
    '&:focus': {
      outline: 'none',
    },
    '&:hover > $input:not(:checked) + $container': {
      color: colors.blue[500],
    },
  },
  checkbox: {},
  container: {
    display: 'flex',
    alignItems: 'center',
    color: colors.grey[400],
    gap: spacing.s4,
    '$medium > &': {
      padding: spacing.s4,
      borderRadius: borders.r5,
    },
  },
  image: {
    borderRadius: '50%',
    display: 'block',
    position: 'relative',
    width: widths.image.small,
    height: widths.image.small,
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
});
