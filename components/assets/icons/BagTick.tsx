import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const BagTick = ({
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
            d="M17.74 4.57859H17.34L13.96 1.19859C13.69 0.928594 13.25 0.928594 12.97 1.19859C12.7 1.46859 12.7 1.90859 12.97 2.18859L15.36 4.57859H5.64L8.03 2.18859C8.3 1.91859 8.3 1.47859 8.03 1.19859C7.76 0.928594 7.32 0.928594 7.04 1.19859L3.67 4.57859H3.27C2.37 4.57859 0.5 4.57859 0.5 7.13859C0.5 8.10859 0.7 8.74859 1.12 9.1686C1.36 9.4186 1.65 9.5486 1.96 9.6186C2.25 9.6886 2.56 9.6986 2.86 9.6986H18.14C18.45 9.6986 18.74 9.6786 19.02 9.6186C19.86 9.4186 20.5 8.81859 20.5 7.13859C20.5 4.57859 18.63 4.57859 17.74 4.57859Z"
            fill={color}
          />
          <path
            d="M17.5897 11H3.40971C2.78971 11 2.31971 11.55 2.41971 12.16L3.25971 17.3C3.53971 19.02 4.28971 21 7.61971 21H13.2297C16.5997 21 17.1997 19.31 17.5597 17.42L18.5697 12.19C18.6897 11.57 18.2197 11 17.5897 11ZM13.3797 15.05L10.1297 18.05C9.9897 18.18 9.8097 18.25 9.6197 18.25C9.4297 18.25 9.2397 18.18 9.0897 18.03L7.58971 16.53C7.29971 16.24 7.29971 15.76 7.58971 15.47C7.88971 15.18 8.35971 15.18 8.6597 15.47L9.6497 16.46L12.3697 13.95C12.6697 13.67 13.1497 13.69 13.4297 13.99C13.7097 14.3 13.6897 14.77 13.3797 15.05Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M9.12 15L10.62 16.5L13.87 13.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.30994 1L4.68994 4.63"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.6899 1L18.3099 4.63"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.5 6.84998C1.5 4.99998 2.49 4.84998 3.72 4.84998H19.28C20.51 4.84998 21.5 4.99998 21.5 6.84998C21.5 8.99998 20.51 8.84998 19.28 8.84998H3.72C2.49 8.84998 1.5 8.99998 1.5 6.84998Z"
            stroke={color}
            stroke-width="1.5"
          />
          <path
            d="M3 9L4.41 17.64C4.73 19.58 5.5 21 8.36 21H14.39C17.5 21 17.96 19.64 18.32 17.76L20 9"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </>
      )}
    </svg>
  );
};
