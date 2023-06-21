import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const BackwardTenSeconds = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.04004 14.92V9.58009L6.54004 11.2501"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.52002 3.46997L10.5 1"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.41 6.79999C2.3 8.27999 1.60999 10.11 1.60999 12.11C1.60999 17.02 5.59 21 10.5 21C15.41 21 19.39 17.02 19.39 12.11C19.39 7.19999 15.41 3.21997 10.5 3.21997C9.82 3.21997 9.16 3.31002 8.52 3.46002"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 9.58009C13.6 9.58009 14.5 10.4801 14.5 11.5801V12.9301C14.5 14.0301 13.6 14.9301 12.5 14.9301C11.4 14.9301 10.5 14.0301 10.5 12.9301V11.5801C10.5 10.4701 11.4 9.58009 12.5 9.58009Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
