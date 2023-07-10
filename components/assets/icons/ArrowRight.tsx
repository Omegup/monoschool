import { widths } from '@omegup-school/ui-configs/sizes';

export const ArrowRight = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6664 8.74321L11.0247 7.10153L8.34975 4.42653C7.78307 3.86819 6.81641 4.26819 6.81641 5.06819V10.2599V14.9349C6.81641 15.7349 7.78307 16.1349 8.34975 15.5682L12.6664 11.2515C13.3581 10.5682 13.3581 9.43488 12.6664 8.74321Z" fill={color}/>
    </svg>
    
  );
};
