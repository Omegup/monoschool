import { colors } from '@omegup-school/ui-atoms/colors';
import { widths } from '@omegup-school/ui-atoms/sizes';

export const Arrow = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (
    <svg width={width} className='icon-arrow'
    height={height} viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
    <path  
     color={color}
     d="M15.6997 10.4919L13.7297 8.52188L10.5197 5.31188C9.83969 4.64188 8.67969 5.12188 8.67969 6.08188V12.3119V17.9219C8.67969 18.8819 9.83969 19.3619 10.5197 18.6819L15.6997 13.5019C16.5297 12.6819 16.5297 11.3219 15.6997 10.4919Z"/>
    </svg>
    
  );
};
