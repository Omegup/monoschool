import { widths } from '@omegup-school/ui-configs/sizes';

export const EmptyWalletTime = ({
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
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_25_9107)">
      <path
        d="M18.54 13.55C18.12 13.96 17.88 14.55 17.94 15.18C18.03 16.26 19.02 17.05 20.1 17.05H22V18.24C22 20.31 20.31 22 18.24 22H8.14C8.97 21.27 9.5 20.2 9.5 19C9.5 16.79 7.71 15 5.5 15C4.56 15 3.69 15.33 3 15.88V11.51C3 9.44001 4.68999 7.75 6.75999 7.75H18.24C20.31 7.75 22 9.44001 22 11.51V12.95H19.98C19.42 12.95 18.91 13.17 18.54 13.55Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11.5101V7.84014C3 6.65014 3.73 5.59009 4.84 5.17009L12.78 2.17009C14.02 1.71009 15.35 2.62012 15.35 3.95012V7.75011"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.0588 13.9702V16.0302C23.0588 16.5802 22.6188 17.0302 22.0588 17.0502H20.0988C19.0188 17.0502 18.0288 16.2602 17.9388 15.1802C17.8788 14.5502 18.1188 13.9602 18.5388 13.5502C18.9088 13.1702 19.4188 12.9502 19.9788 12.9502H22.0588C22.6188 12.9702 23.0588 13.4202 23.0588 13.9702Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12H14.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19C9.5 20.2 8.97 21.27 8.14 22C7.43 22.62 6.51 23 5.5 23C3.29 23 1.5 21.21 1.5 19C1.5 17.74 2.08 16.61 3 15.88C3.69 15.33 4.56 15 5.5 15C7.71 15 9.5 16.79 9.5 19Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75 17.75V19.25L4.5 20"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_25_9107">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);
