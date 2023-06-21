import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArchiveOne = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <>
      {bold ? (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 3V5C20.5 6.83 19.67 7.82 18 7.97C17.84 7.99 17.67 8 17.5 8H3.5C3.33 8 3.16 7.99 3 7.97C1.33 7.82 0.5 6.83 0.5 5V3C0.5 1 1.5 0 3.5 0H17.5C19.5 0 20.5 1 20.5 3Z"
            fill="#292D32"
          />
          <path
            d="M4 9.25C3.45 9.25 3 9.7 3 10.25V17C3 19 3.5 20 6 20H15C17.5 20 18 19 18 17V10.25C18 9.7 17.55 9.25 17 9.25H4ZM12.32 13.75H8.68C8.27 13.75 7.93 13.41 7.93 13C7.93 12.59 8.27 12.25 8.68 12.25H12.32C12.73 12.25 13.07 12.59 13.07 13C13.07 13.41 12.73 13.75 12.32 13.75Z"
            fill="#292D32"
          />
        </svg>
      ) : (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 9.22V18C19 20 18.5 21 16 21H7C4.5 21 4 20 4 18V9.22"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 1H18.5C20.5 1 21.5 2 21.5 4V6C21.5 8 20.5 9 18.5 9H4.5C2.5 9 1.5 8 1.5 6V4C1.5 2 2.5 1 4.5 1Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.68005 13H13.3201"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};
