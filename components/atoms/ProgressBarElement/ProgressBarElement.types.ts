export interface ProgressBarUnitProps {
  children: React.ReactNode;
}
export interface ControlledProgressBarUnitProps extends ProgressBarUnitProps {
  leftPercentage: number;
  width: number;
  key: number;
  onClick: () => void;
}
