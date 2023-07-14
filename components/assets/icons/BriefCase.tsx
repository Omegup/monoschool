import { widths } from '@omegup-school/ui-configs/sizes';

export const BriefCase = ({
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
<path d="M8.49995 22H16.4999C20.5199 22 21.2399 20.39 21.4499 18.43L22.1999 10.43C22.4699 7.99 21.7699 6 17.4999 6H7.49995C3.22995 6 2.52995 7.99 2.79995 10.43L3.54995 18.43C3.75995 20.39 4.47995 22 8.49995 22Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 6V5.2C8.5 3.43 8.5 2 11.7 2H13.3C16.5 2 16.5 3.43 16.5 5.2V6" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 13V14C14.5 14.01 14.5 14.01 14.5 14.02C14.5 15.11 14.49 16 12.5 16C10.52 16 10.5 15.12 10.5 14.03V13C10.5 12 10.5 12 11.5 12H13.5C14.5 12 14.5 12 14.5 13Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.15 11C19.84 12.68 17.2 13.68 14.5 14.02" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.12 11.27C5.37 12.81 7.91 13.74 10.5 14.03" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
  );
};
