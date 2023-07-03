import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const Add = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
  

    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bold ? (
        <>
          <path
            d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM18.5 12.75H13.25V18C13.25 18.41 12.91 18.75 12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V12.75H6.5C6.09 12.75 5.75 12.41 5.75 12C5.75 11.59 6.09 11.25 6.5 11.25H11.75V6C11.75 5.59 12.09 5.25 12.5 5.25C12.91 5.25 13.25 5.59 13.25 6V11.25H18.5C18.91 11.25 19.25 11.59 19.25 12C19.25 12.41 18.91 12.75 18.5 12.75Z"
            fill={color}
          />

        </>
      ) : (
        <>
          <path
            d="M6.5 12H18.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 18V6"
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
