import { widths, rotation } from '@omegup-school/ui-configs/sizes';
import { ArrowDownSecond } from './ArrowDownSecond';
import { IconProps } from './Icons.types';

export const ArrowUpSecond = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (

    <svg width={width}
      height={height} viewBox="0 0 19 9"
      fill={color}
      xmlns="http://www.w3.org/2000/svg">
      {bold ? (
        <>
          <path d="M14.1806 5.9783L10.9706 2.7683L9.0106 0.798281C8.1806 -0.0317187 6.8306 -0.0317187 6.0006 0.798281L0.82056 5.9783C0.14056 6.6583 0.63056 7.8183 1.58056 7.8183H7.1906H13.4206C14.3806 7.8183 14.8606 6.6583 14.1806 5.9783Z"
            fill={color} />
        </>
      ) : (
        <>
          <path d="M17.4201 8.0499L10.9001 1.52989C10.1301 0.759893 8.8701 0.759893 8.1001 1.52989L1.58008 8.0499"
            stroke={color}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
};
