import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const AddCircle = ({
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
            d="M10.5 0C4.99 0 0.5 4.49 0.5 10C0.5 15.51 4.99 20 10.5 20C16.01 20 20.5 15.51 20.5 10C20.5 4.49 16.01 0 10.5 0ZM14.5 10.75H11.25V14C11.25 14.41 10.91 14.75 10.5 14.75C10.09 14.75 9.75 14.41 9.75 14V10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H9.75V6C9.75 5.59 10.09 5.25 10.5 5.25C10.91 5.25 11.25 5.59 11.25 6V9.25H14.5C14.91 9.25 15.25 9.59 15.25 10C15.25 10.41 14.91 10.75 14.5 10.75Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M11.5 21C17 21 21.5 16.5 21.5 11C21.5 5.5 17 1 11.5 1C6 1 1.5 5.5 1.5 11C1.5 16.5 6 21 11.5 21Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 11H15.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 15V7"
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
