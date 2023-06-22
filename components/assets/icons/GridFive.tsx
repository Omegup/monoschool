import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const GridFive = ({
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
            d="M6.75 0V20H6.31C2.67 20 0.5 17.83 0.5 14.19V5.81C0.5 2.17 2.67 0 6.31 0H6.75Z"
            fill={color}
          />
          <path
            d="M20.5 5.81V9.25H8.25V0H14.69C18.33 0 20.5 2.17 20.5 5.81Z"
            fill={color}
          />
          <path
            d="M20.5 10.75V14.19C20.5 17.83 18.33 20 14.69 20H8.25V10.75H20.5Z"
            fill={color}
          />
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
            d="M9.5 11H21.5"
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
