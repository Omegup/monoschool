import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing, widths } from '@omegup-school/ui-atoms/sizes';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ChipsProps } from './Chips.types';

type Sizes = readonly [
  `$${ChipsProps['size']}>$container>&`,
  { width: string; height: string }
];
const chipsSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.chips).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
);
console.log(styles)

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
    
  },Essential:{
  ...chipsSizes,
  },
  Close:{
  ...chipsSizes,

  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});
