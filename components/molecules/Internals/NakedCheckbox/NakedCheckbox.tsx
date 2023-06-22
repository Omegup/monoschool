import { Tick } from "@omegup-school/ui-assets"
import { CheckboxProps } from "./NakedCheckBox.types"
import { useCheckBoxStyles } from "./NakedCheckBox.styles"
import { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_VARIANT } from "./NakedCheckBox.constants"
import { useContainerStateSelector } from "../../contexts/pointer"

export const CheckBox = ({
  text,
  variant = DEFAULT_CHECKBOX_VARIANT,
  size = DEFAULT_CHECKBOX_SIZE,
  disabled,
}: CheckboxProps,) => {
  const containerStateSelector = useContainerStateSelector()

  const classes = useCheckBoxStyles({ theme: { containerStateSelector } })

  return (
    <label
      tabIndex={-1}
      className={[classes.label, `${classes[size]}`, `${classes[variant]}`].join(' ')}
    >
      <input type="checkbox" className={classes.input} disabled={disabled} />
      <span className={classes.container} >
        <Tick />
      </span>
      <p className={classes.checkBoxText}>{text ?? "checkBox"}</p>
    </label>
  )
}
