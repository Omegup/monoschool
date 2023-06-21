import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrowDownDivided= ({
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
            d="M3.82919 0H9.1692C12.4892 0 13.8392 2.35 12.1892 5.22L11.4492 6.5C11.2692 6.81 10.9392 7 10.5792 7H2.41919C2.05919 7 1.72919 6.81 1.54919 6.5L0.809192 5.22C-0.840807 2.35 0.509193 0 3.82919 0Z"
            fill={color}
          />
          <path
            d="M3.29152 8H9.7215C10.1115 8 10.3515 8.42 10.1515 8.75L9.5115 9.85C7.8615 12.72 5.1415 12.72 3.49152 9.85L2.85152 8.75C2.66152 8.42 2.90152 8 3.29152 8Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M7.5001 1H10.1701C13.4801 1 14.8401 3.35 13.1801 6.22L11.8401 8.53L10.5001 10.84C8.8401 13.71 6.1301 13.71 4.47005 10.84L3.13005 8.53L1.79005 6.22C0.16005 3.35 1.51005 1 4.83005 1H7.5001Z"
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
