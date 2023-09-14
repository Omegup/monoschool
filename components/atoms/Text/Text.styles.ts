import { createUseStyles } from 'react-jss';
import { styles } from '../common/styles';
import { colorsStyles } from '@omegup-school/ui-configs/colors';
import { TextProps } from './Text.types';
import { heights } from '@omegup-school/ui-configs/sizes';
const keys = Object.keys(colorsStyles) as (keyof typeof colorsStyles)[];
const colors = () => {
  let obj: { [k in keyof typeof colorsStyles]: { color: string } } = {} as {
    [k in keyof typeof colorsStyles]: { color: string };
  };
  keys.forEach((k) => (obj[k] = { color: colorsStyles[k] }));
  return obj;
};
const ellipsisStyle = {
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
};
const makeEllipsis = (ellipsis: number | undefined) => ({
  ...ellipsisStyle,

  '-webkit-line-clamp': ellipsis || '',
});
export const useTextStyles = createUseStyles({
  textStyle: {
    lineHeight: ({ lineHeight }: Partial<TextProps>) =>
      lineHeight ? `${heights.lineHieght[lineHeight]}px` : '',
  },
  ellipsisText: ({ ellipsis }: Partial<TextProps>) => makeEllipsis(ellipsis),
  ...styles,
  ...colors(),
});
