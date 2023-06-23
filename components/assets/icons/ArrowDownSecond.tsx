import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrowDownSecond = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 9"
      fill={color}
      xmlns="http://www.w3.org/2000/svg">
      {bold ? (
        <>
          <path d="M17.4201 0.949951L10.9001 7.47C10.1301 8.24 8.8701 8.24 8.1001 7.47L1.58008 0.949951"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </>
      ) : (
        <>
          <path d="M17.4201 0.949951L10.9001 7.47C10.1301 8.24 8.8701 8.24 8.1001 7.47L1.58008 0.949951"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </>
      )}
    </svg>
  );
};
