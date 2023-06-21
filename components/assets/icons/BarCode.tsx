import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const BarCode = ({
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
            d="M15.5 0.5H5.5C2.5 0.5 0.5 2 0.5 5.5V12.5C0.5 16 2.5 17.5 5.5 17.5H15.5C18.5 17.5 20.5 16 20.5 12.5V5.5C20.5 2 18.5 0.5 15.5 0.5ZM5.25 13C5.25 13.41 4.91 13.75 4.5 13.75C4.09 13.75 3.75 13.41 3.75 13V5C3.75 4.59 4.09 4.25 4.5 4.25C4.91 4.25 5.25 4.59 5.25 5V13ZM8.25 13C8.25 13.41 7.91 13.75 7.5 13.75C7.09 13.75 6.75 13.41 6.75 13V12C6.75 11.59 7.09 11.25 7.5 11.25C7.91 11.25 8.25 11.59 8.25 12V13ZM8.25 9C8.25 9.41 7.91 9.75 7.5 9.75C7.09 9.75 6.75 9.41 6.75 9V5C6.75 4.59 7.09 4.25 7.5 4.25C7.91 4.25 8.25 4.59 8.25 5V9ZM11.25 13C11.25 13.41 10.91 13.75 10.5 13.75C10.09 13.75 9.75 13.41 9.75 13V5C9.75 4.59 10.09 4.25 10.5 4.25C10.91 4.25 11.25 4.59 11.25 5V13ZM14.25 13C14.25 13.41 13.91 13.75 13.5 13.75C13.09 13.75 12.75 13.41 12.75 13V9C12.75 8.59 13.09 8.25 13.5 8.25C13.91 8.25 14.25 8.59 14.25 9V13ZM14.25 6C14.25 6.41 13.91 6.75 13.5 6.75C13.09 6.75 12.75 6.41 12.75 6V5C12.75 4.59 13.09 4.25 13.5 4.25C13.91 4.25 14.25 4.59 14.25 5V6ZM17.25 13C17.25 13.41 16.91 13.75 16.5 13.75C16.09 13.75 15.75 13.41 15.75 13V5C15.75 4.59 16.09 4.25 16.5 4.25C16.91 4.25 17.25 4.59 17.25 5V13Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M16.5 18.5H6.5C3.5 18.5 1.5 17 1.5 13.5V6.5C1.5 3 3.5 1.5 6.5 1.5H16.5C19.5 1.5 21.5 3 21.5 6.5V13.5C21.5 17 19.5 18.5 16.5 18.5Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.5 6V14"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 6V10"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 13V14"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 6V7"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 6V14"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 10V14"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 6V14"
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
