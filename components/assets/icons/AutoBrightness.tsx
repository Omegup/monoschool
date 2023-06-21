import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const AutoBrightness = ({
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
            d="M20.0609 8.7381L18.7109 7.15812C18.4609 6.85812 18.2509 6.29813 18.2509 5.89813V4.19812C18.2509 3.13812 17.3809 2.26812 16.3209 2.26812H14.6209C14.2209 2.26812 13.6509 2.05813 13.3509 1.80812L11.7709 0.458118C11.0809 -0.131873 9.9509 -0.131873 9.2609 0.458118L7.66086 1.80812C7.36086 2.05813 6.80086 2.26812 6.40086 2.26812H4.67086C3.61086 2.26812 2.74086 3.13812 2.74086 4.19812V5.89813C2.74086 6.28813 2.54086 6.84812 2.29086 7.14812L0.940859 8.7381C0.360859 9.4381 0.360859 10.5581 0.940859 11.2381L2.29086 12.8281C2.54086 13.1181 2.74086 13.6881 2.74086 14.0781V15.7881C2.74086 16.8481 3.61086 17.7181 4.67086 17.7181H6.41086C6.80086 17.7181 7.37086 17.9281 7.67086 18.1781L9.2509 19.5281C9.9409 20.1181 11.0709 20.1181 11.7609 19.5281L13.3409 18.1781C13.6409 17.9281 14.2009 17.7181 14.6009 17.7181H16.3009C17.3609 17.7181 18.2309 16.8481 18.2309 15.7881V14.0881C18.2309 13.6881 18.4409 13.1281 18.6909 12.8281L20.0409 11.2481C20.6509 10.5681 20.6509 9.4381 20.0609 8.7381ZM13.3109 14.2381L12.3309 12.0381C12.3009 12.0381 12.2709 12.0581 12.2409 12.0581H8.7409C8.7109 12.0581 8.6809 12.0481 8.6509 12.0381L7.67086 14.2381L6.30086 13.6281L9.8009 5.74813H11.1709L14.6709 13.6281L13.3109 14.2381Z"
            fill={color}
          />
          <path
            d="M9.32031 10.5602H11.6803L10.5003 7.91016L9.32031 10.5602Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M10.25 1.44995C10.95 0.859946 12.08 0.859946 12.76 1.44995L14.34 2.79995C14.64 3.04995 15.21 3.25995 15.61 3.25995H17.31C18.37 3.25995 19.24 4.12995 19.24 5.18995V6.88995C19.24 7.28995 19.45 7.84995 19.7 8.14995L21.05 9.7299C21.64 10.4299 21.64 11.5599 21.05 12.2399L19.7 13.8199C19.45 14.1199 19.24 14.6799 19.24 15.0799V16.7799C19.24 17.8399 18.37 18.7099 17.31 18.7099H15.61C15.21 18.7099 14.65 18.9199 14.35 19.1699L12.77 20.5199C12.07 21.1099 10.94 21.1099 10.26 20.5199L8.68001 19.1699C8.38001 18.9199 7.81 18.7099 7.42 18.7099H5.67C4.61 18.7099 3.74 17.8399 3.74 16.7799V15.0699C3.74 14.6799 3.54 14.1099 3.29 13.8199L1.94 12.2299C1.36 11.5399 1.36 10.4199 1.94 9.7299L3.29 8.13995C3.54 7.83995 3.74 7.27995 3.74 6.88995V5.19995C3.74 4.13995 4.61 3.26995 5.67 3.26995H7.4C7.8 3.26995 8.36 3.05995 8.66 2.80995L10.25 1.44995Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 14.9401L11.5 7.06006L15 14.9401"
            stroke={color}
            stroke-width="1.5"
            stroke-linejoin="bevel"
          />
          <path
            d="M13.25 12.3101H9.75"
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
