import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrowHorizontal = ({
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
            d="M20.25 4.72922C20.25 4.52922 20.17 4.33922 20.03 4.19922L16.31 0.479221C16.02 0.189221 15.54 0.189221 15.25 0.479221C14.96 0.769221 14.96 1.24922 15.25 1.53922L17.7 3.98922H1.5C1.09 3.98922 0.75 4.32922 0.75 4.73922C0.75 5.14922 1.09 5.47922 1.5 5.47922H17.69L15.25 7.91922C14.96 8.2092 14.96 8.6892 15.25 8.9792C15.4 9.1292 15.59 9.1992 15.78 9.1992C15.97 9.1992 16.16 9.1292 16.31 8.9792L20.02 5.26922C20.09 5.19922 20.15 5.10922 20.19 5.00922C20.19 4.99922 20.19 4.98922 20.2 4.97922C20.23 4.89922 20.25 4.81922 20.25 4.72922Z"
            fill={color}
          />
          <path
            d="M19.5 14.5183H3.31L5.75 12.0783C6.04 11.7883 6.04 11.3083 5.75 11.0183C5.46 10.7283 4.98 10.7283 4.69 11.0183L0.98 14.7283C0.91 14.7983 0.85 14.8883 0.81 14.9883C0.81 14.9983 0.81 15.0083 0.8 15.0183C0.77 15.0983 0.75 15.1883 0.75 15.2783C0.75 15.4783 0.83 15.6683 0.97 15.8083L4.69 19.5283C4.84 19.6783 5.03 19.7483 5.22 19.7483C5.41 19.7483 5.6 19.6783 5.75 19.5283C6.04 19.2383 6.04 18.7583 5.75 18.4683L3.3 16.0183H19.5C19.91 16.0183 20.25 15.6783 20.25 15.2683C20.25 14.8583 19.91 14.5183 19.5 14.5183Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M17.78 10.45L21.5 6.72998L17.78 3.01001"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 6.72998H21.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.21997 13.55L3.5 17.2701L7.21997 20.9901"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.5 17.27H3.5"
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
