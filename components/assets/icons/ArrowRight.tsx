import { rotation, widths } from '@omegup-school/ui-atoms/sizes';
import { ArrowDown } from './ArrowDown';
import { IconProps } from './Icons.types';

export const ArrowRight = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return bold ? (
    
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.6997 5.4919L5.7297 3.52188L2.5197 0.31188C1.83969 -0.35812 0.679688 0.12188 0.679688 1.08188V7.3119V12.9219C0.679688 13.8819 1.83969 14.3619 2.5197 13.6819L7.6997 8.5019C8.5297 7.6819 8.5297 6.3219 7.6997 5.4919Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.41003 16.9201L7.93 10.4001C8.7 9.6301 8.7 8.3701 7.93 7.6001L1.41003 1.08008"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
