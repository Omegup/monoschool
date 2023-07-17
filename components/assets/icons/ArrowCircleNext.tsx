
import { widths } from '@omegup-school/ui-configs/sizes';

export const ArrowCircle = ({
  width = widths.icon.svg,
  height = width,

}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (   <svg
    width={width}
    height={height}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
 <g id="arrow-circle-right">
<path id="Vector" d="M35.1407 64.1666C51.2488 64.1666 64.3073 51.1081 64.3073 34.9999C64.3073 18.8916 51.2488 5.83325 35.1407 5.83325C19.0324 5.83325 5.974 18.8916 5.974 34.9999C5.974 51.1081 19.0324 64.1666 35.1407 64.1666Z" stroke="#5F6C7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_2" d="M31.4656 45.2959L41.7322 35L31.4656 24.7041" stroke="#5F6C7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>)}