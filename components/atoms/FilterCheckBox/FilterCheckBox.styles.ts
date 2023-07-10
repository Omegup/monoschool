import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { widths } from '@omegup-school/ui-configs/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';


export const useFilterCheckBoxStyles = createUseStyles({
  input: {
    clip: 'rect(0 0 0 0)',
    position: 'absolute',
  },
  label: {
    display: 'flex',
    borderRadius: borders.r5,
    color:colors.grey[300],
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
    padding:spacing.s4,
    cursor: 'pointer',
  },
  image: {
    borderRadius: '50%',
    display: 'block',
    position: 'relative',
    width: widths.avatar.small,
    height: widths.avatar.small,
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
});
