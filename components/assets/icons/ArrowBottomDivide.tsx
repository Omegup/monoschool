import { widths } from '@omegup-school/ui-configs/sizes';

export const ArrowBottomDivide = ({
  width = widths.icon.svg,
  height = widths.icon.svg,
  color = 'currentColor',
}: {
  color?: string;
  width?: number | string;
  height?: number | string;
}) => (
  <svg {...{width,height}} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
<path d="M9.32919 6H14.6692C17.9892 6 19.3392 8.35 17.6892 11.22L16.9492 12.5C16.7692 12.81 16.4392 13 16.0792 13H7.91919C7.55919 13 7.22919 12.81 7.04919 12.5L6.30919 11.22C4.65919 8.35 6.00919 6 9.32919 6Z" fill={color}/>
<path d="M8.79152 14H15.2215C15.6115 14 15.8515 14.42 15.6515 14.75L15.0115 15.85C13.3615 18.72 10.6415 18.72 8.99152 15.85L8.35152 14.75C8.16152 14.42 8.40152 14 8.79152 14Z" fill={color}/>
</svg>

)
