import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const GridNine = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bold ? (
        <>
          <path
            d="M20.5 5.81125V9.2513H15.25V0.03125C18.55 0.23125 20.5 2.36125 20.5 5.81125Z"
            fill={color}
          />
          <path
            d="M20.5 10.75V14.19C20.5 17.64 18.55 19.77 15.25 19.97V10.75H20.5Z"
            fill={color}
          />
          <path
            d="M5.75 10.75V19.97C2.45 19.77 0.5 17.64 0.5 14.19V10.75H5.75Z"
            fill={color}
          />
          <path
            d="M5.75 0.03125V9.2513H0.5V5.81125C0.5 2.36125 2.45 0.23125 5.75 0.03125Z"
            fill={color}
          />
          <path d="M13.75 0H7.25V9.25H13.75V0Z" fill={color} />
          <path d="M13.75 10.75H7.25V20H13.75V10.75Z" fill={color} />
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
            d="M1.5 11H21.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.75 11V20.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.25 21V11"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.75 11V1"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.25 11V1.54004"
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
