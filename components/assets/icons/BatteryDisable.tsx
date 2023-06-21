import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const BatteryDisable = ({
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
    >
      {bold ? (
        <>
          <path
            d="M18.9192 8.00047C18.7792 7.99047 18.5992 7.98047 18.3992 7.98047C18.0092 7.98047 17.6992 8.29047 17.6992 8.68047V13.3305C17.6992 13.7205 18.0092 14.0305 18.3992 14.0305C18.5992 14.0305 18.7692 14.0205 18.9392 14.0105C20.4992 13.8305 20.4992 12.7305 20.4992 11.9305V10.0705C20.4992 9.2705 20.4992 8.17047 18.9192 8.00047Z"
            fill={color}
          />
          <path
            d="M16.7794 9.1405V12.8605C16.7794 15.8105 14.3794 18.2105 11.4294 18.2105H7.75942C6.96942 18.2105 6.48942 17.3405 6.90942 16.6805L14.1694 5.2005C14.5294 4.6305 15.3394 4.5805 15.7894 5.0905C16.5094 5.9205 16.7794 7.2105 16.7794 9.1405Z"
            fill={color}
          />
          <path
            d="M14.9 0.870361C14.55 0.650361 14.09 0.750361 13.87 1.10036L12.16 3.81036C11.93 3.80036 11.69 3.79036 11.43 3.79036H5.85C1.75 3.79036 0.5 5.04036 0.5 9.1404V12.8604C0.5 15.9104 1.2 17.3704 3.24 17.9204L1.87 20.1004C1.65 20.4504 1.75 20.9104 2.1 21.1304C2.22 21.2104 2.36 21.2504 2.5 21.2504C2.75 21.2504 2.99 21.1304 3.13 20.9004L15.13 1.90036C15.36 1.55036 15.25 1.09036 14.9 0.870361Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M20 8.5C21.5 8.5 21.5 9 21.5 10V12C21.5 13 21.5 13.5 20 13.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 20.5L15.5 1.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.5 4C2.5 4 1.5 5 1.5 9V13C1.5 16.4 2.22 17.63 4.89 17.92"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 18C16.5 18 17.5 17 17.5 13V8.99996C17.5 5.60996 16.78 4.36996 14.13 4.07996"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      )}
    </svg>
  );
};
