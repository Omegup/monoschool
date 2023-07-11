import { widths } from '@omegup-school/ui-configs/sizes';

export const Avatar = ({
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
      preserveAspectRatio="xMidYMid meet">
 <g transform="translate(0.000000,106.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M385 905 c-36 -19 -75 -64 -75 -87 0 -9 -4 -19 -9 -22 -5 -3 -12 -62
-16 -130 -6 -105 -10 -123 -24 -122 -13 1 -16 -10 -15 -63 1 -43 6 -68 15 -75
8 -6 21 -31 29 -55 17 -54 109 -156 158 -177 47 -19 106 -18 150 5 58 30 118
87 142 134 11 23 30 53 41 67 11 14 22 49 26 78 5 45 3 52 -11 52 -14 0 -16 6
-12 27 12 54 11 162 -2 175 -7 7 -12 22 -12 34 0 12 -9 33 -20 47 -27 34 -174
104 -235 111 -27 4 -61 9 -75 11 -14 3 -38 -2 -55 -10z m198 -189 c38 -29 9
-66 -52 -66 -22 0 -35 7 -47 25 -9 14 -15 27 -13 29 33 27 84 33 112 12z
m-203 -183 c-1 -18 -19 -35 -29 -28 -9 5 -9 10 0 21 12 15 29 19 29 7z m30 -3
c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z
m295 -51 c-4 -13 -1 -19 9 -19 24 0 19 -17 -9 -36 -20 -13 -33 -15 -57 -8 -39
12 -77 59 -60 76 9 9 13 7 18 -5 4 -11 18 -17 40 -17 30 0 34 3 34 26 0 23 2
25 15 14 9 -7 13 -21 10 -31z m-235 17 c0 -8 -8 -24 -19 -37 -22 -27 -83 -32
-107 -7 -14 14 -13 16 16 27 18 6 43 8 56 5 17 -4 26 -1 30 10 8 20 24 21 24
2z m57 -28 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m16 -145
c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35 -2 23 -4z"/>
</g>
    </svg>
  );
};
