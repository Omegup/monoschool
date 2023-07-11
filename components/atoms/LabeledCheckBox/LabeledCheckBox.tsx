import { ContainerStateContext } from "../contexts/pointer";
import { useLabeledCheckBoxStyles } from "./LabeledCheckBox.styles";
import { LabeledCheckBoxProps } from "./LabeledCheckBox.types";
import { joinClassNames } from "@omegup-school/ui-configs/typography";

export const LabeledCheckBox = ({
  label,
  checked,
  children,
}: LabeledCheckBoxProps) => {

  const classes = useLabeledCheckBoxStyles();

  return (
    <div className={joinClassNames(
      classes.labeledCheckBox,
      checked && classes.enabled,
    )}>
      <ContainerStateContext.Provider value={classes.labeledCheckBox}>
        {children}
        <label className={classes.label}>{label}</label>
      </ContainerStateContext.Provider>
    </div>

  )
}
