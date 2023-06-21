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
      
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bold ? (
        <>
          <path
            d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM16.5 10.75H11.25V16C11.25 16.41 10.91 16.75 10.5 16.75C10.09 16.75 9.75 16.41 9.75 16V10.75H4.5C4.09 10.75 3.75 10.41 3.75 10C3.75 9.59 4.09 9.25 4.5 9.25H9.75V4C9.75 3.59 10.09 3.25 10.5 3.25C10.91 3.25 11.25 3.59 11.25 4V9.25H16.5C16.91 9.25 17.25 9.59 17.25 10C17.25 10.41 16.91 10.75 16.5 10.75Z"
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
