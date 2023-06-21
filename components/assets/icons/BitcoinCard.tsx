import { widths } from '@omegup-school/ui-atoms/sizes';
import { IconProps } from './Icons.types';

export const BitcoinCard = ({
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
            d="M15.88 7.75C15.88 7.53 15.64 7.25 15.38 7.25H13.44H13V8.25H15.38C15.65 8.25 15.88 8.03 15.88 7.75Z"
            fill={color}
          />
          <path
            d="M15.82 9.75H15.37H13V10.75H13.44H15.82C16.19 10.75 16.5 10.52 16.5 10.25C16.5 9.98 16.19 9.75 15.82 9.75Z"
            fill={color}
          />
          <path
            d="M16.35 0.398438H4.65C2.36 0.398438 0.5 2.24844 0.5 4.53844V13.4584C0.5 15.7484 2.36 17.5984 4.65 17.5984H16.35C18.64 17.5984 20.5 15.7484 20.5 13.4584V4.53844C20.5 2.24844 18.64 0.398438 16.35 0.398438ZM7.75 9.7484H3.75C3.34 9.7484 3 9.4084 3 8.9984C3 8.5884 3.34 8.2484 3.75 8.2484H7.75C8.16 8.2484 8.5 8.5884 8.5 8.9984C8.5 9.4084 8.16 9.7484 7.75 9.7484ZM15.82 12.2484H14.76V12.7484C14.76 13.1584 14.42 13.4984 14.01 13.4984C13.6 13.4984 13.26 13.1584 13.26 12.7484V12.2484H12.25H11.25C10.84 12.2484 10.5 11.9084 10.5 11.4984C10.5 11.0884 10.84 10.7484 11.25 10.7484H11.5V8.9984V7.2484H11.25C10.84 7.2484 10.5 6.90844 10.5 6.49844C10.5 6.08844 10.84 5.74844 11.25 5.74844H12.25H13.26V5.24844C13.26 4.83844 13.6 4.49844 14.01 4.49844C14.42 4.49844 14.76 4.83844 14.76 5.24844V5.74844H15.37C16.44 5.74844 17.37 6.67844 17.37 7.7484C17.37 8.0784 17.28 8.3884 17.14 8.6684C17.66 9.0384 18 9.6084 18 10.2484C18 11.3484 17.02 12.2484 15.82 12.2484Z"
            fill={color}
          />
        </>
      ) : (
        <>
          <path
            d="M1.5 7.5H12.5"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.5 15.5H7.5"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 15.5H14"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.5 10.33V15.11C21.5 18.62 20.61 19.5 17.06 19.5H5.94C2.39 19.5 1.5 18.62 1.5 15.11V6.89001C1.5 3.38001 2.39 2.5 5.94 2.5H12.78"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 2.25H19.63C20.32 2.25 20.88 2.88 20.88 3.5C20.88 4.19 20.32 4.75 19.63 4.75H16.5V2.25Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 4.75H20.07C20.86 4.75 21.5 5.31 21.5 6C21.5 6.69 20.86 7.25 20.07 7.25H16.5V4.75Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.26 7.25V8.5"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.26 1V2.25"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.69 2.25H15.5"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.69 7.25H15.5"
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
