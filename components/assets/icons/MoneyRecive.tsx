import { colors } from '@omegup-school/ui-configs/colors';

export const MoneyRecive = ({
  color = colors.blue[500],
  width = 30,
  height = 30,
}: {
  color?: string;
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    {...{ width, height }}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.875 17.1876C11.875 18.4001 12.8125 19.3751 13.9625 19.3751H16.3125C17.3125 19.3751 18.125 18.5251 18.125 17.4626C18.125 16.3251 17.625 15.9126 16.8875 15.6501L13.125 14.3376C12.3875 14.0751 11.8875 13.6751 11.8875 12.5251C11.8875 11.475 12.7 10.6125 13.7 10.6125H16.05C17.2 10.6125 18.1375 11.5875 18.1375 12.8001"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 9.375V20.625"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.5 15C27.5 21.9 21.9 27.5 15 27.5C8.1 27.5 2.5 21.9 2.5 15C2.5 8.1 8.1 2.5 15 2.5"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.25 3.75V8.75H26.25"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.5 2.5L21.25 8.75"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
