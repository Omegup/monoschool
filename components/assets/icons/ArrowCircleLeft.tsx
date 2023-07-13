import { colors } from '@omegup-school/ui-configs/colors';
import { widths } from '@omegup-school/ui-configs/sizes';

export const ArrowCircleLeft = ({
  width = widths.icon.svg,
  height = width,
  color = colors.blue[500],

}: {
  width?: string;
  height?: string;
  color?: string;

}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 20"
    transform='rotate(180)'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" width="20" height="20" rx="10" fill="#FFFFFE" />
    <path
      d="M8.83337 13.3334L12.1667 10.0001L8.83337 6.66675"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  
);
