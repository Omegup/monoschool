import { widths ,rotation} from '@omegup-school/ui-atoms/sizes';
import { ArrowDownFirst } from './ArrowDownFirst';
import { IconProps } from './Icons.types';

export const ArrowUpFirst = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,

}: IconProps) => {
  return (
   <ArrowDownFirst  width={width}
   height={height} bold={bold} color={color} rotation={rotation.down} />
  );
};
