import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../../common/styles';
import { FilterCheckBoxProps } from './FilterCheckBox.types';


type Sizes = readonly [
  `$${FilterCheckBoxProps['size']}>$container>&`,
  { width: string; height: string }
];
const checkboxSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.checkbox).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
);

export const useFilterCheckBoxStyles = createUseStyles({
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
    display: 'flex',
    borderRadius: borders.r5,
    '& > $input:checked + $container': {

      color: colors.light[500],
      '& $square path': {
        fill: colors.light[500],
      },
      '& $tick': {
        color: colors.blue[500],
        opacity: 1,
      },
    },
    '&:focus': {
      outline: 'none'
    },

    '&:hover > $input:checked + $container': {
      '& $tick': {
        color: colors.blue[600],
        opacity: 0.6,
      },
    },
    '&:hover > $input:not(:checked) + $container': {
      color: colors.blue[500],
      '& $tick': {
        opacity: 0.4,
      },
    },
    '&:active': {
      '&:hover > $input:checked + $container': {
        '& $tick': {
          opacity: 0,
        },
      },
      '&:hover > $input:not(:checked) + $container': {
        '& $tick': {
          opacity: 1,
        },
      },
      '& > $input:not(:checked) + $container': {
        '& $tick': {
          opacity: 0,
        },
      },
    },
  },
  checkbox: {
    ...checkboxSizes,
    display: 'block',
    position: 'relative',
    '&>*': {
      position: 'absolute',
    },
  },
  tick: {
    opacity: 0,
  },
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
  image:{
    borderRadius: "50%",
    display: 'block',
    position: 'relative',
    width:widths.image.small,
    height:widths.image.small,
 
  },
  labelText: {
    ...styles.paragraph_small_regular,
  },
  square: {
    color: colors.grey[300],
  },
});
