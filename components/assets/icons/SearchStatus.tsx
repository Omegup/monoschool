import { colors } from '@omegup-school/ui-atoms/colors';
import { widths } from '@omegup-school/ui-atoms/sizes';

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
    <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 9.66669C16.6667 13.8084 13.3084 17.1667 9.16669 17.1667C5.02502 17.1667 1.66669 13.8084 1.66669 9.66669C1.66669 5.52502 5.02502 2.16669 9.16669 2.16669" stroke="#5F6C7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.7749 17.7415C16.2166 19.0749 17.2249 19.2082 17.9999 18.0415C18.7082 16.9749 18.2416 16.0999 16.9582 16.0999C16.0082 16.0915 15.4749 16.8332 15.7749 17.7415Z" stroke="#5F6C7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.6667 4.66669H16.6667" stroke="#5F6C7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.6667 7.16669H14.1667" stroke="#5F6C7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  );
};
