import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const AlignRight = ({
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
            d="M0.119141 13.98V15.02C0.119141 16.61 0.719141 17.25 2.23914 17.25H14.1191V11.75H2.23914C0.719141 11.75 0.119141 12.39 0.119141 13.98Z"
            fill={color}
          />
          <path
            d="M5.11914 5.48V6.52C5.11914 8.11 5.7291 8.75 7.2391 8.75H14.1191V3.25H7.2391C5.7291 3.25 5.11914 3.89 5.11914 5.48Z"
            fill={color}
          />
          <path
            d="M14.1191 20C13.7091 20 13.3691 19.66 13.3691 19.25V0.75C13.3691 0.34 13.7091 0 14.1191 0C14.5291 0 14.8691 0.34 14.8691 0.75V19.25C14.8791 19.66 14.5391 20 14.1191 20Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M15.4 18.25H3.6C2.1 18.25 1.5 17.61 1.5 16.02V14.98C1.5 13.39 2.1 12.75 3.6 12.75H15.4"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.4 4.25H8.6C7.1 4.25 6.5 4.89 6.5 6.48V7.52C6.5 9.11 7.1 9.75 8.6 9.75H15.4"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5 0.98999V20.99"
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
