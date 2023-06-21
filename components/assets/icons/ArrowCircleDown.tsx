import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrowCircleDown = ({
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
  rotation?: string;
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
            d="M10.5 0C4.99 0 0.5 4.49 0.5 10C0.5 15.51 4.99 20 10.5 20C16.01 20 20.5 15.51 20.5 10C20.5 4.49 16.01 0 10.5 0ZM14.56 9.27L11.03 12.8C10.88 12.95 10.69 13.02 10.5 13.02C10.31 13.02 10.12 12.95 9.97 12.8L6.44 9.27C6.15 8.98 6.15 8.5 6.44 8.21C6.73 7.92 7.21 7.92 7.5 8.21L10.5 11.21L13.5 8.21C13.79 7.92 14.27 7.92 14.56 8.21C14.85 8.5 14.85 8.97 14.56 9.27Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.96997 9.74L11.5 13.26L15.03 9.74"
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
