import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { SubSideBarProps } from './SubSideBar.types';

type Sizes = readonly [
  `$${SubSideBarProps['size']}>$container>&`,
  { width: string; height: string }
];
const SideBarSizes = Object.fromEntries<'', Record<'', Sizes>>(
  Object.entries(widths.checkbox).map(([k, v]) => [
    `$${k}>$container>&`,
    {
      width: v,
      height: v,
    },
  ])
);

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
  input: {},
  label: {},
  checkbox: {},
  tick: {},
  container: {
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    gap: '15px',
  },
  labelText: {},
  square: {},
});
