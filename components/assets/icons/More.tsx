import { widths } from '@omegup-school/ui-configs/sizes';

export const More = ({
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
      d="M5.5 10C4.4 10 3.5 10.9 3.5 12C3.5 13.1 4.4 14 5.5 14C6.6 14 7.5 13.1 7.5 12C7.5 10.9 6.6 10 5.5 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M19.5 10C18.4 10 17.5 10.9 17.5 12C17.5 13.1 18.4 14 19.5 14C20.6 14 21.5 13.1 21.5 12C21.5 10.9 20.6 10 19.5 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M12.5 10C11.4 10 10.5 10.9 10.5 12C10.5 13.1 11.4 14 12.5 14C13.6 14 14.5 13.1 14.5 12C14.5 10.9 13.6 10 12.5 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
);
