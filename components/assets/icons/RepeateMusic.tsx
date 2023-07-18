import { widths } from '@omegup-school/ui-configs/sizes';

export const RepeateMusic = ({
  width = widths.icon.svg,
  height = widths.icon.svg,
  color = 'currentColor',
}: {
  color?: string;
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    {...{ width, height }}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5 3L16.94 5.34003L8.98999 5.32001C5.41999 5.32001 2.48999 8.25003 2.48999 11.84C2.48999 13.63 3.21998 15.26 4.39998 16.44"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5001 21.0001L8.06006 18.66L16.0101 18.6801C19.5801 18.6801 22.5101 15.75 22.5101 12.16C22.5101 10.37 21.7801 8.74006 20.6001 7.56006"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12H15.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
