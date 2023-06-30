import { colors } from '@omegup-school/ui-atoms/colors';
import { borders, spacing } from '@omegup-school/ui-atoms/sizes';
import { widths } from '@omegup-school/ui-atoms/sizes/widths';
import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { ChildMenuProps } from './ChildMenu.types';

type Sizes = readonly [
  `$${ChildMenuProps['size']}>$container>&`,
  { width: string; height: string }
];


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
  selected :{ },
  notSelected:{},
  icon: {
    width: "24px",
    height: "24px",
    '&:hover': {
     cursor:"pointer",
   },
  },
  label: {
    fontSize: "16px",
    '&:hover': {
      cursor:"pointer",
    },
  },
  
  container: {
    display: "flex",
    padding: spacing.s5,
    alignItems: "center",
    alignSelf: "stretch",
    gap: "15px",
    '&$selected': {
      color: colors.grey[100]
    },
    '&$notSelected': {
    
      color: colors.grey[500],
    },
    '&:hover': {
      color: colors.blue[500],
      cursor:"pointer",
     },
  
  },
 
}

);
