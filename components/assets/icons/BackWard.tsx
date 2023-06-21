import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const BackWard = ({
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
            d="M20.4983 2.34032V9.6603C20.4983 11.1603 18.8683 12.1003 17.5683 11.3503L14.3983 9.5203L11.2283 7.6903L10.7383 7.4103V4.5903L11.2283 4.3103L14.3983 2.48032L17.5683 0.650316C18.8683 -0.0996841 20.4983 0.840315 20.4983 2.34032Z"
            fill={color}
          />
          <path
            d="M10.7414 2.34032V9.6603C10.7414 11.1603 9.1114 12.1003 7.82141 11.3503L4.64141 9.5203L1.47141 7.6903C0.181406 6.9403 0.181406 5.0603 1.47141 4.3103L4.64141 2.48032L7.82141 0.650316C9.1114 -0.0996841 10.7414 0.840315 10.7414 2.34032Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M21.5 3.33994V10.6599C21.5 12.1599 19.87 13.0999 18.57 12.3499L15.4 10.5299L12.23 8.7C12.03 8.58 11.87 8.45 11.74 8.29V5.73C11.87 5.57 12.03 5.44 12.23 5.32L15.4 3.48993L18.57 1.66996C19.87 0.899957 21.5 1.83994 21.5 3.33994Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.74 3.33994V10.6599C11.74 12.1599 10.11 13.0999 8.80999 12.3499L5.64001 10.5299L2.47 8.7C1.17 7.95 1.17 6.08 2.47 5.32L5.64001 3.48993L8.80999 1.66996C10.11 0.899957 11.74 1.83994 11.74 3.33994Z"
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
