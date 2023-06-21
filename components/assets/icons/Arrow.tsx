import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const Arrow = ({
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
            d="M11.5 21.75C11.09 21.75 10.75 21.41 10.75 21V19C10.75 18.59 11.09 18.25 11.5 18.25C11.91 18.25 12.25 18.59 12.25 19V21C12.25 21.41 11.91 21.75 11.5 21.75Z"
            fill={color}
          />
          <path
            d="M11.5 17.75C11.09 17.75 10.75 17.41 10.75 17V15C10.75 14.59 11.09 14.25 11.5 14.25C11.91 14.25 12.25 14.59 12.25 15V17C12.25 17.41 11.91 17.75 11.5 17.75Z"
            fill={color}
          />
          <path
            d="M11.5 13.75C11.09 13.75 10.75 13.41 10.75 13V10C10.75 5.73 14.23 2.25 18.5 2.25H21.5C21.91 2.25 22.25 2.59 22.25 3C22.25 3.41 21.91 3.75 21.5 3.75H18.5C15.05 3.75 12.25 6.55 12.25 10V13C12.25 13.41 11.91 13.75 11.5 13.75Z"
            fill={color}
          />
          <path
            d="M11.5 13.75C11.09 13.75 10.75 13.41 10.75 13V10C10.75 6.55 7.95 3.75 4.5 3.75H1.5C1.09 3.75 0.75 3.41 0.75 3C0.75 2.59 1.09 2.25 1.5 2.25H4.5C8.77 2.25 12.25 5.73 12.25 10V13C12.25 13.41 11.91 13.75 11.5 13.75Z"
            fill={color}
          />
          <path
            d="M3.50141 5.75141C3.31141 5.75141 3.12141 5.68141 2.97141 5.53141L0.971406 3.53141C0.681406 3.24141 0.681406 2.76141 0.971406 2.47141L2.97141 0.47141C3.26141 0.18141 3.74141 0.18141 4.03141 0.47141C4.32141 0.76141 4.32141 1.24141 4.03141 1.53141L2.56141 3.00141L4.03141 4.47141C4.32141 4.76141 4.32141 5.24141 4.03141 5.53141C3.88141 5.68141 3.69141 5.75141 3.50141 5.75141Z"
            fill={color}
          />
          <path
            d="M19.5014 5.75141C19.3114 5.75141 19.1214 5.68141 18.9714 5.53141C18.6814 5.24141 18.6814 4.76141 18.9714 4.47141L20.4414 3.00141L18.9714 1.53141C18.6814 1.24141 18.6814 0.76141 18.9714 0.47141C19.2614 0.18141 19.7414 0.18141 20.0314 0.47141L22.0314 2.47141C22.3214 2.76141 22.3214 3.24141 22.0314 3.53141L20.0314 5.53141C19.8814 5.68141 19.6914 5.75141 19.5014 5.75141Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M11.5 17V15"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 13V10C11.5 6.13 14.63 3 18.5 3H21.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.5 3H4.5C8.37 3 11.5 6.13 11.5 10V11V13"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 1L1.5 3L3.5 5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.5 1L21.5 3L19.5 5"
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
