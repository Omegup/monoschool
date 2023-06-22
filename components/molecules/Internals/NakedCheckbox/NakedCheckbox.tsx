import { Tick } from "@omegup-school/ui-assets"
import { joinClassNames } from "../../common/utils"
import { useContainerStateSelector } from "../../contexts/pointer"
import { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_VARIANT } from "./NakedCheckBox.constants"
import { useCheckBoxStyles } from "./NakedCheckBox.styles"
import { NakedCheckboxProps } from "./NakedCheckBox.types"

export const NakedCheckBox = ({
  variant = DEFAULT_CHECKBOX_VARIANT,
  size = DEFAULT_CHECKBOX_SIZE,
  disabled,
  checked,
  onChange,
}: NakedCheckboxProps,) => {
  const containerStateSelector = useContainerStateSelector()

  const classes = useCheckBoxStyles({ theme: { containerStateSelector } })

  return (
    <label
      tabIndex={-1}
      className={
        joinClassNames(
          classes.label,
          classes[size],
          classes[variant],
        )
      }
    >
      <input type="checkbox" className={classes.input} {...{ checked, disabled , onChange }} />
      <span className={classes.container} >
        <Tick />
      </span>
    </label>
  )
}
