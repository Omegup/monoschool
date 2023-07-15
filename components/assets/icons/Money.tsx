import { widths } from '@omegup-school/ui-configs/sizes';

export const Money = ({
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
    <path
      d="M19.8 7.91998V13.07C19.8 16.15 18.04 17.47 15.4 17.47H6.60995C6.15995 17.47 5.72996 17.43 5.32996 17.34C5.07996 17.3 4.83996 17.23 4.61996 17.15C3.11996 16.59 2.20996 15.29 2.20996 13.07V7.91998C2.20996 4.83998 3.96995 3.52002 6.60995 3.52002H15.4C17.64 3.52002 19.25 4.47001 19.68 6.64001C19.75 7.04001 19.8 7.44998 19.8 7.91998Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.8011 10.9201V16.0701C22.8011 19.1501 21.0411 20.4701 18.4011 20.4701H9.61105C8.87105 20.4701 8.20106 20.3701 7.62106 20.1501C6.43106 19.7101 5.62105 18.8001 5.33105 17.3401C5.73105 17.4301 6.16105 17.4701 6.61105 17.4701H15.4011C18.0411 17.4701 19.8011 16.1501 19.8011 13.0701V7.9201C19.8011 7.4501 19.7611 7.03014 19.6811 6.64014C21.5811 7.04014 22.8011 8.38011 22.8011 10.9201Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9984 13.1399C12.4564 13.1399 13.6384 11.9579 13.6384 10.4999C13.6384 9.04185 12.4564 7.85986 10.9984 7.85986C9.54038 7.85986 8.3584 9.04185 8.3584 10.4999C8.3584 11.9579 9.54038 13.1399 10.9984 13.1399Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.28003 8.30005V12.7001"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.7217 8.30029V12.7003"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
