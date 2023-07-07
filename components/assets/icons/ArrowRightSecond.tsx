import { widths, rotation } from '@omegup-school/ui-configs/sizes';
import { ArrowDownSecond } from './ArrowDownSecond';
import { IconProps } from './Icons.types';

export const ArrowRightSecond = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <ArrowDownSecond
      width={width}
      height={height}
      bold={bold}
      color={color}
      rotation={rotation.right}
    />
  );
};
