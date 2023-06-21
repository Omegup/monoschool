import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const Aquarius = ({
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
        {bold ? <>
        <path
          d="M16.25 8C16.25 3.73 12.77 0.25 8.5 0.25C4.23 0.25 0.75 3.73 0.75 8C0.75 8.41 1.09 8.75 1.5 8.75C1.91 8.75 2.25 8.41 2.25 8C2.25 4.55 5.05 1.75 8.5 1.75C11.95 1.75 14.75 4.55 14.75 8C14.75 11.45 11.95 14.25 8.5 14.25C8.09 14.25 7.75 14.59 7.75 15V21C7.75 21.41 8.09 21.75 8.5 21.75C8.91 21.75 9.25 21.41 9.25 21V15.71C13.17 15.33 16.25 12.02 16.25 8Z"
          fill={color}
        />
        <path
          d="M11.5 18.75H5.5C5.09 18.75 4.75 18.41 4.75 18C4.75 17.59 5.09 17.25 5.5 17.25H11.5C11.91 17.25 12.25 17.59 12.25 18C12.25 18.41 11.91 18.75 11.5 18.75Z"
          fill={color}
        />
      </>
   :
      <
      >
        <path
          d="M8.5 15C12.37 15 15.5 11.87 15.5 8C15.5 4.13 12.37 1 8.5 1C4.63 1 1.5 4.13 1.5 8"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 15V21"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 18H5.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>}</svg>
    );
  
};


