import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { FilterButtonProps } from './FilterButton.types';

type Sizes = readonly [
  `$${FilterButtonProps['size']}>$container>&`,
  { width: string; height: string }
];
const buttonFilterSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.buttonFilter).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
);

export const useFilterStyles = createUseStyles({
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
    borderRadius: borders.r5,
    border: 'none',
    outline: 'none',
    color: colors.grey[400],
    backgroundColor: colors.background.default,
    gap: spacing.s4,
    cursor: 'pointer',
    '&:active, &:focus, &:hover': {
      backgroundColor: colors.light[300],
      color: colors.blue[500],
      '& $arrow': {
        fill: colors.blue[500],
      },
    },
    '&:active:hover, &:focus:hover': {
      backgroundColor: colors.light[300],
      color: colors.blue[500],
    },
  },
  input: { clip: 'rect(0 0 0 0)', position: 'absolute' },
  arrow: {
    ...buttonFilterSizes,
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.s4,
    padding: '8px',
    justifyContent: 'space-between',
  },
  line: {
    margin:["5px","none"],
    width: 144,
    height: 0,
    border: '0.50px #EBEBEB solid',
  },
  labelText: {
    textAlign: 'left',
    width: '100%',
    
  },
  square: {},
});
