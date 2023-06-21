import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArchiveMinus = ({
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
        <path
          d="M14.3203 0H4.68031C2.55031 0 0.820312 1.74 0.820312 3.86V17.95C0.820312 19.75 2.11031 20.51 3.69031 19.64L8.5703 16.93C9.0903 16.64 9.9303 16.64 10.4403 16.93L15.3203 19.64C16.9003 20.52 18.1903 19.76 18.1903 17.95V3.86C18.1803 1.74 16.4503 0 14.3203 0ZM12.5103 7.75C11.5403 8.1 10.5203 8.28 9.5003 8.28C8.4803 8.28 7.46031 8.1 6.49031 7.75C6.10031 7.61 5.90031 7.18 6.04031 6.79C6.19031 6.4 6.62031 6.2 7.01031 6.34C8.6203 6.92 10.3903 6.92 12.0003 6.34C12.3903 6.2 12.8203 6.4 12.9603 6.79C13.1003 7.18 12.9003 7.61 12.5103 7.75Z"
          fill={color}
        />
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
