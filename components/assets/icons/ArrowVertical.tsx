import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrowVertical = ({
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
            d="M9.4814 4.19L5.77141 0.48C5.70141 0.41 5.61141 0.35 5.51141 0.31C5.50141 0.31 5.49141 0.31 5.48141 0.3C5.40141 0.27 5.32141 0.25 5.23141 0.25C5.03141 0.25 4.84141 0.33 4.70141 0.47L0.971406 4.19C0.681406 4.48 0.681406 4.96 0.971406 5.25C1.26141 5.54 1.74141 5.54 2.03141 5.25L4.48141 2.8V19C4.48141 19.41 4.82141 19.75 5.23141 19.75C5.64141 19.75 5.98141 19.41 5.98141 19V2.81L8.42141 5.25C8.5714 5.4 8.7614 5.47 8.9514 5.47C9.1414 5.47 9.3314 5.4 9.4814 5.25C9.7714 4.96 9.7714 4.49 9.4814 4.19Z"
            fill={color}
          />
          <path
            d="M20.0283 14.75C19.7383 14.46 19.2583 14.46 18.9683 14.75L16.5183 17.2V1C16.5183 0.59 16.1783 0.25 15.7683 0.25C15.3583 0.25 15.0183 0.59 15.0183 1V17.19L12.5783 14.75C12.2883 14.46 11.8083 14.46 11.5183 14.75C11.2283 15.04 11.2283 15.52 11.5183 15.81L15.2283 19.52C15.2983 19.59 15.3883 19.65 15.4883 19.69C15.4983 19.69 15.5083 19.69 15.5183 19.7C15.5983 19.73 15.6883 19.75 15.7783 19.75C15.9783 19.75 16.1683 19.67 16.3083 19.53L20.0283 15.81C20.3183 15.51 20.3183 15.04 20.0283 14.75Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M10.95 6.71997L7.22998 3L3.51001 6.71997"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.22998 21V3"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.05 17.28L17.7701 21L21.4901 17.28"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.77 3V21"
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
