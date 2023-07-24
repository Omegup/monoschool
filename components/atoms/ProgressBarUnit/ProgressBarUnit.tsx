import { useProgressBarUnitStyles } from "./ProgressBarUnit.styles";
import { ControlledProgressBarUnitProps } from "./ProgressBarUnit.types";

export const ProgressBarUnit = ({ unitIndex, leftPercentage, totalProgressUnits, children }: ControlledProgressBarUnitProps) => {

  const { unitContainer } = useProgressBarUnitStyles({ theme: { leftPercentage, totalProgressUnits } });
  return (
    <div key={unitIndex} className={unitContainer}>
      {children}
    </div>
  );
};
