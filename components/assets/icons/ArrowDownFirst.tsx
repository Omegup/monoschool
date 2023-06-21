import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrowDownFirst = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
  rotation,
}: {
  width?: string;
  height?: string;
  color?: string;
  bold?: boolean;
  rotation?:string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      style={{ transform: `rotate(${rotation})` }}
      
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bold ? (
        <>
          <path
            d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM15.32 12.24L11.03 16.53C10.89 16.67 10.7 16.75 10.5 16.75C10.3 16.75 10.11 16.67 9.97 16.53L5.68 12.24C5.39 11.95 5.39 11.47 5.68 11.18C5.97 10.89 6.45 10.89 6.74 11.18L9.75 14.19V4C9.75 3.59 10.09 3.25 10.5 3.25C10.91 3.25 11.25 3.59 11.25 4V14.19L14.26 11.18C14.55 10.89 15.03 10.89 15.32 11.18C15.47 11.33 15.54 11.52 15.54 11.71C15.54 11.9 15.46 12.1 15.32 12.24Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M13.5699 12.4299L7.4999 18.4999L1.42993 12.4299"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 1.5V18.33"
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
