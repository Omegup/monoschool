
import { widths } from '@omegup-school/ui-atoms/sizes';
export const Stickynote = ({
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
<g id="stickynote">
<path id="Vector" d="M8 2V5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_2" d="M16 2V5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_3" d="M7 11H15" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_4" d="M7 15H12" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_5" d="M15 22H9C4 22 3 19.94 3 15.82V9.65C3 4.95 4.67 3.69 8 3.5H16C19.33 3.68 21 4.95 21 9.65V16" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_6" d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
  );
};

