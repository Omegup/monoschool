import { rotation, widths } from '@omegup-school/ui-atoms/sizes';
import { ArrowDown } from './ArrowDown';
import { IconProps } from './Icons.types';

export const ArrowLeft = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <ArrowDown  width={width}
    height={height} bold={bold} color={color} rotation={rotation.left} />
  );
};
