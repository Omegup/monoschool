import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArchiveAdd = ({
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
            d="M14.3203 0H4.68031C2.55031 0 0.820312 1.74 0.820312 3.86V17.95C0.820312 19.75 2.11031 20.51 3.69031 19.64L8.5703 16.93C9.0903 16.64 9.9303 16.64 10.4403 16.93L15.3203 19.64C16.9003 20.52 18.1903 19.76 18.1903 17.95V3.86C18.1803 1.74 16.4503 0 14.3203 0ZM12.0003 9.4H10.2503V11.21C10.2503 11.62 9.9103 11.96 9.5003 11.96C9.0903 11.96 8.7503 11.62 8.7503 11.21V9.4H7.00031C6.59031 9.4 6.25031 9.06 6.25031 8.65C6.25031 8.24 6.59031 7.9 7.00031 7.9H8.7503V6.21C8.7503 5.8 9.0903 5.46 9.5003 5.46C9.9103 5.46 10.2503 5.8 10.2503 6.21V7.9H12.0003C12.4103 7.9 12.7503 8.24 12.7503 8.65C12.7503 9.06 12.4103 9.4 12.0003 9.4Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M12 9.6499H7"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 7.20996V12.21"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.3199 1H4.67995C2.54995 1 0.819946 2.74 0.819946 4.86V18.95C0.819946 20.75 2.10995 21.51 3.68995 20.64L8.5699 17.93C9.0899 17.64 9.9299 17.64 10.4399 17.93L15.3199 20.64C16.8999 21.52 18.1899 20.76 18.1899 18.95V4.86C18.1799 2.74 16.4499 1 14.3199 1Z"
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
