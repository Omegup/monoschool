import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArchiveSlash = ({
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
            d="M18.6203 1.88L1.89031 18.61C1.84031 18.41 1.82031 18.19 1.82031 17.95V3.86C1.82031 1.74 3.55031 0 5.68031 0H15.3203C16.7203 0 17.9503 0.75 18.6203 1.88Z"
            fill={color}
          />
          <path
            d="M20.2709 0.22891C19.9709 -0.0710899 19.4809 -0.0710899 19.1809 0.22891L0.730859 18.6889C0.430859 18.9889 0.430859 19.4789 0.730859 19.7789C0.880859 19.9189 1.07086 19.9989 1.27086 19.9989C1.47086 19.9989 1.66086 19.9189 1.81086 19.7689L20.2709 1.30891C20.5809 1.00891 20.5809 0.52891 20.2709 0.22891Z"
            fill={color}
          />
          <path
            d="M17.7902 5.71054L10.4001 13.1005C9.94015 13.5605 10.0301 14.3305 10.5901 14.6605L17.9801 19.0905C18.6501 19.4905 19.4901 19.0105 19.4901 18.2305V6.41054C19.5001 5.52054 18.4201 5.08054 17.7902 5.71054Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M21.5 1L1.5 21"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.18 7.70996V18.71C20.18 20.72 18.74 21.57 16.98 20.59L10.5 16.54"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.81995 18.95V4.86C2.81995 2.74 4.54995 1 6.67995 1H16.3299C17.5399 1 18.6199 1.56 19.3299 2.44"
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
