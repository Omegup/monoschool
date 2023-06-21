import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrangeCircletHorizontal = ({
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
      {bold ? (
        <>
          <path
            d="M10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM16.35 12.1C16.31 12.19 16.26 12.27 16.19 12.34L13.15 15.38C13 15.53 12.81 15.6 12.62 15.6C12.43 15.6 12.24 15.53 12.09 15.38C11.8 15.09 11.8 14.61 12.09 14.32L13.85 12.56H5.35C4.94 12.56 4.6 12.22 4.6 11.81C4.6 11.4 4.94 11.06 5.35 11.06H15.66C15.76 11.06 15.85 11.08 15.95 11.12C16.13 11.2 16.28 11.34 16.36 11.53C16.42 11.71 16.42 11.92 16.35 12.1ZM15.65 8.93H5.35C5.25 8.93 5.15 8.91 5.06 8.87C4.88 8.79 4.73 8.65 4.65 8.46C4.57 8.28 4.57 8.07 4.65 7.89C4.69 7.8 4.74 7.72 4.81 7.65L7.85 4.61C8.14 4.32 8.62 4.32 8.91 4.61C9.2 4.9 9.2 5.38 8.91 5.67L7.16 7.43H15.66C16.07 7.43 16.41 7.77 16.41 8.18C16.41 8.59 16.07 8.93 15.65 8.93Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M16.65 12.8201L13.61 15.86"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.34998 12.8201H16.65"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.34998 9.18L9.38998 6.14001"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.65 9.1799H6.34998"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      )}
    </svg>
  );
};
