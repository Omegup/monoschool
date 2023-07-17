import { widths } from '@omegup-school/ui-configs/sizes';

export const ArrowCirclePrev = ({
  width = widths.icon.svg,
  height = width,

}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (<svg
    width={width}
    height={height}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="arrow-circleLeft">
      <path id="Vector" d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path id="Vector_2" d="M13.76 15.53L10.24 12L13.76 8.46997" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>

  )
}