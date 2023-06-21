import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrowDownSecond = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
  rotation,
}:IconProps) => {
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
            d="M10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM14.03 11.03L11.03 14.03C10.88 14.18 10.69 14.25 10.5 14.25C10.31 14.25 10.12 14.18 9.97 14.03L6.97 11.03C6.68 10.74 6.68 10.26 6.97 9.97C7.26 9.68 7.74 9.68 8.03 9.97L9.75 11.69V6.5C9.75 6.09 10.09 5.75 10.5 5.75C10.91 5.75 11.25 6.09 11.25 6.5V11.69L12.97 9.97C13.26 9.68 13.74 9.68 14.03 9.97C14.32 10.26 14.32 10.74 14.03 11.03Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 7.5V13.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 11.5L11.5 14.5L14.5 11.5"
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
