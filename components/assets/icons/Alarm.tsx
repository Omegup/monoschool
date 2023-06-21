import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const Alarm = ({
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
            d="M21.5 20.25H20.5V14C20.5 9.03 16.47 5 11.5 5C6.53 5 2.5 9.03 2.5 14V20.25H1.5C1.09 20.25 0.75 20.59 0.75 21C0.75 21.41 1.09 21.75 1.5 21.75H21.5C21.91 21.75 22.25 21.41 22.25 21C22.25 20.59 21.91 20.25 21.5 20.25Z"
            fill={color}
          />
          <path
            d="M11.5 2.75C11.09 2.75 10.75 2.41 10.75 2V1C10.75 0.59 11.09 0.25 11.5 0.25C11.91 0.25 12.25 0.59 12.25 1V2C12.25 2.41 11.91 2.75 11.5 2.75Z"
            fill={color}
          />
          <path
            d="M4.50141 4.75141C4.31141 4.75141 4.12141 4.68141 3.97141 4.53141L2.97141 3.53141C2.68141 3.24141 2.68141 2.76141 2.97141 2.47141C3.26141 2.18141 3.74141 2.18141 4.03141 2.47141L5.03141 3.47141C5.32141 3.76141 5.32141 4.24141 5.03141 4.53141C4.88141 4.68141 4.69141 4.75141 4.50141 4.75141Z"
            fill={color}
          />
          <path
            d="M18.5014 4.75141C18.3114 4.75141 18.1214 4.68141 17.9714 4.53141C17.6814 4.24141 17.6814 3.76141 17.9714 3.47141L18.9714 2.47141C19.2614 2.18141 19.7414 2.18141 20.0314 2.47141C20.3214 2.76141 20.3214 3.24141 20.0314 3.53141L19.0314 4.53141C18.8814 4.68141 18.6914 4.75141 18.5014 4.75141Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M2.5 22H22.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 6C7.53 6 3.5 10.03 3.5 15V22H21.5V15C21.5 10.03 17.47 6 12.5 6Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 2V3"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 4L5.5 5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.5 4L19.5 5"
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
