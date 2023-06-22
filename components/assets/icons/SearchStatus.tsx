import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const SearchStatus = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (
    <svg width={width} height={height}  fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3226_125086)">
    <path d="M13.333 7.33331C13.333 10.6466 10.6463 13.3333 7.33301 13.3333C4.01967 13.3333 1.33301 10.6466 1.33301 7.33331C1.33301 4.01998 4.01967 1.33331 7.33301 1.33331" stroke="#91A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.6196 13.7932C12.973 14.8599 13.7796 14.9665 14.3996 14.0332C14.9663 13.1799 14.593 12.4799 13.5663 12.4799C12.8063 12.4732 12.3796 13.0665 12.6196 13.7932Z" stroke="#91A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.33301 3.33331H13.333" stroke="#91A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.33301 5.33331H11.333" stroke="#91A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_3226_125086">
    <rect width={width} height={height} fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  );
};
