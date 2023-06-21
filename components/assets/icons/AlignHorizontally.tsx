import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';
export const AlignHorizontally = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
 return(
  <svg
  width={width}
  height={height}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>{bold ?
      <>
        <path
          d="M3.25 13.4V2.6C3.25 1.1 3.89 0.5 5.48 0.5H6.52C8.11 0.5 8.75 1.1 8.75 2.6V13.4C8.75 14.9 8.11 15.5 6.52 15.5H5.48C3.89 15.5 3.25 14.9 3.25 13.4Z"
          fill={color}
        />
        <path
          d="M3.25 8.75H1.25C0.84 8.75 0.5 8.41 0.5 8C0.5 7.59 0.84 7.25 1.25 7.25H3.25V8.75Z"
          fill={color}
        />
        <path
          d="M11.75 7.25H8.75V8.75H11.75V7.25Z"
          fill={color}
        />
        <path
          d="M19.75 8.75H17.25V7.25H19.75C20.16 7.25 20.5 7.59 20.5 8C20.5 8.41 20.16 8.75 19.75 8.75Z"
          fill={color}
        />
        <path
          d="M11.75 11.4V4.6C11.75 3.1 12.39 2.5 13.98 2.5H15.02C16.61 2.5 17.25 3.1 17.25 4.6V11.4C17.25 12.9 16.61 13.5 15.02 13.5H13.98C12.39 13.5 11.75 12.9 11.75 11.4Z"
          fill={color}
        />
      </>
    :
      <
      >
        <path
          d="M4.25 14.4V3.6C4.25 2.1 4.89 1.5 6.48 1.5H7.52C9.11 1.5 9.75 2.1 9.75 3.6V14.4C9.75 15.9 9.11 16.5 7.52 16.5H6.48C4.89 16.5 4.25 15.9 4.25 14.4Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.75 12.4V5.6C12.75 4.1 13.39 3.5 14.98 3.5H16.02C17.61 3.5 18.25 4.1 18.25 5.6V12.4C18.25 13.9 17.61 14.5 16.02 14.5H14.98C13.39 14.5 12.75 13.9 12.75 12.4Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 9H3.9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 9H12.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.5001 9H18.8101"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
      }
      </svg>
    )
  
};
