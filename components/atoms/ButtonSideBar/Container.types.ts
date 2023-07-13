

export interface ControlledButtonSideBarProps  {
  isCollopsed?: boolean;
  onClick: (isCollopsed: boolean) => void;
  LeftCollopsedIcon: JSX.Element;
  RightCollopsedIcon: JSX.Element;
}
