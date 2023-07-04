import { forwardRef } from "react";
import { ControlledIconContainerProps } from "./IconContainer.types";
import { useIconContainerStyles } from "./IconContainer.styles";

export const IconContainer = forwardRef((
  props: ControlledIconContainerProps,
  ref?: React.Ref<HTMLDivElement>
) => {

  const { icon, padding, height, width } = props
  const { textStyle } = useIconContainerStyles({ padding, height, width })

  return (
    <div ref={ref} className={textStyle}>
      {icon}
    </div>
  )

})