import React from 'react'
import { widths } from '@omegup-school/ui-atoms/sizes';

export const Notification = ({
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
      <path d="M12.5 6.43994V9.76994" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M12.52 2C8.84002 2 5.86002 4.98 5.86002 8.66V10.76C5.86002 11.44 5.58002 12.46 5.23002 13.04L3.96002 15.16C3.18002 16.47 3.72002 17.93 5.16002 18.41C9.94002 20 15.11 20 19.89 18.41C21.24 17.96 21.82 16.38 21.09 15.16L19.82 13.04C19.47 12.46 19.19 11.43 19.19 10.76V8.66C19.18 5 16.18 2 12.52 2Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M15.83 18.8201C15.83 20.6501 14.33 22.1501 12.5 22.1501C11.59 22.1501 10.75 21.7701 10.15 21.1701C9.55004 20.5701 9.17004 19.7301 9.17004 18.8201" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
    </svg>
  )
}
