import { rotation, widths } from '@omegup-school/ui-atoms/sizes';
import { ArrowDownFirst } from './ArrowDownFirst';

export const ArrowRightFirst = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <ArrowDownFirst
      width={width}
      height={height}
      bold={bold}
      color={color}
      rotation={rotation.right}
    />
  );
};
