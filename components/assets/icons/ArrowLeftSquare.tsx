import { rotation, widths } from '@omegup-school/ui-atoms/sizes';
import { ArrowDownSquare } from './ArrowDownSquare';

export const ArrowLeftSquare = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <ArrowDownSquare  width={width}
    height={height} bold={bold} color={color} rotation={rotation.left} />
  );
};
