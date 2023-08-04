import { widths } from '@omegup-school/ui-configs/sizes';

export const CalendarCircle = ({
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
    <g id="calendar-circle">
      <path
        id="Vector"
        d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M10.39 5.82996V7.82996"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_3"
        d="M14.61 5.82996V7.82996"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_4"
        d="M8.03003 10.14H16.97"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_5"
        d="M14 17.6699H11C8.5 17.6699 7 15.8699 7 13.6699V10.6699C7 8.46992 8.5 6.66992 11 6.66992H14C16.5 6.66992 18 8.46992 18 10.6699V13.6699C18 15.8699 16.5 17.6699 14 17.6699Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
