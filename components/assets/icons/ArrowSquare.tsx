import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrowSquare = ({
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
            d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM17.85 6.84C17.81 6.93 17.76 7.01 17.69 7.08L15.89 8.88C15.74 9.03 15.55 9.1 15.36 9.1C15.17 9.1 14.98 9.03 14.83 8.88C14.54 8.59 14.54 8.11 14.83 7.82L15.35 7.3H15.2C13.1 7.3 11.38 9.01 11.38 11.11V13.07V15.24C11.38 15.65 11.04 15.99 10.63 15.99C10.22 15.99 9.88 15.65 9.88 15.24V13.07V11.11C9.88 9.01 8.17 7.3 6.07 7.3H5.65L6.17 7.82C6.46 8.11 6.46 8.59 6.17 8.88C6.02 9.03 5.83 9.1 5.64 9.1C5.45 9.1 5.26 9.03 5.11 8.88L3.31 7.08C3.02 6.79 3.02 6.31 3.31 6.02L5.11 4.22C5.4 3.93 5.88 3.93 6.17 4.22C6.46 4.51 6.46 4.99 6.17 5.28L5.65 5.8H6.08C8.03 5.8 9.72 6.87 10.64 8.44C11.56 6.87 13.25 5.8 15.21 5.8H15.36L14.84 5.28C14.55 4.99 14.55 4.51 14.84 4.22C15.13 3.93 15.61 3.93 15.9 4.22L17.7 6.02C17.77 6.09 17.82 6.17 17.86 6.26C17.93 6.45 17.93 6.66 17.85 6.84Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M11.6401 14.0701V12.11C11.6401 9.59 13.6801 7.54004 16.2101 7.54004H18.1701"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.12012 7.55005H7.08014C9.6001 7.55005 11.6501 9.59 11.6501 12.12V12.7701V16.25"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.64008 5.75L4.84009 7.55L6.64008 9.35"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.3601 5.75L18.1601 7.55L16.3601 9.35"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 21H14.5C19.5 21 21.5 19 21.5 14V8C21.5 3 19.5 1 14.5 1H8.5C3.5 1 1.5 3 1.5 8V14C1.5 19 3.5 21 8.5 21Z"
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
