import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const BackSquare = ({
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
            d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM12.42 14.13H7.5C7.09 14.13 6.75 13.79 6.75 13.38C6.75 12.97 7.09 12.63 7.5 12.63H12.42C13.7 12.63 14.75 11.59 14.75 10.3C14.75 9.01 13.71 7.97 12.42 7.97H7.35L7.61 8.23C7.9 8.53 7.9 9 7.6 9.3C7.45 9.45 7.26 9.52 7.07 9.52C6.88 9.52 6.69 9.45 6.54 9.3L4.97 7.72C4.68 7.43 4.68 6.95 4.97 6.66L6.54 5.09C6.83 4.8 7.31 4.8 7.6 5.09C7.89 5.38 7.89 5.86 7.6 6.15L7.27 6.48H12.42C14.53 6.48 16.25 8.2 16.25 10.31C16.25 12.42 14.53 14.13 12.42 14.13Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M8.5 21H14.5C19.5 21 21.5 19 21.5 14V8C21.5 3 19.5 1 14.5 1H8.5C3.5 1 1.5 3 1.5 8V14C1.5 19 3.5 21 8.5 21Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.50002 14.3802H13.42C15.12 14.3802 16.5 13.0002 16.5 11.3002C16.5 9.60021 15.12 8.22021 13.42 8.22021H6.65002"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.07 9.7701L6.5 8.19012L8.07 6.62012"
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
