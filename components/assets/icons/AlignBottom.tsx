import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const AlignBottom = ({
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
            d="M14.48 15.3789H15.52C17.11 15.3789 17.75 14.7789 17.75 13.2589V1.37891H12.25V13.2589C12.26 14.7789 12.9 15.3789 14.48 15.3789Z"
            fill={color}
          />
          <path
            d="M5.98 10.3789H7.02C8.61 10.3789 9.25 9.7689 9.25 8.2589V1.37891H3.75V8.2589C3.76 9.7689 4.4 10.3789 5.98 10.3789Z"
            fill={color}
          />
          <path
            d="M19.75 2.11891H1.25C0.84 2.11891 0.5 1.78891 0.5 1.37891C0.5 0.96891 0.84 0.62891 1.25 0.62891H19.75C20.16 0.62891 20.5 0.96891 20.5 1.37891C20.5 1.78891 20.16 2.11891 19.75 2.11891Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M18.76 1.1001V12.9001C18.76 14.4001 18.12 15.0001 16.53 15.0001H15.49C13.9 15.0001 13.26 14.4001 13.26 12.9001V1.1001"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.76001 1.1001V7.9001C4.76001 9.4001 5.40001 10.0001 6.99001 10.0001H8.03001C9.62001 10.0001 10.26 9.4001 10.26 7.9001V1.1001"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 1H21.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
};
