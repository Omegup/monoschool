import { colors } from '@omegup-school/ui-atoms/colors';

export const Logo = ({ fill = colors.blue[500] }: { fill?: string }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M73.3334 36.6667C73.3428 34.3172 72.7311 32.007 71.5604 29.9699C70.3897 27.9329 68.7015 26.2414 66.6668 25.0667C66.7169 24.49 66.7169 23.91 66.6668 23.3333C66.6668 20.6812 65.6132 18.1376 63.7378 16.2623C61.8625 14.3869 59.3189 13.3333 56.6668 13.3333H56.0668C55.5117 11.7944 54.5875 10.4151 53.3752 9.31648C52.163 8.21786 50.6997 7.43344 49.1137 7.032C47.5277 6.63057 45.8675 6.62438 44.2785 7.01399C42.6896 7.4036 41.2205 8.1771 40.0001 9.26666C38.7797 8.1771 37.3106 7.4036 35.7217 7.01399C34.1327 6.62438 32.4725 6.63057 30.8865 7.032C29.3005 7.43344 27.8372 8.21786 26.625 9.31648C25.4127 10.4151 24.4885 11.7944 23.9334 13.3333H23.3334C20.6813 13.3333 18.1377 14.3869 16.2624 16.2623C14.387 18.1376 13.3334 20.6812 13.3334 23.3333C13.2833 23.91 13.2833 24.49 13.3334 25.0667C11.4416 26.136 9.83988 27.6515 8.66758 29.4812C7.49528 31.311 6.78797 33.3996 6.60723 35.5651C6.4265 37.7307 6.7778 39.9076 7.63058 41.9064C8.48335 43.9052 9.81174 45.6652 11.5001 47.0333C10.4077 49.0709 9.86383 51.3575 9.92193 53.6687C9.98003 55.9799 10.6381 58.2362 11.8315 60.2163C13.0249 62.1964 14.7127 63.8322 16.7292 64.963C18.7457 66.0939 21.0216 66.6809 23.3334 66.6667H23.9334C24.4885 68.2056 25.4127 69.5849 26.625 70.6835C27.8372 71.7821 29.3005 72.5665 30.8865 72.968C32.4725 73.3694 34.1327 73.3756 35.7217 72.986C37.3106 72.5964 38.7797 71.8229 40.0001 70.7333C41.2205 71.8229 42.6896 72.5964 44.2785 72.986C45.8675 73.3756 47.5277 73.3694 49.1137 72.968C50.6997 72.5665 52.163 71.7821 53.3752 70.6835C54.5875 69.5849 55.5117 68.2056 56.0668 66.6667H56.6668C58.9645 66.6521 61.2195 66.044 63.2131 64.9014C65.2066 63.7587 66.871 62.1202 68.0448 60.1448C69.2186 58.1695 69.862 55.9243 69.9126 53.627C69.9632 51.3298 69.4192 49.0584 68.3334 47.0333C69.8882 45.7885 71.1444 44.2112 72.0096 42.4173C72.8749 40.6233 73.3272 38.6583 73.3334 36.6667ZM36.6668 28.5C35.9408 28.0848 35.1828 27.7281 34.4001 27.4333C33.5603 27.1504 32.6424 27.2127 31.8485 27.6066C31.0546 28.0004 30.4497 28.6935 30.1668 29.5333C29.8839 30.3732 29.9462 31.291 30.34 32.0849C30.7338 32.8788 31.4269 33.4838 32.2668 33.7667C33.5499 34.2305 34.6598 35.077 35.4467 36.1916C36.2335 37.3063 36.6594 38.6356 36.6668 40V45.1667C35.9408 44.7514 35.1828 44.3947 34.4001 44.1C33.5603 43.8171 32.6424 43.8794 31.8485 44.2732C31.0546 44.6671 30.4497 45.3601 30.1668 46.2C29.8839 47.0398 29.9462 47.9577 30.34 48.7516C30.7338 49.5455 31.4269 50.1504 32.2668 50.4333C33.5499 50.8972 34.6598 51.7436 35.4467 52.8583C36.2335 53.973 36.6594 55.3023 36.6668 56.6667V63.3333C36.6668 64.2174 36.3156 65.0652 35.6905 65.6904C35.0653 66.3155 34.2175 66.6667 33.3334 66.6667C32.6886 66.6625 32.0587 66.4713 31.5203 66.1163C30.9819 65.7613 30.5581 65.2577 30.3001 64.6667C30.859 64.3387 31.3937 63.9711 31.9001 63.5667C32.2372 63.2865 32.5157 62.9427 32.7199 62.5549C32.9241 62.1671 33.0499 61.7428 33.0902 61.3064C33.1304 60.87 33.0843 60.4299 32.9545 60.0113C32.8246 59.5927 32.6136 59.2037 32.3334 58.8667C32.0533 58.5296 31.7095 58.251 31.3217 58.0468C30.9339 57.8426 30.5096 57.7168 30.0732 57.6766C29.6368 57.6363 29.1967 57.6825 28.7781 57.8123C28.3594 57.9421 27.9705 58.1532 27.6334 58.4333C26.4299 59.4466 24.9067 60.0015 23.3334 60C21.5653 60 19.8696 59.2976 18.6194 58.0474C17.3692 56.7971 16.6668 55.1014 16.6668 53.3333C16.6827 52.0786 17.0525 50.8539 17.7334 49.8C18.4815 49.9342 19.2401 50.0011 20.0001 50C20.8842 50 21.732 49.6488 22.3571 49.0237C22.9823 48.3986 23.3334 47.5507 23.3334 46.6667C23.3334 45.7826 22.9823 44.9348 22.3571 44.3096C21.732 43.6845 20.8842 43.3333 20.0001 43.3333C19.2127 43.3379 18.4319 43.1907 17.7001 42.9C16.5013 42.4676 15.4515 41.7007 14.6751 40.69C13.8987 39.6794 13.4283 38.4673 13.3195 37.1975C13.2108 35.9278 13.4683 34.6534 14.0615 33.5255C14.6548 32.3975 15.5589 31.4632 16.6668 30.8333C17.1404 31.2691 17.6538 31.6597 18.2001 32C18.9692 32.442 19.8825 32.5604 20.7389 32.3291C21.5953 32.0978 22.3247 31.5358 22.7668 30.7667C23.2088 29.9975 23.3272 29.0843 23.0959 28.2279C22.8646 27.3715 22.3026 26.642 21.5334 26.2C21.0642 25.9411 20.6729 25.5613 20.4001 25.1C20.0919 24.5648 19.9525 23.9491 20.0001 23.3333C20.0001 22.4493 20.3513 21.6014 20.9764 20.9763C21.6015 20.3512 22.4494 20 23.3334 20C23.5657 19.9676 23.8012 19.9676 24.0334 20C24.2099 20.5356 24.4215 21.0589 24.6668 21.5667C24.8845 21.9486 25.1757 22.2837 25.5235 22.5527C25.8714 22.8216 26.269 23.0191 26.6934 23.1337C27.1179 23.2484 27.5609 23.2779 27.9968 23.2206C28.4327 23.1633 28.853 23.0204 29.2334 22.8C29.9725 22.3553 30.5104 21.6416 30.7341 20.8086C30.9579 19.9757 30.8501 19.0885 30.4334 18.3333C30.1538 17.822 30.0049 17.2494 30.0001 16.6667C30.0001 15.7826 30.3513 14.9348 30.9764 14.3096C31.6015 13.6845 32.4494 13.3333 33.3334 13.3333C34.2175 13.3333 35.0653 13.6845 35.6905 14.3096C36.3156 14.9348 36.6668 15.7826 36.6668 16.6667V28.5ZM62.3001 42.9C61.5684 43.1907 60.7875 43.3379 60.0001 43.3333C59.1161 43.3333 58.2682 43.6845 57.6431 44.3096C57.018 44.9348 56.6668 45.7826 56.6668 46.6667C56.6668 47.5507 57.018 48.3986 57.6431 49.0237C58.2682 49.6488 59.1161 50 60.0001 50C60.7601 50.0011 61.5187 49.9342 62.2668 49.8C62.9478 50.8539 63.3175 52.0786 63.3334 53.3333C63.3334 55.1014 62.6311 56.7971 61.3808 58.0474C60.1306 59.2976 58.4349 60 56.6668 60C55.0935 60.0015 53.5703 59.4466 52.3668 58.4333C51.6861 57.8675 50.8084 57.5953 49.927 57.6766C49.0456 57.7579 48.2326 58.1859 47.6668 58.8667C47.101 59.5474 46.8288 60.425 46.91 61.3064C46.9913 62.1878 47.4194 63.0009 48.1001 63.5667C48.6065 63.9711 49.1412 64.3387 49.7001 64.6667C49.4422 65.2577 49.0183 65.7613 48.4799 66.1163C47.9415 66.4713 47.3117 66.6625 46.6668 66.6667C45.7827 66.6667 44.9349 66.3155 44.3098 65.6904C43.6846 65.0652 43.3334 64.2174 43.3334 63.3333V56.6667C43.3409 55.3023 43.7667 53.973 44.5536 52.8583C45.3404 51.7436 46.4503 50.8972 47.7334 50.4333C48.5733 50.1504 49.2664 49.5455 49.6602 48.7516C50.054 47.9577 50.1163 47.0398 49.8334 46.2C49.5505 45.3601 48.9456 44.6671 48.1517 44.2732C47.3578 43.8794 46.44 43.8171 45.6001 44.1C44.8174 44.3947 44.0594 44.7514 43.3334 45.1667V40C43.3409 38.6356 43.7667 37.3063 44.5536 36.1916C45.3404 35.077 46.4503 34.2305 47.7334 33.7667C48.5733 33.4838 49.2664 32.8788 49.6602 32.0849C50.054 31.291 50.1163 30.3732 49.8334 29.5333C49.5505 28.6935 48.9456 28.0004 48.1517 27.6066C47.3578 27.2127 46.44 27.1504 45.6001 27.4333C44.8174 27.7281 44.0594 28.0848 43.3334 28.5V16.6667C43.3334 15.7826 43.6846 14.9348 44.3098 14.3096C44.9349 13.6845 45.7827 13.3333 46.6668 13.3333C47.5508 13.3333 48.3987 13.6845 49.0238 14.3096C49.6489 14.9348 50.0001 15.7826 50.0001 16.6667C49.9953 17.2494 49.8465 17.822 49.5668 18.3333C49.345 18.7118 49.2001 19.1303 49.1404 19.5649C49.0807 19.9994 49.1073 20.4415 49.2188 20.8658C49.3303 21.29 49.5244 21.6881 49.79 22.0372C50.0557 22.3862 50.3876 22.6794 50.7668 22.9C51.1472 23.1204 51.5675 23.2633 52.0034 23.3206C52.4394 23.3779 52.8823 23.3484 53.3068 23.2337C53.7313 23.1191 54.1289 22.9216 54.4767 22.6527C54.8245 22.3837 55.1157 22.0486 55.3334 21.6667C55.5829 21.1265 55.7946 20.5696 55.9668 20C56.199 19.9676 56.4346 19.9676 56.6668 20C57.5508 20 58.3987 20.3512 59.0238 20.9763C59.6489 21.6014 60.0001 22.4493 60.0001 23.3333C59.995 23.9868 59.7979 24.6243 59.4334 25.1667C59.1608 25.5992 58.7822 25.9549 58.3334 26.2C57.5643 26.642 57.0023 27.3715 56.771 28.2279C56.5397 29.0843 56.6581 29.9975 57.1001 30.7667C57.5421 31.5358 58.2716 32.0978 59.128 32.3291C59.9844 32.5604 60.8976 32.442 61.6668 32C62.2653 31.6763 62.8245 31.2849 63.3334 30.8333C64.4451 31.4521 65.3565 32.3761 65.96 33.4961C66.5635 34.6161 66.8339 35.8855 66.7392 37.1542C66.6446 38.423 66.1889 39.6382 65.4259 40.6563C64.663 41.6744 63.6246 42.453 62.4334 42.9H62.3001Z"
      fill={fill}
    />
  </svg>
);