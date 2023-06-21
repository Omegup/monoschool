import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';


export const AddItem = ({
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
            d="M11.93 3.43V4.77C9.31 4.98 7.82 6.66 7.82 9.43V14H3.93C1.64 14 0.5 12.86 0.5 10.57V3.43C0.5 1.14 1.64 0 3.93 0H8.5C10.79 0 11.93 1.14 11.93 3.43Z"
            fill={color}
          />
          <path
            d="M17.0703 6H12.5003C10.2103 6 9.07031 7.14 9.07031 9.43V16.57C9.07031 18.86 10.2103 20 12.5003 20H17.0703C19.3603 20 20.5003 18.86 20.5003 16.57V9.43C20.5003 7.14 19.3603 6 17.0703 6ZM16.6303 13.75H15.7503V14.63C15.7503 15.04 15.4103 15.38 15.0003 15.38C14.5903 15.38 14.2503 15.04 14.2503 14.63V13.75H13.3703C12.9603 13.75 12.6203 13.41 12.6203 13C12.6203 12.59 12.9603 12.25 13.3703 12.25H14.2503V11.37C14.2503 10.96 14.5903 10.62 15.0003 10.62C15.4103 10.62 15.7503 10.96 15.7503 11.37V12.25H16.6303C17.0403 12.25 17.3803 12.59 17.3803 13C17.3803 13.41 17.0403 13.75 16.6303 13.75Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M8.5 16H5.93C3.64 16 2.5 14.86 2.5 12.57V5.43C2.5 3.14 3.64 2 5.93 2H10.5C12.79 2 13.93 3.14 13.93 5.43"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.0699 22H14.4999C12.2099 22 11.0699 20.86 11.0699 18.57V11.43C11.0699 9.14 12.2099 8 14.4999 8H19.0699C21.3599 8 22.4999 9.14 22.4999 11.43V18.57C22.4999 20.86 21.3599 22 19.0699 22Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.37 15H18.63"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 16.6301V13.3701"
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
