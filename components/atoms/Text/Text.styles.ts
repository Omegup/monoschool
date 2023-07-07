import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
const keys = Object.keys(colorsStyles) as (keyof typeof colorsStyles)[];
const colors = () => {
  let obj: { [k in keyof typeof colorsStyles]: { color: string } } = {}! as {
    [k in keyof typeof colorsStyles]: { color: string };
  };
  keys.forEach((k) => (obj[k] = { color: colorsStyles[k] }));
  return obj;
};
export const useTextStyles = createUseStyles({ ...styles, ...colors() });
