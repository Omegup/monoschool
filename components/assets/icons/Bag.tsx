import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const Bag = ({
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
            d="M17.5506 11H3.37064C2.75064 11 2.28064 11.55 2.38064 12.16L3.22064 17.3C3.50064 19.02 4.25064 21 7.58064 21H13.1906C16.5606 21 17.1606 19.31 17.5206 17.42L18.5306 12.19C18.6506 11.57 18.1806 11 17.5506 11ZM9.1106 17.45C9.1106 17.84 8.8006 18.15 8.42064 18.15C8.03064 18.15 7.72064 17.84 7.72064 17.45V14.15C7.72064 13.77 8.03064 13.45 8.42064 13.45C8.8006 13.45 9.1106 13.77 9.1106 14.15V17.45ZM13.3906 17.45C13.3906 17.84 13.0806 18.15 12.6906 18.15C12.3106 18.15 11.9906 17.84 11.9906 17.45V14.15C11.9906 13.77 12.3106 13.45 12.6906 13.45C13.0806 13.45 13.3906 13.77 13.3906 14.15V17.45Z"
            fill={color}
          />
        </>
      ) : (
        <>
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
            d="M9.26001 13V16.55"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M13.86 13V16.55"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
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
