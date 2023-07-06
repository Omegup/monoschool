import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
const keys = Object.keys(colorsStyles) as (keyof typeof colorsStyles)[];
const colors = keys.map((k) => ({
  [k]: { color: colorsStyles[k] },
})) 
export const useTextStyles = createUseStyles({ ...styles, ...colors });
