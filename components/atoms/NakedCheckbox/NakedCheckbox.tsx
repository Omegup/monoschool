import { Tick } from "@omegup-school/ui-assets"
import { useContainerStateSelector } from "../contexts/pointer"
import { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_VARIANT } from "./NakedCheckBox.constants"
import { useCheckBoxStyles } from "./NakedCheckBox.styles"
import { ControlledNakedCheckboxProps, NakedCheckboxProps } from "./NakedCheckBox.types"
import { joinClassNames } from "@omegup-school/ui-configs/typography"

export const NakedCheckBox = ({
  variant = DEFAULT_CHECKBOX_VARIANT,
  size = DEFAULT_CHECKBOX_SIZE,
  disabled,
  checked,
  onChange,
  ref,
  onBlur,
}: ControlledNakedCheckboxProps,) => {

  const containerStateSelector = useContainerStateSelector()
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }
  const classes = useCheckBoxStyles({ theme: { containerStateSelector } })

  return (
    <label
      tabIndex={-1}
      onClick={(event) => event.stopPropagation()}
      className={
        joinClassNames(
          classes.label,
          classes[size],
          classes[variant],
        )
      }
    >
      <input onChange={changeHandler} type="checkbox" className={classes.input} {...{ checked, disabled, ref, onBlur }} />
      <span className={classes.container} >
        <Tick width="100%" />
      </span>
    </label>
  )
}
