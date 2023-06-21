import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const BackwardFifteenSeconds = ({
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
        d="M14.46 9.83009H11.4L10.64 12.1201H12.93C13.77 12.1201 14.46 12.8001 14.46 13.6501C14.46 14.4901 13.78 15.1801 12.93 15.1801H10.64"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.04004 15.17V9.83009L6.54004 11.5001"
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
        d="M3.40997 6.79999C2.29997 8.27999 1.60999 10.11 1.60999 12.11C1.60999 17.02 5.59 21 10.5 21C15.41 21 19.39 17.02 19.39 12.11C19.39 7.19999 15.41 3.21997 10.5 3.21997C9.82 3.21997 9.16 3.31002 8.52 3.46002"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
