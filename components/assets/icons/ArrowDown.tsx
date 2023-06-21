import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const ArrowDown = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
  bold,
  rotation,
}: {
  width?: string;
  height?: string;
  color?: string;
  bold?: boolean;
  rotation?: string;
}) => {
  return (
    <svg
     
      style={{ transform: `rotate(${rotation})` }}
      fill="none"
      width="15" height="8" viewBox="0 0 15 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bold ? (
        <>
          <path
            d="M13.4188 0.179691H7.1888H1.57877C0.618772 0.179691 0.138772 1.33969 0.818772 2.0197L5.9988 7.1997C6.8288 8.0297 8.1788 8.0297 9.0088 7.1997L10.9788 5.2297L14.1888 2.0197C14.8588 1.33969 14.3788 0.179691 13.4188 0.179691Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M17.4201 0.949951L10.9001 7.47C10.1301 8.24 8.8701 8.24 8.1001 7.47L1.58008 0.949951"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      )}
    </svg>
  );
};
