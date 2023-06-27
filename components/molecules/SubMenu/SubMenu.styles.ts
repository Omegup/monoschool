import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { SubMenuProps } from './SubMenu.types';

type Sizes = readonly [
  `$${SubMenuProps['size']}>$container>&`,
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
  children: {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "gap": "5px"
  },
  container: {
    "display": "inline-flex",
    "padding": "10px",
    "flexDirection": "column",
    "alignItems": "flex-start"
  }
  , parentName: {
    "color": colors.grey[300],
    "fontSize": "12px",
    "fontFamily": "Poppins",
    "fontWeight": "700",
    "letterSpacing": "0.12px",
    "textTransform": "uppercase"
  }

});
