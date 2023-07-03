import { widths } from '@omegup-school/ui-atoms/sizes';

export const Home = ({
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
      <path d="M12.5 18V15"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M10.57 2.81997L3.64002 8.36997C2.86002 8.98997 2.36002 10.3 2.53002 11.28L3.86002 19.24C4.10002 20.66 5.46002 21.81 6.90002 21.81H18.1C19.53 21.81 20.9 20.65 21.14 19.24L22.47 11.28C22.63 10.3 22.13 8.98997 21.36 8.36997L14.43 2.82997C13.36 1.96997 11.63 1.96997 10.57 2.81997Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  );
};
