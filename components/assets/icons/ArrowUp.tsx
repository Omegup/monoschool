import { widths ,rotation} from '@omegup-school/ui-atoms/sizes';
import { ArrowDown} from './ArrowDown';
import { IconProps } from './Icons.types';

export const ArrowUp = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,

}: IconProps) => {
  return (
   <ArrowDown  width={width}
   height={height} bold={bold} color={color} rotation={rotation.down} />
  );
};
