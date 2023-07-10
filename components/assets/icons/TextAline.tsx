import { widths } from '@omegup-school/ui-configs/sizes';

export const TextAline = ({
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
 <g id="textalign-justifycenter">
<path id="Vector" d="M3 4.5H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_2" d="M3 9.5H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_3" d="M3 14.5H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_4" d="M3 19.5H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
    </svg>
  );
};
