import { widths } from '@omegup-school/ui-configs/sizes';

export const ArrowDownSquare = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: {
  width?: string;
  height?: string;
  color?: string;
  bold?: boolean;
}) => {
  return (

    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bold ? (
        <>
          <path
            d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM14.56 9.17L11.03 12.7C10.88 12.85 10.69 12.92 10.5 12.92C10.31 12.92 10.12 12.85 9.97 12.7L6.44 9.17C6.15 8.88 6.15 8.4 6.44 8.11C6.73 7.82 7.21 7.82 7.5 8.11L10.5 11.11L13.5 8.11C13.79 7.82 14.27 7.82 14.56 8.11C14.85 8.4 14.85 8.87 14.56 9.17Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M8.5 21H14.5C19.5 21 21.5 19 21.5 14V8C21.5 3 19.5 1 14.5 1H8.5C3.5 1 1.5 3 1.5 8V14C1.5 19 3.5 21 8.5 21Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.96997 9.6399L11.5 13.1599L15.03 9.6399"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
};
