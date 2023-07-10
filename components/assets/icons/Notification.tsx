
import { widths } from '@omegup-school/ui-configs/sizes';
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
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
 <g id="notification-bing">
<path id="Vector" d="M12 6.43994V9.76994" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path id="Vector_2" d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path id="Vector_3" d="M15.33 18.8203C15.33 20.6503 13.83 22.1503 12 22.1503C11.09 22.1503 10.25 21.7703 9.65004 21.1703C9.05004 20.5703 8.67004 19.7303 8.67004 18.8203" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
</g>  </svg>
  );
};

