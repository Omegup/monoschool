import { NakedCheckBox } from "../Internals";
import { joinClassNames } from "../common/utils";
import { ContainerStateContext } from "../contexts/pointer";
import { useLabeledCheckBoxStyles } from "./LabeledCheckBox.styles";
import { LabeledCheckBoxProps } from "./LabeledCheckBox.types";

export const LabeledCheckBox = ({
  label,
  disabled,
  checked,
  size,
  variant,
  onChange,
}: LabeledCheckBoxProps) => {

  const classes = useLabeledCheckBoxStyles();

  return (
    <div className={joinClassNames(
      classes.labeledCheckBox,
      checked && classes.enabled,
    )}>
      <ContainerStateContext.Provider value={classes.labeledCheckBox}>
        <NakedCheckBox  {...{ disabled, checked, size, variant , onChange }} />
        <label className={classes.label}>{label}</label>
      </ContainerStateContext.Provider>
    </div>

  )
}
