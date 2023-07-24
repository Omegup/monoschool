export interface ProgressBarUnitProps {
  children: React.ReactNode;
}

export interface ControlledProgressBarUnitProps extends ProgressBarUnitProps {
  leftPercentage: number;
  totalProgressUnits: number;
  unitIndex: number;
}
