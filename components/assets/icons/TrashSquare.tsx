
export const TrashSquare = ({
  width = 20,
  height = 20,
  fill = 'none',
}:{
  width?: number | string,
  height?: number | string,
  fill?: string,
}) => {
  return (
    <svg {...{width , height , fill }} viewBox="0 0 25 24"  xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.4 9.04997C16.22 8.82997 14.02 8.71997 11.83 8.71997C10.53 8.71997 9.22997 8.78997 7.93997 8.91997L6.59998 9.04997" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.21 8.38994L10.35 7.52994C10.45 6.90994 10.53 6.43994 11.64 6.43994H13.36C14.47 6.43994 14.5499 6.92994 14.6499 7.52994L14.7899 8.37994" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.99 9.12988L16.56 15.7299C16.49 16.7599 16.43 17.5599 14.6 17.5599H10.39C8.56 17.5599 8.49999 16.7599 8.42999 15.7299L8 9.12988" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
