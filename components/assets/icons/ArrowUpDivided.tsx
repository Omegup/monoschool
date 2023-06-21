import { widths ,rotation} from '@omegup-school/ui-atoms/sizes';
import { ArrowDownDivided} from './ArrowDownDivided';

export const ArrowUpDivided = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,

}: IconProps) => {
  return (
   <ArrowDownDivided  width={width}
   height={height} bold={bold} color={color} rotation={rotation.down} />
  );
};
