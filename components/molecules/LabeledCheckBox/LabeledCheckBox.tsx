import { NakedCheckBox } from "../Internals";
import { joinClassNames } from "../common/utils";
import { ContainerStateContext } from "../contexts/pointer";
import { useLabeledCheckBoxStyles } from "./LabeledCheckBox.styles";
import { LabeledCheckBoxProps } from "./LabeledCheckBox.types";

export const LabeledCheckBox = ({
  label,
  disabled,
  enabled,
  size,
  variant,
}: LabeledCheckBoxProps) => {

  const classes = useLabeledCheckBoxStyles();

  return (
    <div className={joinClassNames(
      classes.labeledCheckBox,
      enabled && classes.enabled,
    )}>
      <ContainerStateContext.Provider value={classes.labeledCheckBox}>
        <NakedCheckBox  {...{ disabled, enabled, size, variant }} />
        <label className={classes.label}>{label}</label>
      </ContainerStateContext.Provider>
    </div>

  )
}
