import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const Archive = ({
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
      {bold ? 
      <>
      <path
        d="M14.5 7.75H6.5C5.81 7.75 5.25 8.31 5.25 9V10.05C5.28 10.04 5.3 10.03 5.33 10.02C5.45 9.96 5.58 9.92 5.71 9.88C5.77 9.86 5.83 9.84 5.9 9.82C6.1 9.78 6.3 9.75 6.51 9.75H14.51C14.72 9.75 14.92 9.78 15.12 9.82C15.18 9.83 15.24 9.86 15.31 9.88C15.44 9.92 15.57 9.96 15.69 10.02C15.72 10.03 15.75 10.04 15.77 10.05V9C15.75 8.31 15.19 7.75 14.5 7.75Z"
        fill={color}
      />
      <path
        d="M14.5 11.25H6.5C5.81 11.25 5.25 11.81 5.25 12.5V13H8C8.41 13 8.75 13.34 8.75 13.75C8.75 14.71 9.54 15.5 10.5 15.5C11.46 15.5 12.25 14.71 12.25 13.75C12.25 13.34 12.59 13 13 13H15.75V12.5C15.75 11.81 15.19 11.25 14.5 11.25Z"
        fill={color}
      />
      <path
        d="M14.5 4.5H6.5C5.81 4.5 5.25 5.06 5.25 5.75V6.56C5.63 6.37 6.05 6.25 6.5 6.25H14.5C14.95 6.25 15.37 6.37 15.75 6.56V5.75C15.75 5.06 15.19 4.5 14.5 4.5Z"
        fill={color}
      />
      <path
        d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM17.5 14.5H16.5H13.66C13.32 15.93 12.03 17 10.5 17C8.97 17 7.68 15.93 7.34 14.5H4.5H3.5C3.09 14.5 2.75 14.16 2.75 13.75C2.75 13.34 3.09 13 3.5 13H3.75V12.5V12V9V5.75C3.75 4.23 4.98 3 6.5 3H14.5C16.02 3 17.25 4.23 17.25 5.75V9V12V12.5V13H17.5C17.91 13 18.25 13.34 18.25 13.75C18.25 14.16 17.91 14.5 17.5 14.5Z"
        fill={color}
      />
    </>
     
    :
      <
      >
        <path
          d="M8.5 21H14.5C19.5 21 21.5 19 21.5 14V8C21.5 3 19.5 1 14.5 1H8.5C3.5 1 1.5 3 1.5 8V14C1.5 19 3.5 21 8.5 21Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 6.75V13.5C17.5 12.4 16.6 11.5 15.5 11.5H7.5C6.4 11.5 5.5 12.4 5.5 13.5V6.75C5.5 5.65 6.4 4.75 7.5 4.75H15.5C16.6 4.75 17.5 5.65 17.5 6.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 14.75H17.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 13V10C17.5 8.9 16.6 8 15.5 8H7.5C6.4 8 5.5 8.9 5.5 10V13"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 13.5V14.75H14C14 16.13 12.88 17.25 11.5 17.25C10.12 17.25 9 16.13 9 14.75H5.5V13.5C5.5 12.4 6.4 11.5 7.5 11.5H15.5C16.6 11.5 17.5 12.4 17.5 13.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>}</svg>
    );
  
};
