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
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="home">
<path id="Vector" d="M12 18V15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_2" d="M10.07 2.81985L3.14002 8.36985C2.36002 8.98985 1.86002 10.2999 2.03002 11.2799L3.36002 19.2399C3.60002 20.6599 4.96002 21.8099 6.40002 21.8099H17.6C19.03 21.8099 20.4 20.6499 20.64 19.2399L21.97 11.2799C22.13 10.2999 21.63 8.98985 20.86 8.36985L13.93 2.82985C12.86 1.96985 11.13 1.96985 10.07 2.81985Z" stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
    </svg>
  );
};
