import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const Bank = ({
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
            d="M22.5 17V20H2.5V17C2.5 16.45 2.95 16 3.5 16H21.5C22.05 16 22.5 16.45 22.5 17Z"
            fill={color}
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M7.5 9H5.5V16H7.5V9Z" fill={color} />
          <path d="M11.5 9H9.5V16H11.5V9Z" fill={color} />
          <path d="M15.5 9H13.5V16H15.5V9Z" fill={color} />
          <path d="M19.5 9H17.5V16H19.5V9Z" fill={color} />
          <path
            d="M23.5 20.75H1.5C1.09 20.75 0.75 20.41 0.75 20C0.75 19.59 1.09 19.25 1.5 19.25H23.5C23.91 19.25 24.25 19.59 24.25 20C24.25 20.41 23.91 20.75 23.5 20.75Z"
            fill={color}
          />
          <path
            d="M21.87 3.74984L12.87 0.149844C12.67 0.0698438 12.33 0.0698438 12.13 0.149844L3.13 3.74984C2.78 3.88984 2.5 4.29984 2.5 4.67984V7.99984C2.5 8.5498 2.95 8.9998 3.5 8.9998H21.5C22.05 8.9998 22.5 8.5498 22.5 7.99984V4.67984C22.5 4.29984 22.22 3.88984 21.87 3.74984ZM12.5 6.49984C11.67 6.49984 11 5.82984 11 4.99984C11 4.16984 11.67 3.49984 12.5 3.49984C13.33 3.49984 14 4.16984 14 4.99984C14 5.82984 13.33 6.49984 12.5 6.49984Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M12.87 1.15009L21.87 4.75006C22.22 4.89006 22.5 5.31006 22.5 5.68006V9.0001C22.5 9.5501 22.05 10.0001 21.5 10.0001H3.5C2.95 10.0001 2.5 9.5501 2.5 9.0001V5.68006C2.5 5.31006 2.78 4.89006 3.13 4.75006L12.13 1.15009C12.33 1.07009 12.67 1.07009 12.87 1.15009Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5 21H2.5V18C2.5 17.45 2.95 17 3.5 17H21.5C22.05 17 22.5 17.45 22.5 18V21Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 17V10"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 17V10"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 17V10"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 17V10"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.5 17V10"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.5 21H23.5"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 7.5C13.3284 7.5 14 6.82843 14 6C14 5.17157 13.3284 4.5 12.5 4.5C11.6716 4.5 11 5.17157 11 6C11 6.82843 11.6716 7.5 12.5 7.5Z"
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
