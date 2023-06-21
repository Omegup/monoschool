import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const BatteryEmptyOne = ({
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
            d="M18.9192 5.00047C18.7792 4.99047 18.5992 4.98047 18.3992 4.98047C18.0092 4.98047 17.6992 5.29047 17.6992 5.68047V10.3305C17.6992 10.7205 18.0092 11.0305 18.3992 11.0305C18.5992 11.0305 18.7692 11.0205 18.9392 11.0105C20.4992 10.8305 20.4992 9.7305 20.4992 8.9305V7.0705C20.4992 6.2705 20.4992 5.17047 18.9192 5.00047Z"
            fill={color}
          />
          <path
            d="M11.43 0.789062H5.85C1.75 0.789062 0.5 2.03906 0.5 6.1391V9.8591C0.5 13.9591 1.75 15.2091 5.85 15.2091H11.43C15.53 15.2091 16.78 13.9591 16.78 9.8591V6.1391C16.78 2.03906 15.53 0.789062 11.43 0.789062ZM5.6 10.1791C5.52 10.5191 5.21 10.7491 4.87 10.7491C4.81 10.7491 4.75 10.7391 4.69 10.7291C4.29 10.6291 4.04 10.2191 4.14 9.8191C4.44 8.6291 4.44 7.3691 4.14 6.1791C4.04 5.77906 4.28 5.36906 4.69 5.26906C5.09 5.16906 5.5 5.41906 5.6 5.81906C5.96 7.2491 5.96 8.7491 5.6 10.1791Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M12.5 15H6.5C2.5 15 1.5 14 1.5 10V6C1.5 2 2.5 1 6.5 1H12.5C16.5 1 17.5 2 17.5 6V10C17.5 14 16.5 15 12.5 15Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 5.5C21.5 5.5 21.5 6 21.5 7V9C21.5 10 21.5 10.5 20 10.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.88 6C6.21 7.31 6.21 8.69 5.88 10"
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
