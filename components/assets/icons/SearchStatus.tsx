import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';


export const SearchStatus = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 25 24'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 11C20.5 15.97 16.47 20 11.5 20C6.53 20 2.5 15.97 2.5 11C2.5 6.03 6.53 2 11.5 2"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.4299 20.6898C19.9599 22.2898 21.1699 22.4498 22.0999 21.0498C22.9499 19.7698 22.3899 18.7198 20.8499 18.7198C19.7099 18.7098 19.0699 19.5998 19.4299 20.6898Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 5H20.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 8H17.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
