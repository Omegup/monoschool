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
console.log(styles);

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
  input: {
    clip: 'rect(0 0 0 0)',
    position: 'absolute',
  },
  label: {
    display: 'inline-flex',

    '&$disabled > $container': {
    opacity:"0.4000000059604645",
    },
   
    '&$large > $container': {
      padding: spacing.s5,
      gap: 7,
      borderRadius: "14px",
      border: [borders.b3, 'solid'],
    },
    '&$medium > $container': {
      padding: spacing.s4,
      gap: spacing.s3,
      borderRadius: 11.2,
      border: [borders.b2, 'solid'],
    },
    '&$small > $container': {
      padding: spacing.s3,
      gap: 5,
      borderRadius: 8.4,
      border: [borders.b1, 'solid'],
    },

    
    '& > $input:not(:checked) + $container': {
      borderColor: colors.background.outline,
      '&:active ': {
        backgroundColor: colors.background.overlay,
      },
    },
    '& > $input:checked + $container': {
      color: colors.blue[500],
      borderColor: colors.blue[500],
      '&:active ': {
        backgroundColor: colors.light[400],
      },
    },
    '&:focus': {
      outline: 'none',
    },
    '&:focus-within:not(:focus) > $input': {
      '& + $container': {
        outlineWidth: borders.b2,
        outlineColor: colors.blue[600],
        outlineStyle: 'solid',
      },
      '&:not(:checked) + $container': {
        outlineColor: colors.blue[600],
      },
    },
    '&:hover > $input:checked + $container': {
      backgroundColor: colors.light[200],
    },
    '&:hover > $input:not(:checked) + $container': {
      backgroundColor: colors.background.secondary,
    },
    
    '&$flat > $input:not(:checked) + $container': {
      borderColor:"transparent"
      },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  Essential: {
    ...chipsSizes,
  },
  Close: {
    ...chipsSizes,
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {},
});
