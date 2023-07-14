
import { widths } from '@omegup-school/ui-configs/sizes';

export const AddCircleDark = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
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
    <g id="add-circle">
      <path id="Vector" d="M35.8594 64.1666C51.9011 64.1666 65.0261 51.0416 65.0261 34.9999C65.0261 18.9583 51.9011 5.83325 35.8594 5.83325C19.8177 5.83325 6.69275 18.9583 6.69275 34.9999C6.69275 51.0416 19.8177 64.1666 35.8594 64.1666Z" stroke="#5F6C7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path id="Vector_2" d="M24.1927 35H47.5261" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path id="Vector_3" d="M35.8594 46.6666V23.3333" stroke="#5F6C7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>)
}