import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../../common/styles';
import { FilterProps } from './Filter.types';

type Sizes = readonly [
  `$${FilterProps['size']}>$container>&`,
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
    margin: 0,
    borderRadius: borders.r5,
    border: 'none',
    outline: 'none',
    padding: spacing.s4,
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
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.s4,
    padding: '8px',
    justifyContent: 'space-between',
  },
  labelText: {},
  square: {},
});
