import { widths } from '@omegup-school/ui-configs/sizes';
import { IconProps } from './Icons.types';

export const Essential = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bold ? (
        <>
          // to do bassem
        </>
      ) : (
        <>
          <path
            d="M18.3334 18.9583H1.66669C1.32502 18.9583 1.04169 18.675 1.04169 18.3333C1.04169 17.9917 1.32502 17.7083 1.66669 17.7083H18.3334C18.675 17.7083 18.9584 17.9917 18.9584 18.3333C18.9584 18.675 18.675 18.9583 18.3334 18.9583Z"
            fill={color}
            fill-opacity="0.88"
          />
          <path
            d="M17.4083 18.9583C17.0667 18.9583 16.7833 18.675 16.7833 18.3333V10.8333C16.7833 9.79999 15.8167 8.95833 14.6333 8.95833H5.36667C4.18334 8.95833 3.21667 9.79999 3.21667 10.8333V18.3333C3.21667 18.675 2.93334 18.9583 2.59167 18.9583C2.25001 18.9583 1.96667 18.675 1.96667 18.3333V10.8333C1.96667 9.10833 3.49167 7.70833 5.36667 7.70833H14.625C16.5 7.70833 18.025 9.10833 18.025 10.8333V18.3333C18.0333 18.675 17.75 18.9583 17.4083 18.9583Z"
            fill={color}
            fill-opacity="0.88"
          />
          <path
            d="M15.3667 8.95834C15.025 8.95834 14.7417 8.675 14.7417 8.33334V5.975C14.7417 5.32501 14.1167 4.79167 13.3584 4.79167H6.65003C5.88336 4.79167 5.2667 5.32501 5.2667 5.975V8.33334C5.2667 8.675 4.98336 8.95834 4.6417 8.95834C4.30003 8.95834 4.00836 8.675 4.00836 8.33334V5.975C4.00836 4.63334 5.1917 3.54167 6.6417 3.54167H13.35C14.8 3.54167 15.9834 4.63334 15.9834 5.975V8.33334C15.9917 8.675 15.7084 8.95834 15.3667 8.95834Z"
            fill={color}
            fill-opacity="0.88"
          />
          <path
            d="M14.4416 14.7914C13.475 14.7914 12.6916 14.0081 12.6916 13.0414V12.7831C12.6916 12.5081 12.4666 12.2831 12.1916 12.2831C11.9166 12.2831 11.6916 12.5081 11.6916 12.7831V13.0414C11.6916 14.0081 10.9083 14.7914 9.94163 14.7914C8.97496 14.7914 8.19163 14.0081 8.19163 13.0414V12.7831C8.19163 12.5081 7.96663 12.2831 7.69163 12.2831C7.41663 12.2831 7.19163 12.5081 7.19163 12.7831V13.0414C7.19163 14.0081 6.40829 14.7914 5.44163 14.7914C4.47496 14.7914 3.69163 14.0081 3.69163 13.0414V12.7664C3.69163 12.4998 3.47496 12.2748 3.19996 12.2664H2.89163C2.54996 12.2581 2.26663 11.9748 2.27496 11.6331C2.28329 11.2914 2.55829 11.0164 2.89996 11.0164H2.90829H3.21663C4.16663 11.0331 4.94163 11.8164 4.94163 12.7664V13.0414C4.94163 13.3164 5.16663 13.5414 5.44163 13.5414C5.71663 13.5414 5.94163 13.3164 5.94163 13.0414V12.7831C5.94163 11.8164 6.72496 11.0331 7.69163 11.0331C8.65829 11.0331 9.44163 11.8164 9.44163 12.7831V13.0414C9.44163 13.3164 9.66663 13.5414 9.94163 13.5414C10.2166 13.5414 10.4416 13.3164 10.4416 13.0414V12.7831C10.4416 11.8164 11.225 11.0331 12.1916 11.0331C13.1583 11.0331 13.9416 11.8164 13.9416 12.7831V13.0414C13.9416 13.3164 14.1666 13.5414 14.4416 13.5414C14.7166 13.5414 14.9416 13.3164 14.9416 13.0414V12.7831C14.9416 11.8164 15.725 11.0331 16.6916 11.0331H17.0666C17.4083 11.0331 17.6916 11.3164 17.6916 11.6581C17.6916 11.9998 17.4083 12.2831 17.0666 12.2831H16.6916C16.4166 12.2831 16.1916 12.5081 16.1916 12.7831V13.0414C16.1916 14.0081 15.4083 14.7914 14.4416 14.7914Z"
            fill={color}
            fill-opacity="0.88"
          />
          <path
            d="M6.66669 4.79167C6.32502 4.79167 6.04169 4.50833 6.04169 4.16667V2.5C6.04169 2.15833 6.32502 1.875 6.66669 1.875C7.00835 1.875 7.29169 2.15833 7.29169 2.5V4.16667C7.29169 4.50833 7.00835 4.79167 6.66669 4.79167Z"
            fill={color}
            fill-opacity="0.88"
          />
          <path
            d="M13.3333 4.79167C12.9916 4.79167 12.7083 4.50833 12.7083 4.16667V2.5C12.7083 2.15833 12.9916 1.875 13.3333 1.875C13.675 1.875 13.9583 2.15833 13.9583 2.5V4.16667C13.9583 4.50833 13.675 4.79167 13.3333 4.79167Z"
            fill={color}
            fill-opacity="0.88"
          />
          <path
            d="M10 4.79167C9.65833 4.79167 9.375 4.50834 9.375 4.16667V1.66667C9.375 1.32501 9.65833 1.04167 10 1.04167C10.3417 1.04167 10.625 1.32501 10.625 1.66667V4.16667C10.625 4.50834 10.3417 4.79167 10 4.79167Z"
            fill={color}
            fill-opacity="0.88"
          />
        </>
      )}
    </svg>
  );
};