import { useProgressBarElementStyles } from "./ProgressBarElement.styles";
import { ControlledProgressBarUnitProps } from "./ProgressBarElement.types";

export const ProgressBarElement = ({ key, leftPercentage, width, onClick, children }: ControlledProgressBarUnitProps) => {
  const { unitContainer } = useProgressBarElementStyles({ theme: { leftPercentage, width } });
  return (
    <div className={unitContainer} {...{ onClick, key }} >
      {children}
    </div>
  );
};
