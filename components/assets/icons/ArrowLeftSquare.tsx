import { rotation, widths } from '@omegup-school/ui-configs/sizes';
import { ArrowDownSquare } from './ArrowDownSquare';
import { IconProps } from './Icons.types';

export const ArrowLeftSquare = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  return (

    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bold ? (
        <>
          <path d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM12.29 13C12.58 13.29 12.58 13.77 12.29 14.06C12.14 14.21 11.95 14.28 11.76 14.28C11.57 14.28 11.38 14.21 11.23 14.06L7.7 10.53C7.41 10.24 7.41 9.76 7.7 9.47L11.23 5.94C11.52 5.65 12 5.65 12.29 5.94C12.58 6.23 12.58 6.71 12.29 7L9.29 10L12.29 13Z" fill={color} />
        </>
      ) : (
        <>
      
<path d="M8.5 21H14.5C19.5 21 21.5 19 21.5 14V8C21.5 3 19.5 1 14.5 1H8.5C3.5 1 1.5 3 1.5 8V14C1.5 19 3.5 21 8.5 21Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.76 14.53L9.23999 11L12.76 7.46997" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>


        </>
      )}
    </svg>
  );
};
