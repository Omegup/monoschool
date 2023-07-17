import { widths } from '@omegup-school/ui-configs/sizes';

export const MenuBoard = ({
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
    <g id="menu-board" clip-path="url(#clip0_25_9217)">
      <path
        id="Vector"
        d="M22.43 6.76001L19.06 20.29C18.82 21.3 17.92 22 16.88 22H3.74001C2.23001 22 1.15002 20.5199 1.60002 19.0699L5.81001 5.55005C6.10001 4.61005 6.97003 3.95996 7.95003 3.95996H20.25C21.2 3.95996 21.99 4.53997 22.32 5.33997C22.51 5.76997 22.55 6.26001 22.43 6.76001Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        id="Vector_2"
        d="M16.5 22H21.28C22.57 22 23.58 20.91 23.49 19.62L22.5 6"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_3"
        d="M10.1799 6.38L11.2199 2.06006"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_4"
        d="M16.88 6.39001L17.82 2.05005"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_5"
        d="M8.19995 12H16.1999"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_6"
        d="M7.19995 16H15.1999"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_25_9217">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);
