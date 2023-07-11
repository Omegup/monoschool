import { widths } from '@omegup-school/ui-configs/sizes';

export const People = ({
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
      d="M18.5 7.16C18.44 7.15 18.37 7.15 18.31 7.16C16.93 7.11 15.83 5.98 15.83 4.58C15.83 3.15 16.98 2 18.41 2C19.84 2 20.99 3.16 20.99 4.58C20.98 5.98 19.88 7.11 18.5 7.16Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4699 14.4399C18.8399 14.6699 20.3499 14.4299 21.4099 13.7199C22.8199 12.7799 22.8199 11.2399 21.4099 10.2999C20.3399 9.58992 18.8099 9.34991 17.4399 9.58991"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.46998 7.16C6.52998 7.15 6.59998 7.15 6.65998 7.16C8.03998 7.11 9.13998 5.98 9.13998 4.58C9.13998 3.15 7.98998 2 6.55998 2C5.12998 2 3.97998 3.16 3.97998 4.58C3.98998 5.98 5.08998 7.11 6.46998 7.16Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49994 14.4399C6.12994 14.6699 4.61994 14.4299 3.55994 13.7199C2.14994 12.7799 2.14994 11.2399 3.55994 10.2999C4.62994 9.58992 6.15994 9.34991 7.52994 9.58991"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 14.63C12.44 14.62 12.37 14.62 12.31 14.63C10.93 14.58 9.82996 13.45 9.82996 12.05C9.82996 10.62 10.98 9.46997 12.41 9.46997C13.84 9.46997 14.99 10.63 14.99 12.05C14.98 13.45 13.88 14.59 12.5 14.63Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.58997 17.7801C8.17997 18.7201 8.17997 20.2601 9.58997 21.2001C11.19 22.2701 13.81 22.2701 15.41 21.2001C16.82 20.2601 16.82 18.7201 15.41 17.7801C13.82 16.7201 11.19 16.7201 9.58997 17.7801Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
