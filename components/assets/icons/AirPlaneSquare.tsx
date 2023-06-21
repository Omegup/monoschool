import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';


export const AirPlaneSquare = ({
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
            d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM17.01 11.19C17.01 11.79 16.55 12.09 16 11.85L12.65 10.41C12.26 10.25 11.95 10.45 11.95 10.87V12.72C11.95 12.88 12.04 13.11 12.16 13.23L13.8 14.88C13.97 15.05 14.05 15.39 13.97 15.62L13.65 16.58C13.51 17 13.03 17.2 12.64 17L10.97 15.58C10.71 15.37 10.29 15.37 10.04 15.58L8.36 17C7.96 17.2 7.49 17 7.35 16.57L7.03 15.61C6.95 15.38 7.03 15.04 7.2 14.87L8.87 13.23C8.98 13.12 9.08 12.89 9.08 12.72V10.87C9.08 10.45 8.76 10.24 8.38 10.41L5.03 11.85C4.47 12.09 4.02 11.79 4.02 11.19V10.26C4.02 9.78 4.39 9.22 4.83 9.03L8.77 7.33C8.93 7.26 9.07 7.05 9.07 6.87V4.8C9.07 4.12 9.56 3.31 10.17 3.01C10.39 2.9 10.64 2.9 10.86 3.01C11.46 3.32 11.96 4.12 11.96 4.8V6.87C11.96 7.05 12.09 7.26 12.26 7.33L16.2 9.03C16.65 9.22 17.01 9.78 17.01 10.26V11.19Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M9.36002 18L11.04 16.58C11.29 16.37 11.71 16.37 11.97 16.58L13.64 18C14.03 18.2 14.51 18 14.65 17.58L14.97 16.62C15.05 16.39 14.97 16.05 14.8 15.88L13.16 14.23C13.04 14.11 12.95 13.88 12.95 13.72V11.87C12.95 11.45 13.26 11.25 13.65 11.41L17 12.85C17.55 13.09 18.01 12.79 18.01 12.19V11.26C18.01 10.78 17.65 10.22 17.2 10.03L13.26 8.32999C13.09 8.25999 12.96 8.04999 12.96 7.86999V5.79999C12.96 5.11999 12.46 4.31999 11.86 4.00999C11.64 3.89999 11.39 3.89999 11.17 4.00999C10.56 4.30999 10.07 5.11999 10.07 5.79999V7.86999C10.07 8.04999 9.93 8.25999 9.77 8.32999L5.83002 10.03C5.39002 10.22 5.02002 10.78 5.02002 11.26V12.19C5.02002 12.79 5.47002 13.09 6.03002 12.85L9.38002 11.41C9.76 11.24 10.08 11.45 10.08 11.87V13.72C10.08 13.89 9.98 14.12 9.87 14.23L8.20002 15.87C8.03002 16.04 7.95002 16.38 8.03002 16.61L8.35002 17.57C8.49002 18 8.96002 18.2 9.36002 18Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 21H14.5C19.5 21 21.5 19 21.5 14V8C21.5 3 19.5 1 14.5 1H8.5C3.5 1 1.5 3 1.5 8V14C1.5 19 3.5 21 8.5 21Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      )}
    </svg>
  );
};
