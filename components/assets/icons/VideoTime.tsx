import { widths } from '@omegup-school/ui-configs/sizes';
import React from 'react'

export const VideoTime = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (
    <svg    width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_25_8648)">
        <path d="M22.5 9V15C22.5 15.22 22.5 15.44 22.48 15.65C21.66 14.64 20.41 14 19 14C17.94 14 16.96 14.37 16.19 14.99C15.15 15.81 14.5 17.08 14.5 18.5C14.5 19.91 15.14 21.16 16.15 21.98C15.94 22 15.72 22 15.5 22H9.5C4.5 22 2.5 20 2.5 15V9C2.5 4 4.5 2 9.5 2H15.5C20.5 2 22.5 4 22.5 9Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.02002 7.10986H21.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.02002 2.10986V6.96985" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.98 2.10986V6.5199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M23.5 18.5C23.5 19.85 22.9 21.05 21.97 21.88C21.17 22.57 20.14 23 19 23C17.92 23 16.92 22.62 16.15 21.98C15.14 21.16 14.5 19.91 14.5 18.5C14.5 17.08 15.15 15.81 16.19 14.99C16.96 14.37 17.94 14 19 14C20.41 14 21.66 14.64 22.48 15.65C23.12 16.42 23.5 17.42 23.5 18.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19.28 17.0901V18.7801L17.88 19.6201" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_25_8648">
          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>

  )
}
