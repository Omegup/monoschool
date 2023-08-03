import { widths } from '@omegup-school/ui-configs/sizes';

export const Teacher = ({
  width = widths.icon.svg,
  height = width,
  color = 'currentColor',
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.55 2.53004L4.53002 6.46004C2.60002 7.72004 2.60002 10.54 4.53002 11.8L10.55 15.73C11.63 16.44 13.41 16.44 14.49 15.73L20.48 11.8C22.4 10.54 22.4 7.73004 20.48 6.47004L14.49 2.54004C13.41 1.82004 11.63 1.82004 10.55 2.53004Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.13 13.0801L6.12 17.7701C6.12 19.0401 7.1 20.4001 8.3 20.8001L11.49 21.8601C12.04 22.0401 12.95 22.0401 13.51 21.8601L16.7 20.8001C17.9 20.4001 18.88 19.0401 18.88 17.7701V13.1301" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.9 15V9" stroke={color}strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    
  );
};
