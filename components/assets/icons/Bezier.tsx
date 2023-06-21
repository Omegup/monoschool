import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const Bezier = ({
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
            d="M18.64 3.72C18.93 4.47 19.65 5 20.5 5C21.6 5 22.5 4.1 22.5 3C22.5 1.9 21.6 1 20.5 1C19.65 1 18.93 1.53 18.64 2.28C18.59 2.27 18.55 2.25 18.5 2.25H14.5V1.5C14.5 0.68 13.82 0 13 0H10C9.18 0 8.5 0.68 8.5 1.5V2.25H4.5C4.45 2.25 4.41 2.27 4.36 2.28C4.07 1.53 3.35 1 2.5 1C1.4 1 0.5 1.9 0.5 3C0.5 4.1 1.4 5 2.5 5C3.35 5 4.07 4.47 4.36 3.72C4.41 3.73 4.45 3.75 4.5 3.75H7.07C5.02 5.27 3.75 7.79 3.75 10.5C3.75 10.67 3.76 10.83 3.78 11H3.5C2.67 11 2 11.67 2 12.5V14.5C2 15.33 2.67 16 3.5 16H5.5C5.72 16 5.92 15.95 6.11 15.86C6.63 15.64 7 15.11 7 14.5V12.5C7 11.67 6.33 11 5.5 11H5.27C5.27 10.97 5.28 10.94 5.28 10.91C5.26 10.77 5.26 10.64 5.26 10.5C5.26 8.03 6.53 5.77 8.52 4.6C8.56 5.37 9.21 6 10 6H13C13.79 6 14.44 5.37 14.49 4.6C16.48 5.77 17.75 8.04 17.75 10.5C17.75 10.64 17.74 10.77 17.73 10.91C17.73 10.94 17.74 10.97 17.74 11H17.5C16.67 11 16 11.67 16 12.5V14.5C16 15.11 16.37 15.64 16.89 15.86C17.08 15.95 17.28 16 17.5 16H19.5C20.33 16 21 15.33 21 14.5V12.5C21 11.67 20.33 11 19.5 11H19.22C19.24 10.83 19.25 10.67 19.25 10.5C19.25 7.79 17.98 5.27 15.93 3.75H18.5C18.55 3.75 18.59 3.73 18.64 3.72Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M3.5 6C4.60457 6 5.5 5.10457 5.5 4C5.5 2.89543 4.60457 2 3.5 2C2.39543 2 1.5 2.89543 1.5 4C1.5 5.10457 2.39543 6 3.5 6Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.5 6C22.6046 6 23.5 5.10457 23.5 4C23.5 2.89543 22.6046 2 21.5 2C20.3954 2 19.5 2.89543 19.5 4C19.5 5.10457 20.3954 6 21.5 6Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.5 4H15.5"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 4H5.5"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 13.5V15.5C8 16.11 7.63 16.64 7.11 16.86C6.92 16.95 6.72 17 6.5 17H4.5C3.67 17 3 16.33 3 15.5V13.5C3 12.67 3.67 12 4.5 12H6.5C7.33 12 8 12.67 8 13.5Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 13.5V15.5C22 16.33 21.33 17 20.5 17H18.5C18.28 17 18.08 16.95 17.89 16.86C17.37 16.64 17 16.11 17 15.5V13.5C17 12.67 17.67 12 18.5 12H20.5C21.33 12 22 12.67 22 13.5Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5 2.5V5.5C15.5 6.32 14.82 7 14 7H11C10.18 7 9.5 6.32 9.5 5.5V2.5C9.5 1.68 10.18 1 11 1H14C14.82 1 15.5 1.68 15.5 2.5Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5 4.72998C17.87 5.92998 19.5 8.51 19.5 11.5C19.5 11.67 19.49 11.83 19.47 12"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.53 12C5.51 11.83 5.5 11.67 5.5 11.5C5.5 8.51 7.13 5.92998 9.5 4.72998"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      )}
    </svg>
  );
};
