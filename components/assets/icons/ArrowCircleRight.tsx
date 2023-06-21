import { rotation, widths } from '@omegup-school/ui-atoms/sizes';
import { ArrowCircleDown } from './ArrowCircleDown';

export const ArrowCircleRight = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <ArrowCircleDown
      width={width}
      height={height}
      bold={bold}
      color={color}
      rotation={rotation.right}
    />
  );
};
