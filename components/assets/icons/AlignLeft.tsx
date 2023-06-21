import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const AlignLeft = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
}: IconProps) => {
  
    return (
      <svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color={color}
      >{bold ?
        <>
        <path
          d="M14.8809 13.98V15.02C14.8809 16.61 14.2809 17.25 12.7609 17.25H0.880859V11.75H12.7609C14.2809 11.75 14.8809 12.39 14.8809 13.98Z"
          fill={color}
        />
        <path
          d="M9.8809 5.48V6.52C9.8809 8.11 9.2709 8.75 7.7609 8.75H0.880859V3.25H7.7609C9.2709 3.25 9.8809 3.89 9.8809 5.48Z"
          fill={color}
        />
        <path
          d="M0.879121 20C0.469121 20 0.129121 19.66 0.129121 19.25V0.75C0.119121 0.33 0.459121 0 0.879121 0C1.29912 0 1.62912 0.34 1.62912 0.75V19.25C1.61912 19.66 1.28912 20 0.879121 20Z"
          fill={color}
        />
      </>
    :<>
     
        <path
          d="M1.59998 18.25H13.4C14.9 18.25 15.5 17.61 15.5 16.02V14.98C15.5 13.39 14.9 12.75 13.4 12.75H1.59998"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.59998 4.25H8.39998C9.89998 4.25 10.5 4.89 10.5 6.48V7.52C10.5 9.11 9.89998 9.75 8.39998 9.75H1.59998"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 0.98999V20.99"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        </>
    }
      </svg>
    );
  
};

export default AlignLeft;
