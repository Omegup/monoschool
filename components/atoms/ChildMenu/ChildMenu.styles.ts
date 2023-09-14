import { colors } from '@omegup-school/ui-configs/colors';
import { borders, spacing } from '@omegup-school/ui-configs/sizes';
import { widths } from '@omegup-school/ui-configs/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ChildMenuProps } from './ChildMenu.types';

type Sizes = readonly [
  `$${ChildMenuProps['size']}>$container>&`,
  { width: string; height: string }
];


export const useChildMenuStyles = createUseStyles({
  solid: {},
  border: {},
  flat: {},
  text: {},
  large: {},
  medium: {},
  small: {},
  disabled: {},
  enabled: {},
  selected: {},
  notSelected: {},
  tablette: {},
  default: {},
  mobile: {
    display: "flex",
    width: "85px",
    padding: "5px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    backgroundColor: colors.blue[500],
    flexShrink: 0
    ,
    '&$selected': {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px"
    },
    '&$notSelected': {
      color: colors.blue[500],
    },
  },
  icon: {
    width: "24px",
    height: "24px",
    '&:hover': {
      cursor: "pointer",
    },
  },
  label: {
    '& label': {
      cursor: "pointer",

    },
  },
  mobileIcon: {
    width: "24px",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
    color: colors.grey[100],
    '&$selected': {
      color: colors.blue[500],
      cursor: "pointer",

    },
  },
  mobileLabel: {
    justifyContent: "center",
    alignItems: "center",
    color: colors.grey[100],
    textAlign: "center",
    fontSize: spacing.s6,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    '&$selected': {
      color: colors.blue[500],
      cursor: "pointer",
    },
  },
  container: {
    display: "inline-flex",
    padding: spacing.s5,
    alignItems: "flex-start",
    gap: '15px',
    cursor: "pointer",
    alignSelf: 'stretch',
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
     
    '&$selected': {
      color: colors.light[500],
      borderRadius: "10px",
      background: colors.blue[500]
    },
    '&$notSelected': {
      color: colors.grey[500],
      '&:hover': {
        color: colors.blue[500],
        borderRadius: "10px",
        background: colors.light[500]
      },
    },
  },
  collapsed:{
  width:'fit-content'
}
  

}

);
