import { Tick } from "@omegup-school/ui-assets"
import { checkboxProps } from "./CheckBox.types"
import { useCheckBoxStyles } from "./CheckBox.styles"
import { useRef, useEffect, useLayoutEffect } from "react"

export const CheckBox = ({
  variant,
  size,
  label,
  disabled,
}: checkboxProps) => {
  const classes = useCheckBoxStyles()

  return (
    <label
      tabIndex={-1}
      className={[classes.large, classes.scale, classes.label].join(' ')}
    >
      <input type="checkbox" className={classes.input} disabled={disabled} />
      <span className={classes.container} >
        <Tick />
      </span>
    </label>
  )
}
