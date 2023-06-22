import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';




export const useSelectStyles = createUseStyles({
  solid: {},
  border: {},
  flat: {},
  text: {},
  large: {},
  medium: {},
  small: {},
  disabled: {},
  enabled: {},
  label: {
    '&$large > $container': {
      padding: spacing.s5,
      gap: spacing.s4,
      borderRadius: borders.r5,
      border: [borders.b3,"solid"],
      },
      '&$medium > $container': {
        padding: spacing.s4,
        gap: spacing.s3,
        borderRadius: borders.r5,
        border: [borders.b2,"solid"],
        },
        '&$small > $container': {
          padding: spacing.s3,
          gap: spacing.s2,
          borderRadius: borders.r5,
          border: [borders.b1,"solid"],
          }
  },
  container: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    color:colors.blue[500],
    borderColor:colors.blue[500],
    
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});
