import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { SideBarProps } from './SideBar.types';


type Sizes = readonly [
  `$${SideBarProps['size']}>$container>&`,
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
  sideBarButton: {
    position:"absolute",
    right: -15,
    top:20,

  },
  container: {
    width:"fit-content",
    display: 'inline-flex',
    padding: spacing.s5,
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.s3,
    borderRadius: borders.r5,
    background:colors.background.default,
    boxShadow: ' 0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    position:"relative"
  },
  labelText: {},
  square: {},
});
