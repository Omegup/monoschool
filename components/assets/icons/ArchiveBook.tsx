import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArchiveBook = ({
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
  >
    {bold ? (
      <>
        <path
          d="M12.4303 0.5V6.4C12.4303 6.84 11.9103 7.06 11.5903 6.77L9.8403 5.16C9.6503 4.98 9.3503 4.98 9.1603 5.16L7.41031 6.76C7.09031 7.06 6.57031 6.83 6.57031 6.4V0.5C6.57031 0.22 6.79031 0 7.07031 0H11.9303C12.2103 0 12.4303 0.22 12.4303 0.5Z"
          fill={color}
        />
        <path
          d="M14.48 0.0589094C14.19 0.0189094 13.93 0.268909 13.93 0.558909V6.57891C13.93 7.33891 13.48 8.0289 12.78 8.3389C12.08 8.6389 11.27 8.5089 10.71 7.98891L9.84 7.18891C9.65 7.00891 9.36 7.00891 9.16 7.18891L8.29 7.98891C7.93 8.3289 7.46 8.4989 6.99 8.4989C6.73 8.4989 6.47 8.4489 6.22 8.3389C5.52 8.0289 5.07 7.33891 5.07 6.57891V0.558909C5.07 0.268909 4.81 0.0189094 4.52 0.0589094C1.72 0.408909 0.5 2.29891 0.5 4.99891V14.9989C0.5 17.9989 2 19.9989 5.5 19.9989H13.5C17 19.9989 18.5 17.9989 18.5 14.9989V4.99891C18.5 2.29891 17.28 0.408909 14.48 0.0589094ZM15 16.7489H6.5C6.09 16.7489 5.75 16.4089 5.75 15.9989C5.75 15.5889 6.09 15.2489 6.5 15.2489H15C15.41 15.2489 15.75 15.5889 15.75 15.9989C15.75 16.4089 15.41 16.7489 15 16.7489ZM15 12.7489H10.75C10.34 12.7489 10 12.4089 10 11.9989C10 11.5889 10.34 11.2489 10.75 11.2489H15C15.41 11.2489 15.75 11.5889 15.75 11.9989C15.75 12.4089 15.41 12.7489 15 12.7489Z"
          fill={color}
        />
      </>
    ) : (
      <>
        <path
          d="M19.5 6V16C19.5 19 18 21 14.5 21H6.5C3 21 1.5 19 1.5 16V6C1.5 3 3 1 6.5 1H14.5C18 1 19.5 3 19.5 6Z"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 1V8.85999C14 9.3 13.48 9.52 13.16 9.23L10.84 7.09003C10.65 6.91003 10.35 6.91003 10.16 7.09003L7.84003 9.23C7.52003 9.52 7 9.3 7 8.85999V1H14Z"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.75 13H16"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 17H16"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </>
    )}
  </svg>)
};
