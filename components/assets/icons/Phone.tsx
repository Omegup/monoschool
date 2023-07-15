import { widths } from '@omegup-school/ui-configs/sizes';

export const Phone = ({
  width = widths.icon.svg,
  height = widths.icon.svg,
  color = 'currentColor',
}: {
  color?: string;
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    {...{ width, height }}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_4691_26311"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="18"
      height="19"
    >
      <path
        d="M19.2217 15.7368L16.6817 15.4468C16.0717 15.3768 15.4717 15.5868 15.0417 16.0168L13.2017 17.8568C10.3717 16.4168 8.05174 14.1068 6.61174 11.2668L8.46174 9.41682C8.89174 8.98682 9.10174 8.38682 9.03174 7.77682L8.74174 5.25682C8.62174 4.24682 7.77174 3.48682 6.75174 3.48682H5.02174C3.89174 3.48682 2.95174 4.42682 3.02174 5.55682C3.55174 14.0968 10.3817 20.9168 18.9117 21.4468C20.0417 21.5168 20.9817 20.5768 20.9817 19.4468V17.7168C20.9917 16.7068 20.2317 15.8568 19.2217 15.7368Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask0_4691_26311)">
      <rect y="0.46875" width="24" height="24" fill={color} />
    </g>
  </svg>
);
