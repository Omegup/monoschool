import { widths } from '@omegup-school/ui-configs/sizes';
import { ArrowDownSquare } from './ArrowDownSquare';
import { IconProps } from './Icons.types';

export const ArrowUpSquare = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,

}: IconProps) => {
  return (
   <ArrowDownSquare  width={width}
   height={height} bold={bold} color={color} />
  );
};
