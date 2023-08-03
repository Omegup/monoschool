import React from 'react'
import { widths } from '@omegup-school/ui-configs/sizes';

export const Profile = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.62 12.78C12.55 12.77 12.46 12.77 12.38 12.78C10.62 12.72 9.21997 11.28 9.21997 9.50998C9.21997 7.69998 10.68 6.22998 12.5 6.22998C14.31 6.22998 15.78 7.69998 15.78 9.50998C15.77 11.28 14.38 12.72 12.62 12.78Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.24 19.3801C17.46 21.0101 15.1 22.0001 12.5 22.0001C9.90001 22.0001 7.54001 21.0101 5.76001 19.3801C5.86001 18.4401 6.46001 17.5201 7.53001 16.8001C10.27 14.9801 14.75 14.9801 17.47 16.8001C18.54 17.5201 19.14 18.4401 19.24 19.3801Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
