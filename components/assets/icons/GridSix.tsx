import { widths } from '@omegup-school/ui-configs/sizes';
import { IconProps } from './Icons.types';

export const GridSix = ({
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
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bold ? (
        <>
          <path
            d="M20.5 6.74922H8.25V0.949219H14.69C18.33 0.949219 20.5 3.11922 20.5 6.74922Z"
            fill={color}
          />
          <path
            d="M20.5 15.25C20.45 18.82 18.29 20.95 14.69 20.95H8.25V15.25H20.5Z"
            fill={color}
          />
          <path
            d="M6.75 0.949219V20.9492H6.31C2.67 20.9492 0.5 18.7792 0.5 15.1392V6.75922C0.5 3.11922 2.67 0.949219 6.31 0.949219H6.75Z"
            fill={color}
          />
          <path d="M20.5 8.25H8.25V13.75H20.5V8.25Z" fill={color} />
        </>
      ) : (
        <>
          <path
            d="M8.5 21H14.5C19.5 21 21.5 19 21.5 14V8C21.5 3 19.5 1 14.5 1H8.5C3.5 1 1.5 3 1.5 8V14C1.5 19 3.5 21 8.5 21Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 1V21"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 7.5H21.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 14.5H21.5"
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
