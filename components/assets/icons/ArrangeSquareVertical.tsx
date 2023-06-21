import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';


export const ArrangeSquareVertical = ({
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
            d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM9.43 15.15C9.43 15.25 9.41 15.34 9.37 15.44C9.29 15.62 9.15 15.77 8.96 15.85C8.87 15.89 8.77 15.91 8.67 15.91C8.57 15.91 8.48 15.89 8.38 15.85C8.29 15.81 8.21 15.76 8.14 15.69L5.1 12.65C4.81 12.36 4.81 11.88 5.1 11.59C5.39 11.3 5.87 11.3 6.16 11.59L7.92 13.35V4.85C7.92 4.44 8.26 4.1 8.67 4.1C9.08 4.1 9.42 4.44 9.42 4.85V15.15H9.43ZM15.89 8.42C15.74 8.57 15.55 8.64 15.36 8.64C15.17 8.64 14.98 8.57 14.83 8.42L13.07 6.66V15.16C13.07 15.57 12.73 15.91 12.32 15.91C11.91 15.91 11.57 15.57 11.57 15.16V4.85C11.57 4.75 11.59 4.66 11.63 4.56C11.71 4.38 11.85 4.23 12.04 4.15C12.22 4.07 12.43 4.07 12.61 4.15C12.7 4.19 12.78 4.24 12.85 4.31L15.89 7.35C16.18 7.65 16.18 8.12 15.89 8.42Z"
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
            d="M9.68001 16.1501L6.64001 13.1101"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.68005 5.8501V16.1501"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3199 5.8501L16.3599 8.8901"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3199 16.1501V5.8501"
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
