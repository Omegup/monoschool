import { widths } from '@omegup-school/ui-configs/sizes';

export const Map = ({
  width = widths.icon.svg,
  height = widths.icon.svg,
  color = 'currentColor',
}: {
  color?: string;
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    {...{ width, height }}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="map">
      <path
        id="Vector"
        d="M22.5 9.00002V15C22.5 17.5 22 19.25 20.88 20.38L14.5 14L22.23 6.27002C22.41 7.06002 22.5 7.96002 22.5 9.00002Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M22.23 6.27L6.76999 21.73C3.75999 21.04 2.5 18.96 2.5 15V9C2.5 4 4.5 2 9.5 2H15.5C19.46 2 21.54 3.26 22.23 6.27Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_3"
        d="M20.88 20.38C19.75 21.5 18 22 15.5 22H9.50003C8.46003 22 7.56002 21.91 6.77002 21.73L14.5 14L20.88 20.38Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_4"
        d="M6.74002 7.97997C7.42002 5.04997 11.82 5.04997 12.5 7.97997C12.89 9.69997 11.81 11.16 10.86 12.06C10.17 12.72 9.08003 12.72 8.38003 12.06C7.43003 11.16 6.34002 9.69997 6.74002 7.97997Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        id="Vector_5"
        d="M9.5946 8.69995H9.60359"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
