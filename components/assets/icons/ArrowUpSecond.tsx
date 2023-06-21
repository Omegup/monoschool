import { widths ,rotation} from '@omegup-school/ui-atoms/sizes';
import { ArrowDownSecond } from './ArrowDownSecond';
import { IconProps } from './Icons.types';

export const ArrowUpSecond = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
   <ArrowDownSecond  width={width}
   height={height} bold={bold} color={color} rotation={rotation.down} />
  );
};
